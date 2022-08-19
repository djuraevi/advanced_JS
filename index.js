
const BASE = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const GOODS = '/catalogData.json';

const service = (url) => fetch(url)
  .then((res) => res.json());

// function service (url) {
//   return new Promise((resolve) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open('GET', url);
//       const loadHandler = () => {
//         resolve(JSON.parse(xhr.response))
//       }
//       xhr.onload = loadHandler;
//       xhr.send();
//   })
// }


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


// 1) Какие виды областей видимости вы знаете? Написать ответ ниже

// глобальная - обьявление переменных вне функций и модулей, доступ к откуда угодно внутри файла
// локальная - переменные используемые в теле функции, и доступные только внутри нее
// внутри блока - локальная переменная для функции, скрыта внутри видимости блока и доступна внутри этого блока
// замыкание - это способность функции запоминать область видимости и обращаться к ней из любого места приложения


// 2) Исправьте код так чтобы в консоль выводились числа от 0 до 10
for (let i = 0; i <= 10; i++) {
   setTimeout(() => {
      console.log(i);
   }, 0)
}


// 3) Исправьте код так чтобы в консоль выводилось "John"
var firstName = "Elena"
const obj = {
   firstName: 'John',
   sayFirstName: function f(){
      console.log(this.firstName)
   }
}
obj.sayFirstName();


// 4) Исправьте код так чтобы в консоль не выводилась ошибка (нельзя исправлять тело функции getArrowFunction)
 const user = {
   age: 20
}
function getArrowFunction() {
   "use strict"
   return () => {
      console.log(this.age)
   }
}

const arrowFunction = getArrowFunction.call(user);
arrowFunction();