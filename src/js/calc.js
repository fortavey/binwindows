if( document.querySelectorAll('.vue-calc').length ){
  try{
    (function(){
      
      const calcVue = new Vue({
        el: '.vue-calc',
        template: `
        <div class="vue-calc">
          <div class="wrapper">
            <div class="buttons">
              <div class="buttons__item" :class="grids ? 'active' : ''" @click="change(true)">Москитные сетки</div>
              <div class="buttons__item" :class="windows ? 'active' : ''"  @click="change(false)">Ремонт окон</div>
            </div>
            <grids-calc v-if="grids"></grids-calc>
            <window-calc v-if="windows"></window-calc>
          </div>
        </div>
        `,
        data: {
          grids: true,
        },
        computed: {
          windows() {
            return !this.grids;
          }
        },
        methods: {
          change(bool){
            if(bool && this.windows) this.grids = !this.grids;
            if(!bool && this.grids) this.grids = !this.grids;
          },
        }
      });
    })();

  }catch(err){console.log(err);}
  }