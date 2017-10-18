<template>
  <GalleryPage :title="title">
    <div slot="demo">
      <UIText spaced>Default:</UIText>
      <UIFooter />

      <UIText spaced>Light:</UIText>
      <UIFooter light />
    </div>
  </GalleryPage>
</template>

<script>
  import GalleryPage from 'comps/GalleryPage.vue'
  import { UIFooter, UIText } from '@aragon/ui'
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    components: { GalleryPage, UIFooter, UIText }
  }
</script>
