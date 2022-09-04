import { service } from "../service";
import { GET_BASKET_GOODS } from '../constants';

export  const BasketGoods = Vue.component('basket-goods', {
    data() {
      return {
         basketGoodsItems: []
      }
    },
    
    template: `
      <div class="modal">
         <div class="basket-card">
            <div class="basket-card__header">
               <h1>basket card</h1>
               <div class="basket-card__header__delete-icon"
                  v-on:click="$emit('closeclick')"
               ></div>
            </div>
            <div class="basket-card__items">
               <basket-goods-item v-for="item in basketGoodsItems" :item="item" @delete="deleteBasketGood" @add="addGood"></basket-goods-item>
            </div>
         </div>
      </div>
    `,
    mounted() {
      service(GET_BASKET_GOODS).then((data) => {
        this.basketGoodsItems = data
      })
    },
    methods: {
      deleteBasketGood(id) {
        service(GET_BASKET_GOODS, "DELETE", {
          id
        }).then((data) => {
          this.basketGoodsItems = data
        })
      },
      addGood(id) {
        service(GET_BASKET_GOODS, 'PUT', {
          id
        }).then((data) => {
          this.basketGoodsItems = data
        })
      }
    }
  })