let productListHTML = '';

laptops.forEach ((product) => {
productListHTML += `
  <div class="product-container">
    <div class="product-grid">
      <div class="product-image-container">
        <img src="${product.image}">
      </div>
      <div class="info-grid">
        <div class="laptop-name">
          ${product.name}
        </div>
        <div>
          <p class="section">
            CPU
          </p>
          <p class="js-cpu">
            ${product.cpu}
          </p>
        </div>
        <div>
          <p class="section">
            RAM
          </p>
          <p class="js-ram">
            ${product.ram}
          </p>
        </div>
        <div>
          <p class="section">
            GPU
          </p>
          <p class="js-gpu">
            ${product.gpu}
          </p>
        </div>
        <div>
          <p class="section">
            storage
          </p>
          <p class="js-storage">
            ${product.storage}
          </p>
        </div>
        <div>
          <p class="section">
            Display
          </p>
          <p class="js-display">
            ${product.display}
          </p>
        </div>
        <p class="js-price">
          Price: &#x20B9; ${product.price}
        </p>
      </div>
    </div>
  </div>

`
});

document.querySelector('.js-products-container').innerHTML = productListHTML;

document.querySelectorAll('.product-image-container').forEach ((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.image-box').innerHTML = `
    <div class="overlay">
      ${button.innerHTML};
      <P class="close-button">
        X
      </P>
    </div>
    `;
    document.querySelector('.close-button').addEventListener ('click', () => {
      document.querySelector('.image-box').innerHTML = '';
    });
  });
});