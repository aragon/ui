<template>
  <GalleryPage :title="title">
    <div slot="demo">
      <UIText spaced>
        The text component can be used to display text.
      </UIText>
    </div>
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
    components: { GalleryPage, UIText }
  }
</script>
