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
    currentCity: 'null',
    areas: [],
    currentArea: 'null',
    searchName: ''
  },
  mutations: {
    setCurrentPage(state, payload){
      state.currentPage = payload
    },
    setCurrentCity(state, payload){
      state.currentCity = payload
    },
    setCurrentArea(state, payload){
      state.currentArea = payload
    },
    setSearchName(state, payload){
      state.searchName = payload
    },
    

  },
  getters: {
    filterSearchStation(state){
      return state.GasStationData.filter(station => station.站名.includes(state.searchName))
    },
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
    totalPages(state, getters){
      return Math.ceil(getters.filterSearchStation.length / countOfPage)
    }, 
    dataOfCurrentPage(state, getters){
      if(getters.filterSearchStation.length > countOfPage) {
        const begin = (state.currentPage - 1) * countOfPage
        const end = begin + countOfPage

        return getters.filterSearchStation.slice(begin, end)
      }else {
        return getters.filterSearchStation
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
})
