import { createStore } from 'vuex'
const GasStationData = require('../../public/data/service_data.json')
const CityCountyData = require('../../public/data/CityCountyData.json')
const maxPagesCount = 15
const countOfPage = 15

export default createStore({
  state: {
    GasStationData,
    CityCountyData,
    currentPage: 1,
    currentCity: '台南市',
    areas: [],
    currentArea: 'null',
    searchName: '',
    isDirectly: false,
    isSelfHelp: false,
    is98: false,
    isAllTimeOpen: false
  },
  mutations: {
    setState(state, obj){
      state[obj.dataName] = obj.val
    },
  },
  getters: {
    currentCity(state){
      return state.currentCity
    },
    areas(state, getters){
      let arr = []

      state.CityCountyData.forEach(city => {
        if(city.CityName === getters.currentCity) {
          arr = city.AreaList
        }
      })

      return arr
     
    },
    currentArea(state){
      return state.currentArea
    },
    filterSearchStation(state){
      return state.GasStationData.filter(station => station.站名.includes(state.searchName))
    },
    filterDirectlyStation(state, getters){
      return state.isDirectly ? 
      getters.filterSearchStation.filter(station => station.類別 === '自營站') 
      : 
      getters.filterSearchStation
    },
    filterSelfHelpStation(state, getters){
      return state.isSelfHelp ? 
      getters.filterDirectlyStation.filter(station => station.刷卡自助 === "True") 
      : 
      getters.filterDirectlyStation
    },
    filterIs98Station(state, getters){
      return state.is98 ? 
      getters.filterSelfHelpStation.filter(station => station.無鉛98 === "True") 
      : 
      getters.filterSelfHelpStation
    },
    filterAllTimeOpen(state, getters){
      return state.isAllTimeOpen ? 
      getters.filterIs98Station.filter(station => station.營業時間 === "00:00-24:00") 
      : 
      getters.filterIs98Station
    },
    filterAreaStation(state, getters){
      if(state.currentCity !== 'null') {
        if(state.currentArea === 'null'){
          return getters.filterAllTimeOpen.filter(station => station.縣市 === state.currentCity) 
        }else {
          return getters.filterAllTimeOpen
          .filter(station => station.縣市 === state.currentCity && station.鄉鎮區 === state.currentArea) 
        }
      }else {
        return getters.filterAllTimeOpen
      }
     
      
    },
    totalPages(state, getters){
      return Math.ceil(getters.filterAreaStation.length / countOfPage)
    }, 
    dataOfCurrentPage(state, getters){
      if(getters.filterAreaStation.length > countOfPage) {
        const begin = (state.currentPage - 1) * countOfPage
        const end = begin + countOfPage

        return getters.filterAreaStation.slice(begin, end)
      }else {
        return getters.filterAreaStation
      }
    },
    pageEnd(state, getters){
      return getters.totalPages > maxPagesCount ? maxPagesCount : getters.totalPages
    },
    addPagePosition(state, getters){
      const add = 
      getters.totalPages < maxPagesCount ?
      0 : state.currentPage < 7 ? 
      0 : state.currentPage - maxPagesCount + 8

      if(getters.totalPages > maxPagesCount){
        if(state.currentPage + 8 > getters.totalPages){
          return getters.totalPages - maxPagesCount
        }
      }else {
        return add
      }

      return add
    }
  },
  actions: {
    CityCountyDataFix(store){
      let val = store.state.CityCountyData
      val.forEach(city => {
        city.CityName = city.CityName.replace('臺', '台')
        city.AreaList.forEach(area => {
          area.AreaName = area.AreaName.replace('臺', '台')
        })
      }) 

      store.commit('setState', {dataName: 'CityCountyData', val})
    }
  }
})
