
const BASE = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const GOODS = '/catalogData.json';

function service (url) {
  return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      const loadHandler = () => {
        resolve(JSON.parse(xhr.response))
      }
      xhr.onload = loadHandler;
      xhr.send(); 
  })
}


class GoodsItem {
  constructor({product_name, price}) {
    this.title = product_name;
    this.price = price;
  }

  render() {
    return `
    <div class="goods-item">
      <h3 class="title">${this.title}</h3>
      <p class="price">${this.price}</p>
    </div>
  `;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    return service(`${BASE}${GOODS}`).then((data) => {
      this.goods = data;
    })
  }

  render () {
    let goodsList = this.goods.map((item) => {
      const goodsItem = new GoodsItem(item);
      return goodsItem.render();
    });
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }

  sumProducts(){
    return this.goods.reduce((prev, {price})=> {
      return prev + price;
    },0)
  }
}


const goodsList = new GoodsList();
goodsList.fetchGoods().then(() => {
  goodsList.render();
});
goodsList.sumProducts();