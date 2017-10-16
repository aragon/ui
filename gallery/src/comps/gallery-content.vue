<template>
  <section :class="$style.content">
    <h1 :class="$style.title">
      <UIText>
        {{ title }}
      </UIText>
    </h1>
    <div>
      <slot />
    </div>
  </section>
</template>

<script>
  import { UIText } from '@aragon/ui'
  export default {
    components: { UIText },
    props: {
      title: String
    }
  }
</script>

<style module>
  .content {
    width: 100%;
    padding: 40px;
  }
  .title {
    margin-bottom: 40px;
  }
  .title .text {
    color: #000;
    font-weight: bold;
    font-size: 24px;
  }
</style>
