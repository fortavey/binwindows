Vue.directive('phone', {
  bind(el) {  
    el.oninput = function(e) {
      if (!e.isTrusted) {
        return;
      }

      const x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
      el.dispatchEvent(new Event('input'));
    }
  },
});

Vue.component('grids-calc', {
  template: `
  <div class="grids__cont">
    <div class="grid__image">
      <input type="range" min="0" max="3000" class="range range-vertical" v-model="height">
      <img src="./assets/img/grid.png">
      <input type="range" min="0" max="3000" class="range range-horizontal" v-model="width">
    </div>
    <div class="grid__info">
      <div class="grid__row"><div class="first-word">Ширина сетки</div> <span><input type="number" v-model="width"></span> мм</div>
      <div class="grid__row"><div class="first-word">Высота сетки</div> <span><input type="number" v-model="height"></span> мм</div>
      <div class="grid__row">
        Выберите тип сетки 
        <select  v-model="type">
          <option value="1188" selected="">Рамочная</option>
          <option value="2288">Раздвижная</option>
          <option value="5713">Роллетная</option>
          <option value="3838">Дверная</option>
          <option value="3000">Плиссе (DFM)</option>
          <option value="4400">Плиссе (Zanzar)</option>
        </select>
      </div>
      <div class="grid__row">
        Выберите наполнение
        <select v-model="filling">
          <option value="0">Антимоскитная</option>
          <option value="1600">Антикошка</option>
          <option value="1400">Антипыль</option>
          <option value="1400">Антимошка</option>
          <option value="1902">Антипыльца</option>
          <option value="1300">Ультравью</option>
          <option value="3911">Антибактериальная</option>
          <option value="1500">Антиптица(металл)</option>
          <option value="1852">Солнцезащитная</option>
        </select>
      </div>
      <div class="grid__row">Выберите цвет</div>
      <div class="grid__colors">
        <div class="white grid__color" :class="whiteColor ? 'active' : ''" @click="changeColor(true)"></div>
        <div class="brown grid__color" :class="brownColor ? 'active' : ''" @click="changeColor(false)"></div>
        <div class="else-colors grid__color">Другой цвет</div>
      </div>
      <div class="grid__price">Цена <span>{{ total }}</span> руб.</div>
      <div class="grid__form">
        <input
          type="tel" 
          v-model="phone"
          name="phone"
          placeholder="(000) 000-0000"
          maxlength="14"
          v-phone
          pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"
          required
        />
        <div class="grid__submit">заказать сетку</div>
      </div>
    </div>
  </div>
  `,
  data: () => ({
    width: 1000,
    height: 1000,
    type: 1188,
    filling: 0,
    whiteColor: true,
    phone: '',
  }),
  computed: {
    brownColor(){
      return !this.whiteColor;
    },
    total(){
      if(this.width < 1000 || this.height < 1000) return 990;
      if(this.filling > 0) return (+this.width + +this.height + +this.type + +this.filling - 2000) * 2;
      return +this.width + +this.height + +this.type + +this.filling - 2000;
    }
  },
  methods: {
    changeColor(bool){
      if(bool && !this.whiteColor) this.whiteColor = true;
      if(!bool && this.whiteColor) this.whiteColor = false;
    }
  }
});