<template>
  <div>
    <UIText spaced>Default:</UIText>
    <UIFooter />

    <UIText spaced>Light:</UIText>
    <UIFooter light />
  </div>
</template>

<script>
  import { UIFooter, UIText } from 'ui'
  export default {
    components: { UIFooter, UIText }
  }
</script>
