<template>
  <div>
    <UIText spaced>
      The button component in normal, outline and strong modes:
    </UIText>
    <div class="page__button__content">
      <UIButton>Normal Button</UIButton>
      <UIButton outline>Outline Mode</UIButton>
      <UIButton strong>Strong Mode</UIButton>
    </div>
  </div>
</template>

<script>
  import { UIButton, UIText } from '@aragon/ui'
  export default {
    components: { UIButton, UIText }
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
