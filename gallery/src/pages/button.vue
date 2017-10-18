<template>
  <GalleryPage :title="title">

    <div slot="intro" v-if="intro" v-html="intro" />

    <div :class="$style.demo" slot="demo">
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

    <div slot="doc" v-if="doc" v-html="doc" />
  </div>
</GalleryPage>
</template>

<script>
  import GalleryPage from 'comps/GalleryPage.vue'
  import { UIButton, UIText } from '@aragon/ui'
  import readme from '@aragon/ui/comps/Button/README.md'
  import renderReadme from 'src/render-readme'

  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        intro: '',
        doc: '',
      }
    },
    async created() {
      const { intro, doc } = await renderReadme(readme)
      this.intro = intro
      this.doc = doc
    },
    components: {
      GalleryPage,
      UIButton,
      UIText,
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
    &:first-child {
      margin: 0;
    }
  }
</style>
