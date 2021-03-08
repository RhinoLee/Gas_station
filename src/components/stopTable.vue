<template>
  <div>
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th><abbr title="站代號">站代號</abbr></th>
            <th><abbr title="站名">站名</abbr></th>
            <th><abbr title="縣市">縣市-鄉鎮區</abbr></th>
            <th><abbr title="直營/加盟">直營/加盟</abbr></th>
            <th><abbr title="自助加油">自助加油</abbr></th>
            <th><abbr title="98無鉛汽油">98無鉛汽油</abbr></th>
            <th><abbr title="營業時間">營業時間</abbr></th>
            <th><abbr title="電話">電話</abbr></th>
            <th><abbr title="地址">地址</abbr></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="station in dataOfCurrentPage" :key="station.站代號">
            <td>{{ station.站代號 }}</td>
            <td>{{ station.站名 }}</td>
            <td>{{ station.縣市 }} - {{ station.鄉鎮區 }}</td>
            <td>{{ station.類別 }}</td>
            <td>{{ station.刷卡自助 }}</td>
            <td>{{ station.無鉛98 }}</td>
            <td>{{ station.營業時間 }}</td>
            <td>{{ station.電話 }}</td>
            <td><a target="_blank" :href="`https://www.google.com/maps/place/${station.縣市}${station.鄉鎮區}${station.地址}/@${station.經度}, ${station.緯度}`">{{ station.地址 }}</a></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th><abbr title="站代號">站代號</abbr></th>
            <th><abbr title="站名">站名</abbr></th>
            <th><abbr title="縣市">縣市</abbr></th>
            <th><abbr title="直營/加盟">直營/加盟</abbr></th>
            <th><abbr title="自助加油">自助加油</abbr></th>
            <th><abbr title="98無鉛汽油">98無鉛汽油</abbr></th>
            <th><abbr title="營業時間">營業時間</abbr></th>
            <th><abbr title="電話">電話</abbr></th>
            <th><abbr title="地址">地址</abbr></th>
          </tr>
        </tfoot>
        
      </table>

    </div>

  </div>
</template>

<script>
export default {
  computed: {
    dataOfCurrentPage(){
      return this.$store.getters.dataOfCurrentPage
    },
  }, 
};
</script>

<style lang="scss" scoped>
  table {
    width: 100%;
  }
</style>

