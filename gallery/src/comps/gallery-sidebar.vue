<template>
  <section :class="$style.sidebar">
    <h1 :class="$style.title">
      <a :href="pages[0].path" @click.prevent="open(pages[0].path)">
        {{ pages[0].name }}
      </a>
    </h1>
    <nav>
      <ul>
        <li :class="$style.menuItem" v-for="page in pages.slice(1)">
          <a :href="page.path" @click.prevent="open(page.path)">{{ page.name }}</a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
  export default {
    props: {
      pages: Array
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
    font-size: 14px;
    font-weight: bold;
  }
  .title a {
    text-decoration: none;
  }
  .menuItem {
    list-style: none;
    margin: 10px 0;
  }
</style>
