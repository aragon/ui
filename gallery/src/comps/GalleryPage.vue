<template>
  <section :class="$style.main">
    <UIText :heading="1" :class="$style.title">
      {{ title }}
    </UIText>

    <div v-show="$slots.intro">
      <slot name="intro" />
    </div>

    <div v-show="$slots.demo">
      <UIText :heading="2" :class="$style.h2">Example</UIText>
      <slot name="demo" />
    </div>

    <div v-show="$slots.doc">
      <section :class="$style.doc">
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
  }
  .main .title {
    margin-bottom: 40px;
    font-weight: bold;
    font-size: 24px;
    color: #000;
  }
  .main h2 {
    margin-top: 60px;
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 18px;
    color: #000;
  }
  .doc {
    color: #717171;
  }
  .doc h1 {
    display: none;
  }
  .doc h2, .doc h3 {
    color: #000;
    font-weight: 600;
  }
  .doc h3 {
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .doc h2 code, .doc h3 code {
    padding: 0;
    background: none;
  }
  .doc code {
    padding: 0 3px;
    border-radius: 5px;
    color: #000;
    background: white;
  }
  .doc pre {
    padding: 20px;
    border-radius: 5px;
  }
  .doc pre code {
    color: inherit;
    background: inherit;
  }
  .doc p, .doc ul {
    list-style-position: inside;
    line-height: 2;
    margin-bottom: 20px;
  }
</style>
