<template>
  <section class="gallery__content">
    <h1 class="title">
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
  import { UIText } from 'ui'
  export default {
    components: { UIText },
    props: {
      title: String
    }
  }
</script>

<style>
  .gallery__content {
    width: 100%;
  }
  .gallery__content .title {
    margin-bottom: 20px;
  }
</style>
