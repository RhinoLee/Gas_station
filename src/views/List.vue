<template>
  <div class="container">
    <searchBar></searchBar>
    <stopTable></stopTable>
    <pagination></pagination>
  </div>
</template>

<script>
import searchBar from '../components/searchBar.vue'
import stopTable from '../components/stopTable.vue'
import pagination from '../components/pagination.vue'

export default {
  components: {
    searchBar,
    stopTable,
    pagination
  }
}
</script>


<style lang="scss" scoped>
  .container {
    padding-bottom: 60px;
  }
    
</style>