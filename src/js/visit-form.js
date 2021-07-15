try{
if(document.querySelectorAll('.visit-form').length) {

const visitFormVue = new Vue({
  el: '.visit-form',
  template: `
  <div class="visit-form">
          <div class="visit-form__title">
              Вызвать мастера <strong>БЕСПЛАТНО</strong> <br>
              по тел: +7 495 266 61 03 <br>
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
            <div class="visit-form__submit" @click="submit">Вызвать мастера</div>

            <div class="choose-district choose-value" 
                  :style="districtStyle"
                  @click="changeDistrictShow(false)">
              <div class="choose-value__close"><img src="${location.origin}/wp-content/themes/binwindows/assets/img/close.svg" alt="close"></div>
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
            <div class="send-message" v-if="showSendWindow" @click="showSendWindow=false"><p style="text-align:center">{{ msgs }}</p></div>
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
    showType: false,
    showSendWindow: false
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
    },
    submit(){
      if(this.phone.length > 9){
          document.querySelector('.hidden-full-form .ff-type').value = this.repairType;
          document.querySelector('.hidden-full-form .ff-district').value = this.district;
          document.querySelector('.hidden-full-form .ff-date').value = this.date;
          document.querySelector('.hidden-full-form .ff-phone').value = this.phone;
          document.querySelector('.hidden-full-form input[type=submit]').click();
          this.showSendWindow = true;
          this.msgs = 'Ваша заявка отправлена!';
          this.phone = '';
          this.name = '';
      }else{
          this.showSendWindow = true;
          this.msgs = 'Введите корректные данные!';
      }
    },
  },
  created(){
    let types = [
      'Утепление окон', 
      'Регулировка', 
      'Замена уплотнителя', 
      'Устранение запотевания',
      'Замена ручки'
    ];
    let districts = [
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
    fetch(location.origin+"/wp-admin/admin-ajax.php?action=form")
    .then(res => res.json())
    .then(data => {
      districts = data.districts.split('\r\n');
      types = data.serviceType.split('\r\n');
    })
    .catch(err => console.log(err))
    .finally(e => {
      this.repairTypes.push(...types);
      this.districts.push(...districts);
      this.repairType = this.repairTypes[0];
    })
  }
});

}
}catch(err){console.log(err);}