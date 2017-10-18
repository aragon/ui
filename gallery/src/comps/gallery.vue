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
      GallerySidebar,
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
