import './style.css';
import { GET_GOODS_ITEMS, GET_BASKET_GOODS } from './constants';
import { service } from './service';
import { SearchComponent } from './components/SearchComponent';
import { CustomButton } from './components/CustomButton';
import { BasketGoods } from './components/BasketGoods';
import { GoodsItem } from './components/GoodsItem';
import { BasketGoodsItem } from './components/BasketGoodsItem';


function init() {

  const app = new Vue({
    el: '#root',
    data: {
      items: [],
      search: '',
      cardIsVision: false
    },
    methods: {
      setVisionCard() {
        this.cardIsVision = !this.cardIsVision
      },
      fetchGoods() {
        service(GET_GOODS_ITEMS).then((data) => {
          this.items = data;
        });
      },
      onSearchComponentChange(value) {
        this.search = value
      }
    },
    computed: {
      filteredItems() {
        return this.items.filter(({ product_name }) => {
          return product_name.match(new RegExp(this.search, 'gui'))
        })
      },
      calculatePrice() {
        return this.items.reduce((prev, { price }) => {
          return prev + price;
        }, 0)
      }
    },
    mounted() {
      this.fetchGoods();
    }
  })
}

window.onload = init