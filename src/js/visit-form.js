const visitFormVue = new Vue({
  el: '.visit-form',
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