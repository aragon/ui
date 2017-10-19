<template>
  <section :class="$style.sidebar">
    <h1 :class="$style.title">
      <a :href="pages[0].path" @click.prevent="open(pages[0].path)">
        {{ pages[0].name }}
      </a>
    </h1>
    <nav>
      <ul>
        <li
          v-for="page in pages.slice(1)"
          :class="{
            [$style.menuItem]: true,
            [$style.menuItemActive]: page === activePage
          }"
        >
          <a :href="page.path" @click.prevent="open(page.path)">{{ page.name }}</a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
  export default {
    props: {
      pages: Array,
      activePage: Object,
    },
    methods: {
      open(path) {
        this.$emit('openPage', path)
      }
    }
  }
</script>

<style module>
  .sidebar {
    padding: 40px;
  }
  .title {
    margin-bottom: 40px;
    font-size: 18px;
    font-weight: bold;
    white-space: nowrap;
  }
  .title a {
    text-decoration: none;
  }
  .menuItem {
    margin: 10px 0;
    list-style: none;
    font-size: 1.1rem;
  }
  .menuItem a {
    text-decoration: none;
  }
  .menuItem a:active {
    color: var(--grey500);
  }
  .menuItemActive {
    position: relative;
    font-weight: 600;
  }
  .menuItemActive:before {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    left: -10px;
    top: calc(50% - 2px);
    border-radius: 2px;
    background: var(--aragon);
  }
</style>
