<template>
  <div id="app">
    <div class="menu">
      <div class="name">Marvelous Quiz</div>
      <div class="next next-icon" v-if="timeout > 0">
        <p id="counter">{{timeout}}</p>
      </div>
    </div>
    <div id="content">
      <Quiz @counter="startCount" v-if="$store.state.round < 11"></Quiz>
      
      <Result v-if="$store.state.round === 11"></Result>
    </div>
  </div>
</template>

<script>
import Quiz from '@/components/Quiz'
import Result from '@/components/Result'

export default {
  name: 'app',

  data () {
    return {
      timeout: -1
    }
  },

  components: { Quiz, Result },

  methods: {
    startCount () {
      this.timeout = 3
      const timer = window.setInterval(() => {
        if (this.timeout === -1) {
          window.clearInterval(timer)
          return
        }

        this.timeout -= 1
      }, 1000)
    }
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Satisfy|Pathway+Gothic+One);
/* Defaults */
html, body, #app {
  width: 100%;
  height: 100%;
  background: #E0E0E0;
  font-family: 'Lato', sans-serif;
  margin: 0px auto;
}

h1 {
  font-family: 'Satisfy', 'cursive';
  font-size: 2.5em;
  margin-top: 30px;
}

h2,p {
  font-family: 'Pathway Gothic One', 'sans-serif';
  font-size: 2em;
  font-weight: 300;
}

h1,h2,p {
    text-align: center;
    display: block;
    width: auto;
    margin: 1%;
}

.menu {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 50px;
  background: rgba(239, 83, 80,0.9);
  z-index: 100;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: default;
}

.name {
  position: absolute;
  top: 3px;
  left: 20px;
  font-size: 25px;
  font-weight: 300;
  color: rgba(255,255,255,0.98);
}

.next-icon {
  position: fixed;
  width: 30px;
  z-index: 100;
  color: white;
  line-height: 50px;
  font-size: 30px;
  padding-left: 10px;
  font-size: 16px;
}

.next {
  right: 10px;
}

#content {
  padding: 50px;
}
</style>
