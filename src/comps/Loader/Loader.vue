<template>
  <Motion
    tag="div"
    v-bind:value="appearProgress"
    v-bind:spring="spring"
  >
    <template scope="props">
      <div class="loader" :style="loaderStyle(props.value)">
        {{displayText}}
      </div>
    </template>
  </Motion>
</template>

<script>
  import { Motion } from 'vue-motion'
  import { lerp } from '../../utils'

  export default {
    components: {
      Motion
    },
    props: {
      text: String
    },
    data() {
      return {
        hideTimeout: -1,
        spring: {
          stiffness: 510,
          damping: 40
        }
      }
    },
    methods: {
      loaderStyle(progress) {
        return {
          bottom: lerp(-10, 20, progress) + 'px',
          opacity: progress
        }
      },
      startHide() {
        this.hideTimeout = setTimeout(() => {
          this.stopHide()
        }, 200)
      },
      stopHide() {
        clearTimeout(this.hideTimeout)
        this.hideTimeout = -1
      }
    },
    computed: {
      displayText() {
        return this.text || 'Done.'
      },
      appearProgress() {
        return this.text || this.hideTimeout > -1? 1 : 0
      }
    },
    watch: {
      text(value) {
        if (value) {
          this.stopHide()
        } else {
          this.startHide()
        }
      }
    }
  }
</script>

<style scoped>
  .loader {
    position: fixed;
    z-index: 2;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 1px 5px rgba(var(--grey500-rgb), 0.1);
  }
</style>
