const catalog = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

// TODO (JS):
// 1. Grab the tbody.
const tbody = document.querySelector('tbody'); // Only needs to be grabbed one time
// 2. Grab the template.
const template = document.querySelector('template'); // Only needs to be grabbed one time

// 3. Clone the template

// 4. Select all of the 'td''s in the template-->

const ul = document.createElement('ul');

/**
 * Render based on the value of `maxPrice`
 * @param {number} maxPrice // This is just a comment
 */
function render(maxPrice) {
  const filteredCatalog = maxPrice
    ? catalog.filter(({ price }) => price.slice(1) < maxPrice)
    : // If there is no 'maxPriceCatalog' , it will be the same as the catalog array (This is just turnery)
      catalog;

  // This one is destructring the price property and removing the dollar sign $ in front of it to basicaly make it a number then it is comparing to the maxPrice.

  // For each (or map) item in the 'filteredCatalog' array, clone the template contents (the 'tr')

  // Grab the empty 'td''s

  // Insert 'name' as the 'textContent' in the first, and do the same for 'price' in the second

  // Append the row to the 'tbody'

  filteredCatalog.forEach(product => {
    const newRow = template.content.cloneNode(true); // The 'content of the template is the stuff inside the 'tr' cloneNode makes a copy of the content.
    // console.log(newRow); FOR TESTING ONLY: we saw that it made a fragment for every object in the array
    const tds = newRow.querySelectorAll('td');
    tds[0].innerText = product.name;
    tds[1].innerText = product.price;

    tbody.appendChild(newRow);
  });
}

render();

document
  .querySelector('input')
  .addEventListener('input', ({ target: { value } }) => {
    render(Number(value));
  });
