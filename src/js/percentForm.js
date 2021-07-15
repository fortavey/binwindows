if( document.querySelectorAll('.percent-form').length ){
    try{
      (function(){

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
        
        const callMaster = new Vue({
          el: '.get-sale-wrapper',
          template: `
            <div class="call-m">
                <form action="">
                <input
                    type="text" 
                    v-model="phone"
                    name="phone"
                    placeholder="+7 (999) 999-9999"
                    maxlength="14"
                    v-phone
                    pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"
                    required
                />
                <input
                    type="text" 
                    v-model="name"
                    placeholder="Ваше имя"
                />
                <input type="submit" value="Получить скидку" @click.prevent="submit">
                </form>
                <div class="send-message" v-if="showSendWindow" @click="showSendWindow=false"><p style="text-align:center">{{ msgs }}</p></div>
            </div>
          `,
          data: {
            phone: '',
            name: '',
            showSendWindow: false,
            isSend: false,
            msgs: ''
          },
          computed: {
          },
          methods: {
              submit(){
                let phone = this.phone.replace(/\D/g, '');
                if(phone.length === 10 && this.name){
                    document.querySelector('.hidden-get-sale input[type=text]').value = this.name;
                    document.querySelector('.hidden-get-sale input[type=tel]').value = this.phone;
                    document.querySelector('.hidden-get-sale input[type=submit]').click();
                    this.showSendWindow = true;
                    this.msgs = 'Ваша заявка отправлена!';
                    this.phone = '';
                    this.name = '';
                }else{
                    this.showSendWindow = true;
                    this.msgs = 'Введите корректные данные!';
                }
              },
          }
        });
      })();
  
    }catch(err){console.log(err);}
}