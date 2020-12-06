<template>
  <div>
     <div id="map">

     </div>
  </div>
</template>

<script>
import L from 'leaflet';
export default {
  methods: {
    mapInit(){
      var map = L.map('map', {
        center: [23.973875, 120.982025],
        zoom: 9,
        maxZoom: 18,
        tileSize: 512,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      // 經度, 緯度
      // L.marker([23.973875, 120.982025])
      //   .addTo(map)
      //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      
      this.filterAreaStation.forEach(station => {
        L.marker([station.緯度, station.經度])
        .addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      })
    }, 
  },
  computed: {
    filterAreaStation(){
      return this.$store.getters.filterAreaStation
    }
  },
  mounted(){
    this.mapInit()
  }
}
</script>

<style lang="scss">
  #map { 
    margin: auto;
    width: 1000px;
    height: 800px;
  }
</style>