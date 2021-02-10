try{
if(document.querySelectorAll('.specialists').length) {

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
        name: 'Юрий Николаев',
        positionShort: 'Мастер',
        positionFull: 'Технолог компании “Бин окна”',
        expirience: '39 лет',
        education: 'среднее',
        desc: 'Ценно лишь то, чем вы можете насладиться.',
        image: './assets/img/spec1.png',
      },
      {
        name: 'Юлия Юрашкевич',
        positionShort: 'Оператор',
        positionFull: 'Оператор компании “Бин окна”',
        expirience: '5 лет',
        education: 'высшее',
        desc: 'Ничто не подмочит репутацию нашего качества.',
        image: './assets/img/spec2.jpg',
      },
      {
        name: 'Сергей Миронов',
        positionShort: 'Мастер',
        positionFull: 'Мастер компании “Бин окна”',
        expirience: '5 лет',
        education: 'среднее',
        desc: 'Если любите прохладу, свежий воздух круглый год – обращайтесь на Московский вентиляторный завод!',
        image: './assets/img/spec3.jpg',
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

}
}catch(err){console.log(err);}