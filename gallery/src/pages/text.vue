<template>
  <GalleryPage :title="title" :readme="readme">
    <div slot="demo">
      <UIText spaced>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod.
      </UIText>
    </div>
  </GalleryPage>
</template>

<script>
  import GalleryPage from 'comps/GalleryPage.vue'
  import { UIText } from '@aragon/ui'
  import readme from '@aragon/ui/comps/Text/README.md'

  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    data() {
      return { readme }
    },
    components: { GalleryPage, UIText }
  }
</script>
