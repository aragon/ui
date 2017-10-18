<template>
  <GalleryPage :title="title">

    <UIText spaced slot="intro">
      The Aragon UI module allows you to develop apps that look and feel like
      Aragon apps.
    </UIText>

  </GalleryPage>
</template>

<script>
  import GalleryPage from 'comps/GalleryPage.vue'
  import { UIText } from '@aragon/ui'
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    components: { UIText, GalleryPage }
  }
</script>
