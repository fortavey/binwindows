const sliderVue = new Vue({
  el: '.specialists',
  data: {
    list: [
      {
        name: 'Дмитрий Иванов',
        positionShort: 'Мастер',
        positionFull: 'Мастер компании “Бин окна”',
        expirience: '9 лет',
        education: 'высшее',
        desc: 'Что бы хорошо жить, нужно много работать. А для того, что бы стать богатым нужно придумать  что-то другое.',
        image: './assets/img/spec.png',
      },
      {
        name: 'Дмитрий Иванов2',
        positionShort: 'Мастер',
        positionFull: 'Мастер компании “Бин окна”',
        expirience: '9 лет',
        education: 'высшее',
        desc: 'Что бы хорошо жить, нужно много работать. А для того, что бы стать богатым нужно придумать  что-то другое.',
        image: './assets/img/spec.png',
      },
      {
        name: 'Дмитрий Иванов3',
        positionShort: 'Мастер',
        positionFull: 'Мастер компании “Бин окна”',
        expirience: '9 лет',
        education: 'высшее',
        desc: 'Что бы хорошо жить, нужно много работать. А для того, что бы стать богатым нужно придумать  что-то другое.',
        image: './assets/img/spec.png',
      },
      {
        name: 'Дмитрий Иванов4',
        positionShort: 'Мастер',
        positionFull: 'Мастер компании “Бин окна”',
        expirience: '9 лет',
        education: 'высшее',
        desc: 'Что бы хорошо жить, нужно много работать. А для того, что бы стать богатым нужно придумать  что-то другое.',
        image: './assets/img/spec.png',
      },
    ],
    currentIndex: 0,
  },
  computed: {
    nextIndex() {
      let index = this.currentIndex + 1;
      if(index == this.list.length) index = 0;

      return index;
    },
    prevIndex() {
      let index = this.currentIndex - 1;
      if(index < 0) index = this.list.length - 1;

      return index;
    },
  },
  methods: {
    changeIndex(bool) {
      bool ? this.currentIndex += 1 : this.currentIndex -= 1;
      
      if(this.currentIndex == this.list.length) this.currentIndex = 0;
      if(this.currentIndex < 0) this.currentIndex = this.list.length - 1;
    },
    changeIndexOnClick(index) {
      this.currentIndex = index;
    }
  }
});