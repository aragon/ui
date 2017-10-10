<template>
  <div class="gallery">
    <UIBaseStyles />
    <div class="gallery__sidebar">
      <gallery-sidebar :pages='pages' @openPage='handleOpenPage' />
    </div>
    <gallery-content :title="page.name">
      <component :is="page.comp" />
    </gallery-content>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { UIBaseStyles } from 'ui'
  import createHistory from 'history/createBrowserHistory'
  import gallerySidebar from 'comps/gallery-sidebar.vue'
  import galleryContent from 'comps/gallery-content.vue'

  import home from 'pages/home.vue'
  import button from 'pages/button.vue'
  import text from 'pages/text.vue'
  import header from 'pages/header.vue'
  import footer from 'pages/footer.vue'
  import preFooter from 'pages/pre-footer.vue'
  import loader from 'pages/loader.vue'

  const pages = [
    [home, 'Aragon UI', '/'],
    [text, 'Text', '/text'],
    [button, 'Button', '/button'],
    [header, 'Header', '/header'],
    [footer, 'Footer', '/footer'],
    [preFooter, 'PreFooter', '/pre-footer'],
    [loader, 'Loader', '/loader'],

  ].map(p => ({
    comp: p[0],
    name: p[1],
    path: p[2]
  }))

  export default {
    components: {
      gallerySidebar,
      galleryContent,
      UIBaseStyles,
    },
    data() {
      return {
        pages,
        page: pages[0]
      }
    },
    methods: {
      handleOpenPage(page) {
        this.history.push(page, {})
      },
      handleLocationUpdate(location) {
        const match = location.pathname.match(/^(\/[a-z\-]*)\/?$/)
        if (!match || !match[1]) {
          return
        }
        const page = pages.find(page => page.path === match[1])
        if (page) {
          this.page = page
        }
      },
    },
    created() {
      this.history = createHistory()
      this.unlistenHistory = this.history.listen(this.handleLocationUpdate)
      this.handleLocationUpdate(this.history.location, true)
    },
    destroyed() {
      this.unlistenHistory()
    }
  }
</script>

<style scoped>
  .gallery {
    display: flex;
    height: 100%;
  }
  .gallery__sidebar {
    width: 200px;
    padding-right: 20px;
    margin-right: 20px;
  }
</style>
