<template>
  <UISection class="footer" :class="{'footer-light': light}" visual>
    <div class="main">
      <div class="first-part">
        <img src="./assets/logo.svg" width="158" height="50" alt="Aragon" />
        <ul v-if="!light">
          <li>
            <a href="">Core</a>
          </li>
          <li>
            <a href="">Network</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">FAQs</a>
          </li>
        </ul>
        <ul v-if="!light">
          <li>
            <a href="">Join us</a>
          </li>
          <li>
            <a href="">Press kit</a>
          </li>
          <li>
            <strong>
              <a href="">Download</a>
            </strong>
          </li>
        </ul>
      </div>
      <ul class="second-part">
        <li>
          <a href="" class="icon twitter">
            Twitter
          </a>
        </li>
        <li>
          <a href="" class="icon medium">
            Medium
          </a>
        </li>
        <li>
          <a href="" class="icon slack">
            Slack
          </a>
        </li>
        <li>
          <a href="" class="icon mail">
            Email
          </a>
        </li>
      </ul>
    </div>
  </UISection>
</template>

<script>
  import UISection from '../Section/Section.vue'
  export default {
    props: {
      light: Boolean
    },
    components: { UISection }
  }
</script>

<style scoped>
  @import '../../shared-styles.css';
  .footer {
    padding: 90px 0 110px;
    font-size: 15px;
    color: var(--grey500);
    background: var(--grey700);
  }
  .footer-light {
    padding: 30px 0;
    background: var(--grey800);
  }
  .footer-light .second-part {
    display: flex;
    align-items: center;
  }
  .footer-light .second-part li {
    margin-bottom: 0;
    margin-left: 20px;
  }
  .footer-light .icon {
    padding-left: 25px;
  }
  .main {
    display: flex;
    justify-content: space-between;
  }
  .first-part {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }
  .footer li {
    margin: 0 0 10px;
    list-style: none;
  }
  .footer a {
    text-decoration: none;
  }
  .footer strong a {
    color: var(--turquoise500);
    font-weight: 400;
  }
  .icon {
    padding-left: 30px;
    background-repeat: no-repeat;
    background-position: 0 50%;
  }
  .icon.twitter {
    background-image: url(./assets/twitter.svg);
  }
  .icon.medium {
    background-image: url(./assets/medium.svg);
  }
  .icon.slack {
    background-image: url(./assets/slack.svg);
  }
  .icon.mail {
    background-image: url(./assets/mail.svg);
  }
</style>
