<template>
  <GalleryPage :title="title" :readme="readme">
    <div :class="$style.demo">
      <div>
        <UIButton>Normal Button</UIButton>
      </div>
      <div>
        <UIButton outline>Outline Mode</UIButton>
      </div>
      <div>
        <UIButton strong>Strong Mode</UIButton>
      </div>
    </div>
  </GalleryPage>
</template>

<script>
  import GalleryPage from 'comps/GalleryPage.vue'
  import { UIButton } from '@aragon/ui'
  import readme from '@aragon/ui/comps/Button/README.md'

  export default {
    data() {
      return { readme }
    },
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    components: {
      GalleryPage,
      UIButton,
    },
  }
</script>

<style module>
  .demo {
    display: flex;
    max-width: 800px;
  }
  .demo > div {
    margin-left: 20px;
  }
  .demo > div:first-child {
    margin: 0;
  }
</style>
