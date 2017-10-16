<template>
  <div>
    <UIText spaced>
      The button component in normal, outline and strong modes:
    </UIText>
    <div :class="$style.content">
      <div>
        <UIButton>Normal Button</UIButton>
      </div>
      <div>
        <UIButton outline>Outline Mode</UIButton>
      </div>
      <div>
        <UIButton strong>Strong Mode</UIButton>
      </div>
    </div>
  </div>
</template>

<script>
  import { UIButton, UIText } from '@aragon/ui'
  export default {
    components: { UIButton, UIText }
  }
</script>

<style module>
  .content {
    display: flex;
    max-width: 800px;
  }
  .content > div {
    margin-left: 20px;
    &:first-child {
      margin: 0;
    }
  }
</style>
