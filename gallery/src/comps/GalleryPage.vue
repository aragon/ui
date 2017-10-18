<template>
  <section :class="$style.main">
    <UIText :heading="1" :class="$style.title">
      {{ title }}
    </UIText>

    <div v-show="$slots.intro">
      <div :class="[$style.intro, $style.markdown]">
        <slot name="intro" />
      </div>
    </div>

    <div v-show="$slots.demo">
      <UIText :heading="2">Example</UIText>
      <slot name="demo" />
    </div>

    <div v-show="$slots.doc">
      <section :class="[$style.doc, $style.markdown]">
        <slot name="doc" />
      </section>
    </div>
  </section>
</template>

<script>
  import { UIText } from '@aragon/ui'

  export default {
    components: { UIText },
    props: {
      title: {
        type: String,
        required: true,
      }
    }
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
