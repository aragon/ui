<template>
  <button class="button" :class="{ outline, strong }">
    <slot />
  </button>
</template>

<script>
  export default {
    props: {
      strong: Boolean,
      outline: Boolean,
    }
  }
</script>

<style>
  @import '../../shared-styles.css';
  .button {
    padding: 12px 25px;
    color: var(--grey500);
    background: var(--white);
    cursor: pointer;
    border: 0;
    border-radius: 3px;
    &.outline {
      border: 1px solid rgba(var(--grey500-rgb), 0.2);
    }
    &.strong {
      color: var(--white);
      font-weight: 600;
      background-image: linear-gradient(
        130deg,
        var(--aragon),
        var(--aragonAlt)
      );
    }
  }
</style>
