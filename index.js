const goods = [
  { title: 'Брюки-карго', price: 1299 },
  { title: 'Брюки-джоггеры', price: 999 },
  { title: 'Однотонная рубашка', price: 999 },
  { title: 'Базовые брюки', price: 1999 },
  { title: 'Рубашка из пике', price: 799 },
  { title: 'Рубашка из поплина', price: 999 },
  { title: 'Базовая футболка-поло', price: 1299 },
];


class GoodsItem {
  constructor({title = 'product name', price = 0}) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `
    <div class="goods-item">
      <h3 class="title">${this.title}</h3>
      <p class="price">&#8381; ${this.price}</p>
    </div>
  `;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = goods;
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
goodsList.fetchGoods();
goodsList.render();
goodsList.sumProducts();