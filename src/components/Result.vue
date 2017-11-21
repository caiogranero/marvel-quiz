<template>
  <div id="result">
    <h1>Your score is: {{userPoints}} points!!</h1>
    <br>
    <p>
      <social-sharing url="https://vuejs.org/"
        title="The Progressive JavaScript Framework"
        description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
        quote="Vue is a progressive framework for building user interfaces."
        hashtags="vuejs,javascript,framework"
        twitter-user="vuejs"
        inline-template>
          <div>
            <network network="whatsapp" v-if="isMobile">
              <i class="fa fa-whatsapp"></i>
            </network>
            <network network="telegram" v-if="isMobile">
              <i class="fa fa-telegram"></i>
            </network>
            <network network="facebook">
              <i class="fa fa-facebook"></i>
            </network>
            <network network="twitter">
              <i class="fa fa-twitter"></i>
            </network>
          </div>
      </social-sharing>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Result',

  data () {
    return {
      isMobile: false
    }
  },

  computed: {
    userPoints () {
      return this.$store.state.userPoints
    }
  },

  methods: {
    getWidth (event) {
      const width = document.body.clientWidth || event.target.innerWidth

      // Need validation to avoid commit in store every time a event were emit
      if (width <= 500) {
        this.isMobile = true
      } else if (width > 500) {
        this.isMobile = false
      }
    },

    // Create a custom event
    throttle (type, name, obj) {
      obj = obj || window
      var running = false
      var func = () => {
        if (running) { return }
        running = true
        requestAnimationFrame(() => {
          obj.dispatchEvent(new CustomEvent(name))
          running = false
        })
      }
      obj.addEventListener(type, func)
    }
  },

  created () {
    this.throttle('resize', 'optimizedResize')

    // On resize window, get the width value and collapse sidebar
    window.addEventListener('optimizedResize', (event) => {
      this.getWidth(event)
    })
  }
}
</script>

<style scoped>
#result {
  margin-top: 30px;
  text-align: center;
}
</style>
