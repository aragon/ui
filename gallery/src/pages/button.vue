<template>
  <div>
    <a-text spaced>
      The button component in normal, outline and strong modes:
    </a-text>
    <div class="page__button__content">
      <a-button>Normal Button</a-button>
      <a-button outline>Outline Mode</a-button>
      <a-button strong>Strong Mode</a-button>
    </div>
  </div>
</template>

<script>
  import { aButton, aText } from 'ui'
  export default {
    components: {
      aButton,
      aText
    }
  }
</script>

<style>
  .page__button__content {
    display: flex;
    max-width: 800px;
  }
  .page__button__content .button + .button {
    margin-left: 20px;
  }
</style>
