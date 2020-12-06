<template>
  <div class="map-container">
     <div id="map">

     </div>
  </div>
</template>

<script>
import L from 'leaflet';
export default {
  data(){
    return {
      map: {}
    }
  },
  watch: {
    filterAreaStation(val){
      this.clearMarker()
      this.addMarker(val)
    },
    currentCity(val){
      const nowStation = this.filterAreaStation.filter(station => station.縣市 === val)
      const stationLatLng = []
      if(nowStation.length >= 1){
        stationLatLng.push(nowStation[0].緯度)
        stationLatLng.push(nowStation[0].經度)
        this.map.flyTo(stationLatLng, 10)
      }
    }
  },
  methods: {
    mapInit(){
      const map = L.map('map', {
        center: [23.973875, 120.982025],
        zoom: 9,
        maxZoom: 18,
        tileSize: 512,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      this.map = map
      
    }, 
    addMarker(val){
      const map = this.map

      val.forEach(station => {
        
        const iconColor = station.類別 === '自營站' ? 'blue': 'gold'
        const icon = new L.Icon({
          iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${iconColor}.png`,
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });

        const popContent = `
        <p>站名：${station.站名}</p>
        <p>營業時間：${station.營業時間}</p>
        <p>超柴：${station.超柴 === "True" ? '有' : '無' }</p>
        <p>營業時間：${station.營業時間}</p>
        <p>地址：${station.地址}</p>
        `

        L.marker([station.緯度, station.經度], {icon})
        .addTo(map)
        .bindPopup(popContent)
      })
    },
    clearMarker(){
      if( this.map === null ) return;

      this.map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          this.map.removeLayer(layer);
        }
      });
    }
  },
  computed: {
    filterAreaStation(){
      return this.$store.getters.filterAreaStation
    },
    currentCity(){
      return this.$store.state.currentCity
    }
  },
  mounted(){
    this.mapInit()
    this.addMarker(this.filterAreaStation)
  }
}
</script>

<style lang="scss">
  .map-container {
    padding-bottom: 100px;
  }
  #map { 
    width: 100%;
    height: 800px;
  }
</style>