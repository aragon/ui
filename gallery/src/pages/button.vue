<template>
  <section>
    <h1>Button Component</h1>

    <div>
      <a-button>Normal Button</a-button>
      <a-button outline>Outline Mode</a-button>
      <a-button strong>Strong Mode</a-button>
    </div>
  </section>
</template>

<script>

import { aButton } from 'toolkit'

export default {
  components: {
    aButton
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>
