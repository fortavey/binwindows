Vue.component('window-calc', {
  template: `
  <div class="windows__cont">
    <div class="windows__top">
      <div class="windows__image"><img :src="windowsList[checkedWindow].image" alt="img"></div>
      <div class="windows__type">
        <div class="windows__type-title">Выберите тип окна</div>

        <div class="windows__type-check" v-for="(window, index) in windowsList">
          <input 
            type="radio" 
            name="window" 
            :id="'window-' + index"
            v-model="checkedWindow"
            :value="index">
            <label :for="'window-' + index">{{ window.name }}</label>
        </div>
      </div>
    </div>
    <div class="windows__products">
      <div class="windows__product" v-for="(product, index) in windowsList[checkedWindow].items">
        <div class="windows__product-name">{{ product.name }}</div>

        <div class="windows__item" v-for="(item, idx) in product.services">
          <div class="windows__item-title">{{ item.name }}</div>
          <div class="windows__item-quantity">
            <div class="decrement f-rules" @click="decrement(item)">-</div>
            <div class="counter">{{ item.counter }}</div>
            <div class="increment f-rules" @click="increment(item)">+</div>
          </div>
          <div class="windows__item-price">{{ item.price }}р</div>
        </div>

      </div>
    </div>
    <div class="windows-total">Итого: <span>{{ total }}</span> руб.</div>
  </div>
  `,
  data: () => ({
    grids: false,
    checkedWindow: 0,
    windowsList: [],
  }),
  computed: {
    total(){
      return this.windowsList[this.checkedWindow].items.reduce((acc, el) => {
        acc += el.services.reduce((ac, ell) => {
          ac += ell.counter * ell.price;
          return ac;
        }, 0); 
        return acc;
      }, 0);
    }
  },
  methods: {
    increment(item){
      item.counter += 1;
    },
    decrement(item){
      item.counter -= 1;
      if(item.counter < 0) item.counter = 0;
    },
  },
  created(){
    const windowsList = [
      {
        name: 'Пластиковое окно',
        image: '/wp-content/themes/binwindows/assets/img/service1.png',
        items: [
          {
            name: 'Стандарт',
            services: [
              {
                name: 'Регулировка створки',
                price: 450,
                counter: 0,
              },
              {
                name: 'Регулировка двери (простая)',
                price: 700,
                counter: 0,
              },
              {
                name: 'Выравнивание створки ',
                price: 1100,
                counter: 0,
              },
              {
                name: 'Выравнивание геометрии двери',
                price: 1500,
                counter: 0,
              },
              {
                name: 'Замена уплотнителя (1 м.п.)',
                price: 150,
                counter: 0,
              },
              {
                name: 'ТО (переборка, очистка)',
                price: 1000,
                counter: 0,
              },
            ]
          },
          {
            name: 'Замена фурнитуры',
            services: [
              {
                name: 'Замена фурнитуры на поворотную створку',
                price: 3500,
                counter: 0,
              },
              {
                name: 'Замена фурнитуры на поворотно-откидную створку (материал + работа)	',
                price: 4500,
                counter: 0,
              },
              {
                name: 'Петля оконная нерегулируемая	',
                price: 1500,
                counter: 0,
              },
              {
                name: 'Петля оконная регулируемая	',
                price: 1750,
                counter: 0,
              },
              {
                name: 'Ответная планка	',
                price: 500,
                counter: 0,
              },
              {
                name: 'Установка микро-проветривания	',
                price: 1500,
                counter: 0,
              },
            ]
          },
          {
            name: 'Аксессуары',
            services: [
              {
                name: 'Ручка оконная белая',
                price: 500,
                counter: 0,
              },
              {
                name: 'Ручка с ключом	',
                price: 3200,
                counter: 0,
              },
              {
                name: 'Ручка обратная с защёлкой на дверь	',
                price: 1100,
                counter: 0,
              },
              {
                name: 'Гребёнка (ограничитель открывания)	',
                price: 500,
                counter: 0,
              },
              {
                name: 'Доводчик',
                price: 3500,
                counter: 0,
              },
              {
                name: 'Декоративные накладки на петли	',
                price: 300,
                counter: 0,
              },
              {
                name: 'Клапан приточного воздуха	',
                price: 1500,
                counter: 0,
              },
            ]
          },
          {
            name: 'Врезка створки в глухой стеклопакет:',
            services: [
              {
                name: 'Замена на поворотную створку',
                price: 1500,
                counter: 0,
              },
              {
                name: 'Замена на поворотно-откидную створку',
                price: 2160,
                counter: 0,
              },
            ]
          },
        ],
      },
      {
        name: 'Деревянное окно',
        image: '/wp-content/themes/binwindows/assets/img/service2.png',
        items: [
          {
            name: 'Замена фурнитуры',
            services: [
              {
                name: 'Замена фурнитуры на поворотную створку',
                price: 3500,
                counter: 0,
              },
              {
                name: 'Замена фурнитуры на поворотно-откидную створку (материал + работа)	',
                price: 4500,
                counter: 0,
              },
              {
                name: 'Петля оконная нерегулируемая	',
                price: 1500,
                counter: 0,
              },
            ]
          },
          {
            name: 'Стандарт',
            services: [
              {
                name: 'Регулировка створки',
                price: 450,
                counter: 0,
              },
              {
                name: 'Регулировка двери (простая)',
                price: 700,
                counter: 0,
              },
              {
                name: 'Выравнивание створки ',
                price: 1100,
                counter: 0,
              },
            ]
          },
          {
            name: 'Аксессуары',
            services: [
              {
                name: 'Ручка оконная белая',
                price: 500,
                counter: 0,
              },
              {
                name: 'Ручка с ключом	',
                price: 3200,
                counter: 0,
              },
              {
                name: 'Ручка обратная с защёлкой на дверь	',
                price: 1100,
                counter: 0,
              },
            ]
          },
          {
            name: 'Врезка створки в глухой стеклопакет:',
            services: [
              {
                name: 'Замена на поворотную створку',
                price: 1500,
                counter: 0,
              },
              {
                name: 'Замена на поворотно-откидную створку',
                price: 2160,
                counter: 0,
              },
              {
                name: 'Ручка обратная с защёлкой на дверь	',
                price: 1100,
                counter: 0,
              },
            ],
          },
        ],
      },
      {
        name: 'Аллюминиевое окно',
        image: '/wp-content/themes/binwindows/assets/img/service3.png',
        items: [
          {
            name: 'Аксессуары',
            services: [
              {
                name: 'Ручка оконная белая',
                price: 500,
                counter: 0,
              },
              {
                name: 'Ручка с ключом	',
                price: 3200,
                counter: 0,
              },
            ]
          },
          {
            name: 'Стандарт',
            services: [
              {
                name: 'Регулировка створки',
                price: 450,
                counter: 0,
              },
              {
                name: 'Регулировка двери (простая)',
                price: 700,
                counter: 0,
              },
            ]
          },
          {
            name: 'Замена фурнитуры',
            services: [
              {
                name: 'Замена фурнитуры на поворотную створку',
                price: 3500,
                counter: 0,
              },
              {
                name: 'Замена фурнитуры на поворотно-откидную створку (материал + работа)	',
                price: 4500,
                counter: 0,
              },
            ]
          },
          {
            name: 'Врезка створки в глухой стеклопакет:',
            services: [
              {
                name: 'Замена на поворотную створку',
                price: 1500,
                counter: 0,
              },
              {
                name: 'Замена на поворотно-откидную створку',
                price: 2160,
                counter: 0,
              },
            ],
          },
        ],
      },
    ];
    this.windowsList.push(...windowsList);
  }
});