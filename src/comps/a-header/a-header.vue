<template>
  <div class="header">
    <div class="header-in">
      <div>
        <a href="/" class="logo">
          <img
            alt="Aragon"
            src="./assets/logo.svg"
            width="158"
            height="50"
            v-once
          />
        </a>
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
      <div>
        <a-button outline>Try web version</a-button>
        <a-button strong>Download Aragon</a-button>
      </div>
    </div>
  </div>
</template>

<script>
  import aButton from '../a-button/a-button.vue'
  export default {
    components: { aButton },
    props: {
      menuItems: Array
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
