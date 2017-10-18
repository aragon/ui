<template>
  <div :class="$style.gallery">
    <UIBaseStyles />
    <div :class="$style.sidebar">
      <GallerySidebar
        :pages='pages'
        :activePage='page'
        @openPage='handleOpenPage'
      />
    </div>
    <component :is="page.comp" :title="page.name" />
  </div>
</template>

<script>
  import Vue from 'vue'
  import createHistory from 'history/createBrowserHistory'
  import { UIBaseStyles } from '@aragon/ui'
  import GallerySidebar from 'comps/GallerySidebar.vue'

  import home from 'pages/home.vue'
  import button from 'pages/button.vue'
  import text from 'pages/text.vue'
  import header from 'pages/header.vue'
  import footer from 'pages/footer.vue'
  import preFooter from 'pages/pre-footer.vue'
  import loader from 'pages/loader.vue'

  const PAGES = [
    [home, 'Aragon UI', '/'],
    [text, 'Text', '/text/'],
    [button, 'Button', '/button/'],
    [header, 'Header', '/header/'],
    [footer, 'Footer', '/footer/'],
    [preFooter, 'PreFooter', '/pre-footer/'],
    [loader, 'Loader', '/loader/'],
  ]

  const preparePages = (path, pages) => pages.map(p => ({
    comp: p[0],
    name: p[1],
    path: path + p[2].replace(/^\//, '')
  }))

  export default {
    components: {
      GallerySidebar,
      UIBaseStyles,
    },
    props: {
      path: String
    },
    data() {
      return {
        pages: null,
        page: null,
      }
    },
    methods: {
      handleOpenPage(page) {
        this.history.push(page, {})
      },
      handleLocationUpdate(location) {
        const page = this.pages.find(page => page.path === location.pathname)
        if (page) {
          this.page = page
        }
      },
    },
    created() {
      this.pages = preparePages(this.path, PAGES)
      this.page = this.pages[0]

      this.history = createHistory()
      this.unlistenHistory = this.history.listen(this.handleLocationUpdate)
      this.handleLocationUpdate(this.history.location, true)
    },
    destroyed() {
      this.unlistenHistory()
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
  @import url(../prism-theme.css);
  code {
    font-family: 'Source Code Pro', monospace;
  }
</style>

<style module>
  .gallery {
    display: flex;
    height: 100%;
  }
  .sidebar {
    margin-right: 20px;
  }
</style>
