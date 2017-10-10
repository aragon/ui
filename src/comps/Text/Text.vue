<template>
  <p class="text" :class="{ 'text--spaced': spaced }">
    <slot />
  </p>
</template>

<script>
  export default {
    props: {
      spaced: Boolean
    }
  }
</script>

<style>
  @import '../../shared-styles.css';
  .text {
    color: var(--grey500);
  }
  .text--spaced {
    margin: 20px 0;
  }
</style>
