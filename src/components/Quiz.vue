<template>
  <div id="quiz">
    <h2 id="question">What is the name of this actor/actress?</h2>
    <div class="md-container" id="quiz-content" v-if="!loading">
      <div class="md-content">
        <img :src="image" id="cast-image">

        <p id="score-points">Score: {{userPoints}}</p>
        <give-up @showAnswer="showAnswer"></give-up>
        <br>
      </div>
      <p v-if="displayAnswer">There answer is: {{name}}</p>
      <answer @answered="answered" :disabled="disableInput"></answer>
    </div>
    <spinner v-if="loading"></spinner>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner'
import Answer from '@/components/Answer'
import GiveUp from '@/components/GiveUp'

import _ from 'lodash'

export default {
  name: 'Quiz',

  components: { Spinner, Answer, GiveUp },

  data () {
    return {
      image: null,
      name: '',
      loading: false,
      displayAnswer: false,
      disableInput: false
    }
  },

  computed: {
    userPoints () {
      return this.$store.state.userPoints
    },

    casts () {
      return this.$store.state.casts
    }
  },

  watch: {
    // Control the changes of user score
    userPoints () {
      window.setTimeout(() => {
        this.displayAnswer = false
        this.disableInput = false
        this.saveCast()
      }, 5000)
    },

    casts () {
      this.saveCast()
    }
  },

  methods: {
    // When the answer were answered, emit a event to start the countdown
    answered () {
      this.$emit('counter')
    },

    // Display answer
    showAnswer () {
      this.displayAnswer = true
      this.disableInput = true
      this.$store.commit('removePoint')
      this.$emit('counter')
    },

    // Save current cast
    saveCast () {
      const movie = _.sample(this.casts)
      const cast = _.sample(movie)

      this.$store.commit('setCast', cast)
      this.image = cast.image
      this.name = cast.name
    }
  },

  created () {
    const query = [
      {
        'movie_id': 'tt4154756'
      }
      //   title: 'Avengers: Infinity War',
      //   year: 2018
    ]

    this.loading = true
    // Search in IMDB API for the casts from Avengers Movie
    this.$IMDBService.get(query).then(response => {
      let casts = response.map(el => {
        return el.data.cast.map(cast => {
          return {name: cast.name, image: cast.image}
        })
      })

      this.$store.commit('saveCasts', casts)
    }, error => {
      console.error('Ops! Deu erro', error)
    }).then(() => {
      this.loading = false
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.md-content-right {
  align-self: flex-end;
}

#cast-image {
  margin-top: 30px;
}

#score-points {
  margin-top: 30px;
}

#quiz-content {
  min-height: 500px;
}

#question {
  margin-top: 30px;
}
</style>
