<template>
  <div class='container'>
    <searchBar></searchBar>
    <stationMap></stationMap>
  </div>
</template>



<script>
import stationMap from '../components/stationMap.vue'
import searchBar from '../components/searchBar.vue'

export default {
  components: {
    stationMap,
    searchBar
  },
  mounted(){
    this.$store.commit('setState', {
      dataName: 'isMapMode',
      val: true
    })

    
  }, 
  unmounted(){
    this.$store.commit('setState', {
      dataName: 'isMapMode',
      val: false
    })
  }
}
</script>