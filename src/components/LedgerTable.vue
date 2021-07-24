<template>
    <div class="table">
      <table>
          <thead>
              <tr>
                  <th>ลำดับ</th>
                  <th>วันที่</th>
                  <th>ประเภท</th>
                  <th>รายละเอียด</th>
                  <th>จำนวนเงิน</th>
                  <th>รายรับทั้งหมด</th>
                  <th>รายจ่ายทั้งหมด</th>
                  <th>คงเหลือ</th>
              </tr>
          </thead>


          <tbody>
              <tr v-for="(led, index) in ledger" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ led.date }}</td>
                  <td>{{ led.type }}</td>
                  <td>{{ led.detail }}</td>
                  <td>{{ led.amount }}</td>
                  <td>{{ led.total_income }}</td>
                  <td>{{ led.total_expenses }}</td>
                  <td>{{ led.balance }}</td>
              </tr>
          </tbody>
      </table>

  </div>
</template>

<script>

import LedgerStore from '@/store/Ledger'
export default {
    data() {
        return {
            ledger: []
        }
    },

    created() {
        this.fetchItem();
    },

    methods: {
        async fetchItem() {
            // เรียก action ใน store ใช้ dispatch (ชื่อ action)
            await LedgerStore.dispatch('fetchItem')

            // เรียก getters ใน store
            this.ledger = LedgerStore.getters.ledger
        }
    }

}
</script>

<style lang="scss">



div[class=table]{
    background: #EFEFEF;
}

table {
    text-align: center;
    margin-right: 15em;
    padding: 0 1em 0 1em;
    width: 100%;
}

table, th, td {
    border: 0.2em solid #0A1931;
}

th {
    color: #185ADB;
}




</style>