const catalog = [
  {
    price: '$49.99',
    name: 'Football',
  },
  {
    price: '$9.99',
    name: 'Baseball',
  },
  {
    price: '$29.99',
    name: 'Basketball',
  },
  {
    price: '$99.99',
    name: 'iPod Touch',
  },
  {
    price: '$399.99',
    name: 'iPhone 5',
  },
  {
    price: '$199.99',
    name: 'Nexus 7',
  },
];

// Variable Declaration

document.body.appendChild(document.createElement('ul'));
const ul = document.querySelector('ul');
const newItems = []; // The New array
const range = document.getElementById('price-range');

// Filter Function
function filterByPrice(products, maxPrice) {
  return products.filter(({ price }) => price.slice(1) <= maxPrice);
}

// Render Function
function renderItems(pramItems) {
  // TODO: Turn a bunch of items into a full li
  ul.innerHTML = pramItems
    .map(({ name, price }) => `<li>${name} - ${price}</li>`)
    .join('');
  filterByPrice(catalog, range.value);
}

// Slider Event Handler
range.addEventListener('input', event => {
  renderItems(catalog);
});

// Todo: 1. Map into the New Array that will filter the results by the number indicated by the slider, then the render will show the filtered results.
