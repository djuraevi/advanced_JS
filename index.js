
const BASE = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const GOODS = '/catalogData.json';

function service (url, res) {
  return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);

      const loadHandler = () => {
        resolve(JSON.parse(xhr.response))
      }

      xhr.onload = loadHandler;
      xhr.send(); 

  }).then(res)
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

  fetchGoods(callback) {
    
    service(`${BASE}${GOODS}`, (data) => {
      this.goods = data;
      callback();
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
goodsList.fetchGoods(() => {
  goodsList.render();
});
goodsList.sumProducts();