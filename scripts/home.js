const searchElement = document.querySelector('.js-search-bar');

function handleSearchEvent () {
  const searchInput = searchElement.value;
  window.location.href=`index.html?search=${searchInput}`
}

document.querySelector('.js-search-button').addEventListener('click', () => {
  handleSearchEvent();
});

searchElement.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleSearchEvent();
  }
})

const url = new URL (window.location.href);
const search = url.searchParams.get('search');

let filteredLaptops = laptops

if (search) {
  const newArray = filteredLaptops.filter(checkLaptops)

  function checkLaptops (laptop) {
    return laptop.name.toLowerCase().includes(`${search.toLowerCase()}`)  ||
    laptop.cpu.toLowerCase().includes(`${search.toLowerCase()}`) ||
    laptop.gpu.toLowerCase().includes(`${search.toLowerCase()}`) ||
    laptop.ram.toLowerCase().includes(`${search.toLowerCase()}`)||
    laptop.storage.toLowerCase().includes(`${search.toLowerCase()}`) ||
    laptop.display.toLowerCase().includes(`${search.toLowerCase()}`)
  }

  filteredLaptops = newArray;
}

let productListHTML = '';

filteredLaptops.forEach ((product) => {
productListHTML += `
  <div class="product-container">
    <div class="product-grid">
      <div class="product-image-container js-product-image-container">
        <img class="product-image js-product-image" src="${product.image}">
      </div>
      <div class="info-grid">
        <div class="laptop-name">
          ${product.name}
        </div>
        <div>
          <p class="section">
            CPU
          </p>
          <p class="cpu">
            ${product.cpu}
          </p>
        </div>
        <div>
          <p class="section">
            RAM
          </p>
          <p class="ram">
            ${product.ram}
          </p>
        </div>
        <div>
          <p class="section">
            GPU
          </p>
          <p class="gpu">
            ${product.gpu}
          </p>
        </div>
        <div>
          <p class="section">
            Storage
          </p>
          <p class="storage">
            ${product.storage}
          </p>
        </div>
        <div>
          <p class="section">
            Display
          </p>
          <p class="display">
            ${product.display}
          </p>
        </div>
        <p class="price">
          Price: &#x20B9; ${formatCurrency(product.price)}
        </p>
      </div>
    </div>
  </div>

`
});

function formatCurrency (cost) {
  let costString = cost.toLocaleString("en-IN", {style:"currency", currency: "INR", maximumFractionDigits: 0 });
  return costString.substring(1)
}

document.querySelector('.js-products-grid').innerHTML = productListHTML;

document.querySelectorAll('.js-product-image').forEach ((image) => {
  image.addEventListener('click', (event) => {
    document.querySelector('.js-image-box').innerHTML = `
    <div class="overlay">
      <img src="${event.target.src}"/>
      <P class="close-button js-close-button">
        X
      </P>
    </div>
    `;
    document.querySelector('.js-close-button').addEventListener ('click', () => {
      document.querySelector('.js-image-box').innerHTML = '';
    });
  });
});