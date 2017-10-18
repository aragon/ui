<template>
  <div :class="{
    [$style.header]: true,
    [$style.headerWithTitle]: true,
  }">
    <div :class="$style.headerIn">
      <div>
        <a href="/" :class="$style.logo" v-if="!title">
          <img
            alt="Aragon"
            src="./assets/logo.svg"
            width="158"
            height="50"
            v-once
          />
        </a>
        <a href="/" :class="$style.logo" v-if="title">
          <img src="./assets/isotype.svg" width="44" v-once />
          <img src="./assets/logotype.svg" width="99" v-once />
        </a>
        <div v-if="title" :class="$style.title">
          <h1>{{title}}</h1>
        </div>
        <nav :class="$style.nav">
          <ul>
            <li v-for="item in menuItems" :class="$style.navItem">
              <a
                :href="item[0]"
                :class="{[$style.active]: item[2]}"
              >{{item[1]}}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div v-if="!title">
        <div :class="$style.button"><UIButton outline>Try web version</UIButton></div>
        <div :class="$style.button"><UIButton strong>Download Aragon</UIButton></div>
      </div>
    </div>
  </div>
</template>

<script>
  import UIButton from '../Button/Button.vue'
  export default {
    components: { UIButton },
    props: {
      menuItems: Array,
      title: String,
    }
  }
</script>

<style module>
  @import '../../shared-styles.css';
  .header {
    padding: 0 12px;
    background: var(--white);
  }
  .headerIn {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    min-height: 70px;
    max-width: 1140px;
    margin: 0 auto;
  }
  .headerIn > div {
    display: flex;
    align-items: center;
    &:first-child {
      align-items: stretch;
    }
  }
  .logo {
    display: flex;
    align-items: center;
  }
  .headerWithTitle .logo {
    padding-right: 40px;
    border-right: 1px solid #e8e8e8;
    padding-top: 6px;
    padding-bottom: 8px;
  }
  .headerWithTitle .logo img:first-child {
    margin-right: 10px;
  }
  .title {
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-left: 40px;
  }
  .nav {
    display: flex;
    align-items: stretch;
    list-style: none;
    margin-left: 45px;
  }
  .nav ul {
    display: flex;
    align-items: stretch;
  }
  .navItem {
    display: flex;
    align-items: stretch;
    white-space: nowrap;
  }
  .navItem a {
    display: flex;
    align-items: center;
    padding: 0 15px;
    text-decoration: none;
    font-size: 15px;
    color: var(--grey500);
    &.active {
      color: var(--turquoise500);
    }
  }
  .button {
    margin-left: 10px;
    &:first-child {
      margin: 0;
    }
  }
</style>
