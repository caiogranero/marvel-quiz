<template>
  <div class="play">
    <div class="text-icon type">
      <i class="fa fa-keyboard-o"></i>
    </div>
    <div class="send text-icon" @click="send">
      <i class="fa fa-chevron-right" id="btn-send-text"></i>
    </div>
    <input class="textarea" :disabled="disabled" type="text" v-model="answer" id="message-text" placeholder="Type here!"/>
  </div>
</template>

<script>
export default {
  name: 'Answer',

  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data () {
    return {
      answer: ''
    }
  },

  computed: {
    cast () {
      return this.$store.state.currentCast
    }
  },

  methods: {
    /**
     * Used to send the cast name
     */
    send () {
      if (this.disabled === false) {
        if (this.answer === this.cast.name) {
          this.$store.commit('addPoint')
        } else {
          this.$store.commit('removePoint')
        }
        this.answer = ''
        this.$emit('answered')
      }
    }
  }
}
</script>

<style scoped>

.type {
  left: 0px;
}

.send {
  right: 10px;
}

input.textarea {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 50px;
  z-index: 99;
  background: #fafafa;
  border: none;
  outline: none;
  padding-left: 55px;
  padding-right: 55px;
  color: #666;
  font-weight: 400;
}

.text-icon {
  position: fixed;
  width: 30px;
  bottom: 0%;
  z-index: 100;
  color: #afafaf;
  line-height: 50px;
  font-size: 30px;
  padding-left: 10px;
  cursor: pointer;
}

</style>
