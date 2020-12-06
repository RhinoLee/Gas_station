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
  }
}
</script>