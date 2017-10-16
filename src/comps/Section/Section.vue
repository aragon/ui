<template>
  <component
    :is="visual ? 'div' : 'section'"
    :class="{ [$style.large]: large }"
  >
    <div>
      <div :class="$style.content">
        <slot />
      </div>
    </div>
  </component>
</template>

<script>
  export default {
    props: {
      large: Boolean,
      visual: Boolean
    }
  }
</script>

<style module>
  @import '../../shared-styles.css';
  .content {
    margin: 0 auto;
    width: 100%;
    max-width: var(--cols10);
  }
  .large {
    max-width: var(--cols12);
  }
</style>
