<template>
  <div class="header" :class="{ 'header--title': title }">
    <div class="header-in">
      <div>
        <a href="/" class="logo" v-if="!title">
          <img
            alt="Aragon"
            src="./assets/logo.svg"
            width="158"
            height="50"
            v-once
          />
        </a>
        <a href="/" class="logo" v-if="title">
          <img src="./assets/isotype.svg" width="44" v-once />
          <img src="./assets/logotype.svg" width="99" v-once />
        </a>
        <div v-if="title" class="title">
          <h1>{{title}}</h1>
        </div>
        <nav class="nav">
          <ul>
            <li v-for="item in menuItems">
              <a
                :href="item[0]"
                :class="{active: item[2]}"
              >
                {{item[1]}}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div v-if="!title">
        <UIButton outline>Try web version</UIButton>
        <UIButton strong>Download Aragon</UIButton>
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

<style scoped>
  @import '../../shared-styles.css';
  .header {
    background: var(--white);
    & .button {
      margin-left: 10px;
    }
  }
  .header-in {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    min-height: 70px;
    max-width: 1140px;
    margin: 0 auto;
  }
  .header-in > div {
    display: flex;
    align-items: center;
  }
  .header-in > div:first-child {
    align-items: stretch;
  }
  .logo {
    display: flex;
    align-items: center;
  }
  .header--title .logo {
    padding-right: 40px;
    border-right: 1px solid #e8e8e8;
    padding-top: 6px;
    padding-bottom: 8px;
  }
  .header--title .logo img:first-child {
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
    & ul {
      display: flex;
      align-items: stretch;
      list-style: none;
      margin-left: 30px;
    }
    & li {
      display: flex;
      align-items: stretch;
    }
    & a {
      display: flex;
      align-items: center;
      padding: 0 30px;
      text-decoration: none;
      font-size: 15px;
      color: var(--grey500);
      &.active {
        color: var(--turquoise500);
      }
    }
  }
</style>
