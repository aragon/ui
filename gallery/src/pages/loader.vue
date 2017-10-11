<template>
  <div>
    <div>
      <UIButton @click.native='showLoader()' outline>Show Loader</UIButton>
      <UILoader :text='loaderText' />
    </div>
  </div>
</template>

<script>
  import { UILoader, UIText, UIButton } from '@aragon/ui'
  export default {
    components: { UILoader, UIText, UIButton },
    data() {
      return {
        loaderText: ''
      }
    },
    methods: {
      showLoader() {
        this.loaderText = 'Loading something…'
        setTimeout(() => {
          this.loaderText = ''
        }, 1000)
      }
    }
  }
</script>
