<template>
  <div class="form">
      <div>
          <p>กรุณากรอกรายละเอียด</p>
          <div>
            <label for="date">เลือกวันที่</label>
            <input type="date" v-model="form.date">
          </div>

          <div>
            <label for="type">เลือกประเภท</label>
            <select name="type" id="type" v-model="form.type">
                <option value="income">รายรับ</option>
                <option value="expenses">รายจ่าย</option>
            </select>           
          </div>

          <div>
              <label for="amount">กรอกจำนวนเงิน</label>
              <br>
              <input type="number" min="0" v-model="form.amount">
          </div>

          <div>
              <label for="detail">รายละเอียดที่ต้องการระบุ</label>
              <br>
              <textarea rows="6" cols="42" type="text" v-model="form.detail"></textarea>
          </div>

          <div>
              <button @click="addItem" id="bth">บันทึก</button>
          </div>

      </div>
  </div>
</template>

<script>
import LedgerStore from '@/store/Ledger'
export default {
    data() {
        return {
            form: {
                date: '',
                type: '',
                amount: '',
                detail: '',
            },

            total_income: 300,
            total_expenses: 50,
            balance: 250,
            temp_date: '2021-07-21'
        }
    },

    methods: {
        clearForm() {
            this.form = {
                date: '',
                type: '',
                amount: '',
                detail: '',    
            }
        },

        calculate() {
            if (this.form.date !== this.temp_date) {
                this.temp_date = this.form.date
                this.total_income = 0
                this.total_expenses = 0
                this.balance = 0
            }

            if (this.form.type !== "income") {
                this.form.type = "รายจ่าย"
                this.balance -= parseInt(this.form.amount)
                this.total_expenses += parseInt(this.form.amount)
            }
            else {
                this.form.type = "รายรับ"
                this.balance += parseInt(this.form.amount)
                this.total_income += parseInt(this.form.amount)
            }
        },

        addItem() {
            this.calculate()
            
            let payload = {
                date: this.form.date,
                type: this.form.type,
                amount: this.form.amount,
                detail: this.form.detail,
                total_income: this.total_income,
                total_expenses: this.total_expenses,
                balance: this.balance

            }

            //แล้วก็ไปเรียก action ใน store เพื่อเพิ่มข้อมูล
            console.log(payload)
            LedgerStore.dispatch('addItem', payload)

            this.clearForm()

        },



        
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,300;0,500;1,400&display=swap');

div[class=form] {
    border-left-width: 40px;
    border-right-width: 40px;
    border-bottom-width: 40px;
    border-style: solid;
    // border-width: 40px;
    border-color: #0A1931;

    background: #FFC947;
    padding-bottom: 3px;
}
div {
    font-family: 'Prompt', sans-serif;
    //background: #c5bdaa;
    font-size: 1em;
    //margin-left: 20px;
}



p {
    font-size: 1.2em;
    margin-left: 1em;
    color: #185ADB;
    font-weight: bold;
    letter-spacing: 1.8;
}

label {
    margin: 0 0.5em 0 1em;
    line-height: 2;

}

// input[type=text] {
//     width: 344px;
//     padding-bottom: 35px;
//     //border-color: #0A1931;
// }

textarea {
    resize: none;
    border-color: #0A1931;
    margin: 0 1em 0 1em;
    border-radius: 3%;
}

input[type=number] {
    width: 173px;
    padding-bottom: 3px;
    border-color: #0A1931;
}

select {
    border-radius: 9%;
    padding-left: 10px;
    margin-top: 15px;
    width: 85px;
    height: 22px;
    font-family: 'Prompt', sans-serif;
    font-size: 0.8em;
    cursor: inherit;
    line-height: inherit;
    border-color: #0A1931;
    border-width: 2px;
}

input {
    margin-left: 1em;
    border-radius: 9%;
    border-color: #0A1931;
}

//บน ขวา ล่าง ซ้าย

button {
    color: #EFEFEF;
    width: 332px;
    margin: 1.5em 0 1.2em 1em;
    font-family: 'Prompt', sans-serif;
    font-size: 0.8em;
    letter-spacing: 1.3px;
    display: inline-block;
    cursor: pointer;
    transition-duration: 0.4s;
    background: #0A1931;
    border: none;
}

button:hover {
    color: #FFC947;
    background: #185ADB;
}


h3 {
    color: #FFC947;
    font-weight: bold;
    letter-spacing: 4.6px;
    font-size: 3em;
    text-align: center;
    height: 150px;
    padding-top: 75px;
    background: #0A1931;
    margin: 0;
}

</style>