<template>
  <section class="gallery__content">
    <h1 class="gallery__content__title">
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
    padding: 40px;
  }
  .gallery__content .gallery__content__title {
    margin-bottom: 40px;
  }
  .gallery__content .gallery__content__title .text {
    color: #000;
    font-weight: bold;
    font-size: 24px;
  }
</style>
