<template>
  <div>
    <pre>{{ currentCountry }}</pre>
    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">

          <div class="is-multiple">
            <div class="select">
              <select v-model="currentCity">
                <option value="null">縣市</option>
                <option 
                v-for="city in CityCountyData" 
                :key="city.CityName"
                >
                {{ city.CityName }}
                </option>
              </select>
            </div>
          </div>
          
          <div class="is-multiple">
            <div class="select">
              <select v-model="currentArea">
                <option value="null">鄉鎮</option>
                <option 
                v-for="area in areas" 
                :key="area.AreaName"
                >
                {{ area.AreaName }}
                </option>
              </select>
            </div>
          </div>
          

        </div>
      </div>

      <div class="navbar-end">
        <!-- navbar items -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    currentCity(){
      this.currentArea = 'null'
    }
  },
  computed: {
    CityCountyData(){
      return this.$store.state.CityCountyData
    },
    currentCity: {
      get(){
        return this.$store.getters.currentCity
      },
      set(val){
        this.$store.commit('setCurrentCity', val)
      }
    },
    areas(){
      return this.$store.getters.areas
    },
    currentArea: {
      get(){
        return this.$store.getters.currentArea
      },
      set(val){
        this.$store.commit('setCurrentArea', val)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.navbar-menu {
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>


[
  {
    "CityName": "臺北市",
    "CityEngName": "Taipei City",
    "AreaList": [
      {
        "ZipCode": "100",
        "AreaName": "中正區",
        "AreaEngName": "Zhongzheng Dist."
      },
    ]
  }
}