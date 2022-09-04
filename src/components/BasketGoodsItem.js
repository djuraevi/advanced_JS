export const BasketGoodsItem = Vue.component('basket-goods-item', {
    props: [
      'item'
    ],
    template: `
      <div class="basket-card__content___item">
         <h3>{{item?.data?.product_name}}</h3>
         <div>count: {{item?.count}}</div>
         <div>total: {{item?.total}}</div>
         <div>
         <custom-button @click="$emit('add', item.data.id)">+</custom-button>
         <custom-button @click="$emit('delete', item.data.id)">-</custom-button>
         </div>
      </div>
    `
  })