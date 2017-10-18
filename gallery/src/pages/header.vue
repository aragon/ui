<template>
  <GalleryPage :title="title">
    <div slot="demo">
      <UIText spaced>Default:</UIText>
      <UIHeader />
      <UIText spaced>With menu entries:</UIText>
      <UIHeader
        :menuItems='[
          ["/entry1", "Entry 1"],
          ["/entry2", "Entry 2"],
          ["/entry3", "Entry 3", true],
          ["/entry4", "Entry 4"],
        ]'
      />
      <UIText spaced>With a title:</UIText>
      <UIHeader title="Project" />
    </div>
  </GalleryPage>
</template>

<script>
  import GalleryPage from 'comps/GalleryPage.vue'
  import { UIHeader, UIText } from '@aragon/ui'
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    components: { GalleryPage, UIHeader, UIText }
  }
</script>
