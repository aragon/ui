<template>
  <p :class="{ [$style.text]: true, [$style.spaced]: spaced }">
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

<style module>
  @import '../../shared-styles.css';
  .text {
    color: var(--grey500);
  }
  .spaced {
    margin: 20px 0;
  }
</style>
