<template>
  <section :class="$style.main">

    <UIText :heading="1" :class="$style.title">
      {{ title }}
    </UIText>

    <div v-if="intro" v-html="intro" :class="$style.markdown" />

    <div v-show="$slots.default">
      <UIText :heading="2">Example</UIText>
      <slot />
    </div>

    <div v-if="doc" v-html="doc" :class="$style.markdown" />
  </section>
</template>

<script>
  import renderReadme from 'src/render-readme'
  import { UIText } from '@aragon/ui'

  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      readme: {
        type: String,
        required: false,
      }
    },
    data() {
      return {
        intro: '',
        doc: '',
      }
    },
    async created() {
      if (!this.readme) {
        return
      }

      const { intro, doc } = await renderReadme(this.readme)
      this.intro = intro
      this.doc = doc
    },
    components: { UIText },
  }
</script>

<style module>
  .main {
    width: 100%;
    padding: 40px;
    color: #717171;
  }
  .main .title {
    margin-bottom: 40px;
    font-weight: bold;
    font-size: 24px;
    color: #000;
  }
  .main h2,
  .main h3 {
    color: #000;
    font-weight: 600;
  }
  .main h2 {
    margin-top: 60px;
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 18px;
    color: #000;
  }
  .main h3 {
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .markdown code {
    padding: 0 3px;
    border-radius: 5px;
    color: #000;
    background: white;
  }
  .markdown pre {
    padding: 20px;
    border-radius: 5px;
  }
  .markdown pre code {
    color: inherit;
    background: inherit;
  }
  .markdown h2 code,
  .markdown h3 code {
    padding: 0;
    background: none;
  }
  .markdown p,
  .markdown ul {
    list-style-position: inside;
    line-height: 2;
    margin-bottom: 20px;
  }
</style>
