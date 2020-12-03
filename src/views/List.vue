<template>
  <div class="container">
    <navBar></navBar>
    <stopTable></stopTable>
    <pagination></pagination>
  </div>
</template>

<script>
import navBar from '../components/navBar.vue'
import stopTable from '../components/stopTable.vue'
import pagination from '../components/pagination.vue'

export default {
  components: {
    navBar,
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