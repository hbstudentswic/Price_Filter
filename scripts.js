const catalog = [
  {
    price: '$49.99',
    name: 'Football',
    stocked: true,
  },
  {
    price: '$9.99',
    name: 'Baseball',
    stocked: true,
  },
  {
    price: '$29.99',
    name: 'Basketball',
    stocked: false,
  },
  {
    price: '$99.99',
    name: 'iPod Touch',
    stocked: true,
  },
  {
    price: '$399.99',
    name: 'iPhone 5',
    stocked: false,
  },
  {
    price: '$199.99',
    name: 'Nexus 7',
    stocked: true,
  },
];

// Variable Declaration

const ul = document.createElement('ul');
const range = document.getElementById('price-range');
const searchitem = document.querySelector('#search-name');
const stockitem = document.querySelector('#stocked-checkbox');

// Render Function
function renderItems(maxPrice) {
  const filteredCatalog = maxPrice
    ? catalog.filter(({ price }) => price.slice(1) < maxPrice)
    : catalog;

  ul.innerHTML = filteredCatalog
    .map(({ name, price }) => `<li>${name} - ${price}</li>`)
    .join('');
}

// Search Filter
function filterProductsBySearch(products, search) {
  const searchedItems = products.filter(({ name }) =>
    name.toLowerCase().includes(search),
  );
  return searchedItems;
}

// Stock Filter
function filterByStocked(products) {
  const stockedItems = products.filter(({ stocked }) => stocked === true);
  return stockedItems;
}

const ItemsStocked = filterByStocked(catalog);

document.body.appendChild(ul);
renderItems(catalog);

// Slider Event Handler
range.addEventListener('input', ({ target: { value } }) => {
  renderItems(Number(value));
});

// Search Text Box Event Handler
searchitem.addEventListener('keyup', event => {
  const letters = event.target.value;
  const filteredItems = filterProductsBySearch(catalog, letters);
  renderItems(filteredItems);
});

// Stocked Items Check Box Event Handler
stockitem.addEventListener('change', ({ target: { checked } }) => {
  if (stockitem.checked) {
    renderItems(ItemsStocked);
  } else {
    renderItems(catalog);
  }
});
