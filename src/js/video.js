if(document.querySelectorAll('.main-slider__video').length) {
  try{
    Vue.component('video-popup', {
      template: `
        <div class="video-popup" @click="hidePopup"><div v-html="iframeCode" @click.stop :style="videoSize"></div></div>
      `,
      data: () => ({
        iframeCode: '',
      }),
      computed: {
        videoSize(){
          const windowWidth = window.innerWidth;
          const videoHeight = windowWidth / 1.7777777777777777777777;
          return {
            maxWidth: '1000px',
            width: '100%',
            height: videoHeight + 'px',
            maxHeight: '550px',
          }
        }
      },
      methods: {
        hidePopup(){
          this.$emit('hidepopup');
        }
      },
      created(){
        this.iframeCode = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/QZubGaHKNOw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      }
    });
    
    const videoVue = new Vue({
      el: '.main-slider__video',
      data: {
        showPopup: false,
      },
      methods: {
        hidePopup(){
          this.showPopup = false;
        }
      }
    });
  }catch(err){console.log(err);}
}