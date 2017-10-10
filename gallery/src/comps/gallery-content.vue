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
  export default {
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
