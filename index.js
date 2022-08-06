const goods = [
  { title: 'Брюки-карго', price: 1299 },
  { title: 'Брюки-джоггеры', price: 999 },
  { title: 'Однотонная рубашка', price: 999 },
  { title: 'Базовые брюки', price: 1999 },
  { title: 'Рубашка из пике', price: 799 },
  { title: 'Рубашка из поплина', price: 999 },
  { title: 'Базовая футболка-поло', price: 1299 },
  {},
];

const renderGoodsItem = ({title = 'product name', price = 0}) => {
  return `
    <div class="goods-item">
      <h3 class="title">${title}</h3>
      <p class="price">&#8381; ${price}</p>
    </div>
  `;
};

const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item)).join('');
  document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);