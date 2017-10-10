<template>
  <UISection class="pre-footer" visual>
    <div class="main">
      <section class="section">
        <h1 class="title">Join the community</h1>
        <p class="desc">
          Be part of the conversation. Create value without borders or
          intermediaries.
        </p>
      </section>
      <section class="section">
        <h1 class="title">Try Aragon now</h1>
        <p class="desc">
          Download Aragon Alpha for macOS<br /> or try the
          <a href="">web version</a>.
        </p>
        <UIButton strong>Download Aragon Alpha for macOS</UIButton>
      </section>
    </div>
  </UISection>
</template>

<script>
  import UISection from '../Section/Section.vue'
  import UIButton from '../Button/Button.vue'
  export default {
    components: { UISection, UIButton }
  }
</script>

<style scoped>
  @import '../../shared-styles.css';
  .pre-footer {
    width: 100%;
    padding: 140px 0;
    color: var(--grey500);
    background: var(--grey700) url(./assets/background.svg) no-repeat 50% 50%;
  }
  .pre-footer .main {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .pre-footer .section {
    width: 360px;
  }
  .pre-footer .section + .section {
    text-align: right;
  }
  .pre-footer .title {
    margin-bottom: 30px;
    color: var(--white);
    font-size: 27px;
  }
  .pre-footer .desc {
    font-size: 18px;
    margin-bottom: 30px;
    & a {
      color: var(--grey400);
    }
  }
</style>
