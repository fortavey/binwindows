try{
if(document.querySelectorAll('.visit-form').length) {

const visitFormVue = new Vue({
  el: '.visit-form',
  template: `
  <div class="visit-form">
          <div class="visit-form__title">
              Вызвать мастера <strong>БЕСПЛАТНО</strong> <br>
              по тел: +7 (495) 000-00-00 <br>
              или <br>
              <strong>заполните форму</strong>
            </div>
            <div class="visit-form__item yes-select" @click="changeTypeShow(true)">
              <span class="sp">Выберите вид ремонта:</span>
              <div class="visit-form__repair-type">{{ repairType }}</div>
            </div>
            <div class="visit-form__item yes-select" @click="changeDistrictShow(true)">
              <span class="sp">В каком районе Москвы Вы находитесь:</span>
              <div class="visit-form__district">{{ district }}</div>
            </div>
            <div class="visit-form__item" @click="changeCalendarShow(true)">
              <span class="sp">Когда к Вам приехать</span>
              <div class="visit-form__date">{{ renderDate }}
                <div class="calendar-picker" :style="calendarStyle" @click.stop>
                  <v-date-picker v-model="date" @dayclick="changeCalendarShow(false)" />
                </div>
              </div>
            </div>
            <div class="visit-form__item">
              <div class="visit-form__phone">
                <input type="tel" placeholder="Ваш телефон" v-model="phone">
              </div>
            </div>
            <div class="visit-form__submit">Вызвать мастера</div>

            <div class="choose-district choose-value" 
                  :style="districtStyle"
                  @click="changeDistrictShow(false)">
              <div class="choose-value__close"><img src="./assets/img/close.svg" alt="close"></div>
              <div class="choose-value__title">Выберите район</div>
              <div class="choose-value__container">
                <div class="choose-value__item"
                      v-for="(value, index) in districts"
                      @click="setDistrict(index)"
                >
                {{ value }}
                </div>
              </div>
            </div>

            <div class="choose-type choose-value" 
                  :style="typeStyle"
                  @click="changeTypeShow(false)">
              <div class="choose-value__close"><img src="./assets/img/close.svg" alt="close"></div>
              <div class="choose-value__title">Выберите вид ремонта</div>
              <div class="choose-value__container">
                <div class="choose-value__item"
                      v-for="(value, index) in repairTypes"
                      @click="setType(index)"
                >
                {{ value }}
                </div>
              </div>
            </div>
  </div>
  `,
  data: {
    repairTypes: [],
    repairType: '',
    districts: [],
    district: 'Москва',
    date: new Date(),
    phone: '',
    showCalendar: false,
    showDistrict: false,
    showType: false
  },
  computed: {
    calendarStyle() {
      return this.showCalendar ? 'display: block' : 'display: none';
    },
    districtStyle() {
      return this.showDistrict ? 'display: flex' : 'display: none';
    },
    typeStyle() {
      return this.showType ? 'display: flex' : 'display: none';
    },
    renderDate() {
      const date = new Date(this.date);
      let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      let month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
      return `${day}.${month}.${date.getFullYear()}`;
    }
  },
  methods: {
    changeCalendarShow(bool) {
      this.showCalendar = bool ? true : false;
    },
    changeDistrictShow(bool) {
      this.showDistrict = bool ? true : false;
    },
    changeTypeShow(bool) {
      this.showType = bool ? true : false;
    },
    setDistrict(index) {
      this.district = this.districts[index];
    },
    setType(index) {
      this.repairType = this.repairTypes[index];
    }
  },
  created(){
    const types = [
      'Утепление окон', 
      'Регулировка', 
      'Замена уплотнителя', 
      'Устранение запотевания',
      'Замена ручки'
    ];
    const districts = [
      'Академический',
      'Алексеевский',
      'Алтуфьевский',
      'Арбат',
      'Аэропорт',
      'Бабушкинский',
      'Басманный',
      'Беговой',
      'Бескудниковский',
      'Бибирево',
      'Бирюлёво Восточное',
      'Бирюлёво Западное',
      'Богородское',
      'Братеево',
      'Бутырский',
      'Вешняки',
    ]
    this.repairTypes.push(...types);
    this.districts.push(...districts);
    this.repairType = this.repairTypes[0];
  }
});

}
}catch(err){console.log(err);}