<template>
  <a-section class="illustrated-section" :class="{ dark }">
    <div class="main">
      <div class="illustration" v-if="illustrationBefore">
        <slot name="illustration" />
      </div>
      <div class="text-content">
        <div class="title">
          <slot name="title" />
        </div>
        <div class="subtitle">
          <slot name="subtitle" />
        </div>
        <div class="emphasis">
          <slot name="emphasis" />
        </div>
        <div class="content">
          <slot name="content" />
        </div>
      </div>
      <div class="illustration" v-if="!illustrationBefore">
        <slot name="illustration" />
      </div>
    </div>
  </a-section>
</template>

<script>
  import aSection from '../a-section/a-section.vue'
  export default {
    props: {
      dark: Boolean,
      illustrationBefore: Boolean
    },
    components: { aSection }
  }
</script>

<style scoped>
  @import '../../shared-styles.css';
  .illustrated-section {
    padding: 235px 0 140px;
  }
  .main {
    display: flex;
    align-items: center;
  }
  .illustration {
    width: 450px;
    margin-left: 50px;
  }
  .illustration:first-child {
    margin-left: 0;
    margin-right: 60px;
  }
  .title {
    margin-bottom: 10px;
    font-size: 18px;
    text-transform: uppercase;
    color: var(--aragon);
  }
  .subtitle {
    font-size: 37px;
    font-weight: 200;
    line-height: 1.3;
    color: var(--black);
  }
  .dark .subtitle {
    color: var(--white);
  }
  .emphasis {
    margin: 40px 0;
    padding-left: 30px;
    font-size: 19px;
    border-left: 4px solid var(--aragonAlt);
    color: var(--black);
  }
  .dark .emphasis {
    color: var(--white);
  }
  .content {
    font-size: 18px;
  }
  .content>>>p {
    margin-bottom: 1em;
  }
</style>
