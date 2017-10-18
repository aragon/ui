<template>
  <GalleryPage :title="title">
    <div slot="demo">
      <UIButton @click.native='showLoader()' outline>Show Loader</UIButton>
      <UILoader :text='loaderText' />
    </div>
  </GalleryPage>
</template>

<script>
  import GalleryPage from 'comps/GalleryPage.vue'
  import { UILoader, UIText, UIButton } from '@aragon/ui'
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    components: { GalleryPage, UILoader, UIText, UIButton },
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
