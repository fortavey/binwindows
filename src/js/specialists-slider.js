try{
if(document.querySelectorAll('.specialists').length) {

const sliderVue = new Vue({
  el: '.specialists',
  data: {
    list: [],
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
  },
  created() {
    fetch(`${location.origin}/wp-admin/admin-ajax.php?action=spec`)
    .then(res => res.json())
    .then(data => this.list.push(...data))
    .catch(err => console.log(err));
  },
});

}
}catch(err){console.log(err);}