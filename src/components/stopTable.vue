<template>
  <div>
    <!-- <pre>{{ allGasStation }}</pre> -->
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
            <td>{{ station.地址 }}</td>
          </tr>
          <!-- <tr>
            <th>1</th>
            <td>
              <a
                href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                title="Leicester City F.C."
                >Leicester City</a
              >
              <strong>(C)</strong>
            </td>
            <td>38</td>
            <td>23</td>
            <td>12</td>
            <td>3</td>
            <td>68</td>
            <td>36</td>
            <td>+32</td>
          </tr> -->
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
    allGasStation(){
      return this.$store.state.GasStationData
    },
    dataOfCurrentPage(){
      return this.$store.getters.dataOfCurrentPage
    }
  }, 
};
</script>

<style lang="scss" scoped>
  table {
    width: 100%;
  }
</style>

