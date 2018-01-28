<template lang="pug">
  .admin
    .mainblock
      .sidebar
        Tabs
      .rightblock
        .header
          App-Header
        .content
          router-view
        .footer
</template>

<script>
export default {
  components: {
    AppHeader: require('./components/header.vue'),
    Tabs: require('./components/tabs.vue')
  }
}
</script>