<template>
  <GalleryPage :title="title">
    <div slot="demo">
      <UIPreFooter />
    </div>
  </GalleryPage>
</template>

<script>
  import GalleryPage from 'comps/GalleryPage.vue'
  import { UIPreFooter } from '@aragon/ui'
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    components: { GalleryPage, UIPreFooter }
  }
</script>
