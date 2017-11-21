<template>
  <div id="give-up">
    <input type="button" id="btn-give-up" :disabled="btnDisabled" @click="reveal" value="I give up, who is it?">
  </div>
</template>

<script>
export default {
  name: 'GiveUp',

  data () {
    return {
      btnDisabled: false
    }
  },

  computed: {
    cast () {
      return this.$store.state.currentCast
    }
  },

  methods: {
    // Reveal the answer of this question
    reveal () {
      this.btnDisabled = true
      this.$emit('showAnswer')
      window.setTimeout(() => {
        this.btnDisabled = false
      }, 3000)
    }
  }
}
</script>

<style scoped>
#btn-give-up {
  margin:15px;
  font-family: 'open sans', helvetica, arial, sans;
  display: inline-block;
  padding: 4px 14px;
  margin-bottom: 0;
  font-size: 15px;
  line-height:20px;
  color: #666;
  text-align: center;
  text-shadow: 0 1px 0px rgba(255, 255, 255, .125);
  vertical-align: middle;
  cursor: pointer;
  background-color: #fff;
  border: solid 1px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
</style>
