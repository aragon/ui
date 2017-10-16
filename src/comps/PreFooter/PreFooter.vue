<template>
  <UISection :class="$style.preFooter" visual>
    <div :class="$style.main">
      <section :class="$style.section">
        <h1 :class="$style.title">Join the community</h1>
        <p :class="$style.desc">
          Be part of the conversation. Create value without borders or
          intermediaries.
        </p>
      </section>
      <section :class="$style.section">
        <h1 :class="$style.title">Try Aragon now</h1>
        <p :class="$style.desc">
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

<style module>
  @import '../../shared-styles.css';
  .preFooter {
    width: 100%;
    padding: 140px 0;
    color: var(--grey500);
    background: var(--grey700) url(./assets/background.svg) no-repeat 50% 50%;
  }
  .main {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .section {
    width: 360px;
  }
  .section + .section {
    text-align: right;
  }
  .title {
    margin-bottom: 30px;
    color: var(--white);
    font-size: 27px;
  }
  .desc {
    font-size: 18px;
    margin-bottom: 30px;
  }
  .desc a {
    color: var(--grey400);
  }
</style>
