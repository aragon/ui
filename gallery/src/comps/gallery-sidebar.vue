<template>
  <section class="gallery-sidebar">
    <h1 class="title">
      <a :href="pages[0].path" @click.prevent="open(pages[0].path)">
        {{ pages[0].name }}
      </a>
    </h1>
    <nav>
      <ul>
        <li v-for="page in pages.slice(1)">
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

<style scoped>
  .gallery-sidebar {
    padding: 20px;
  }
  .gallery-sidebar .title {
    font-size: 14px;
    margin-bottom: 20px;
  }
  .gallery-sidebar .title a {
    text-decoration: none;
  }
  .gallery-sidebar li {
    list-style: none;
    margin: 10px 0;
  }
</style>
