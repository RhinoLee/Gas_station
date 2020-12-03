<template>
  <div class="container"> 
    <div class="pagination wrapper">
      <nav class="pagination" role="navigation" aria-label="pagination">
        <a @click.prevent="setPage(currentPage - 1)" class="pagination-previous">Previous</a>
        <a @click.prevent="setPage(currentPage + 1)" class="pagination-next">Next page</a>
        <ul class="pagination-list">
          <!-- <li>
            <a class="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
          </li> -->

          <li v-for="p in pageEnd" :key="p">
            <a 
            @click.prevent="setPage(p + addPagePosition)" 
            class="pagination-link" 
            :class="{ 'is-current': currentPage === p + addPagePosition }"
            >
            {{ p + addPagePosition }}
            </a>
          </li>

        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    totalPages(){
      return this.$store.getters.totalPages
    },
    currentPage: {
      get(){
        return this.$store.state.currentPage
      },
      set(val){
        this.$store.commit('setCurrentPage', val)
      }
    },
    pageEnd(){
      return this.$store.getters.pageEnd
    },
    addPagePosition(){
      return this.$store.getters.addPagePosition
    }

    
  },
  methods: {
    setPage(val){
      if(val <= 0 || val > this.totalPages){
        return 
      }
      this.currentPage = val
    }
  }
}
</script>

<style lang="scss" scoped>
  .pagination.wrapper {
    margin-top: 45px  
  }
    
</style>