let motherboardListHTML = '';

motherboard.forEach ((product) => {
  motherboardListHTML += `
    <div class="css-motherboard-button motherboard-button-${product.socket}">
      <p class="motherboard-button">
      ${product.name} ( ${product.socket})
      </p>
      <P class="motherboard-info">
      ${product.info} <br> Price: &#x20B9; ${product.price}
      </p> 
    </div>
  `;
});

document.querySelector('.js-motherboard-options').innerHTML = motherboardListHTML;

const radioButtonCPU = document.querySelectorAll('input[name="cpu-selector"]');
const motherboardContainer = document.querySelectorAll('.css-motherboard-button');

radioButtonCPU.forEach ((radioButton) => {
  radioButton.addEventListener('change', 
  function rendList () {
    motherboardContainer.forEach ((container) => {
      if(container.classList.contains(`motherboard-button-${this.value}`)) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      };  
    });
  });    
});

const motherboardListButton = document.querySelectorAll('.motherboard-button');

motherboardListButton.forEach ((button) => {
  button.addEventListener('click',() => {
    motherboardListButton.forEach ((button) => {
      if (button.classList.contains('selected-motherboard')) {
        button.classList.remove('selected-motherboard');
        button.classList.add('motherboard-button');
      }
    });
    button.classList.add('selected-motherboard');
    button.classList.remove('motherboard-button');
    
  })
});

let motherboardCost = 0;

motherboard.forEach ((product) => {
  motherboardListButton.forEach ((button) => {
    button.addEventListener('click', () => {
      if ((product.name + `( ${product.socket})`) === button.innerText) {
        motherboardCost = product.price;
        costCalculations ();
        document.querySelector('.motherboard-container').innerHTML = `<img src="${product.image}">`
      }
    });
   });
});

let processorListHTML = '';

processor.forEach ((product) => {
  processorListHTML += `
    <div class="css-cpu-button cpu-button-${product.socket}">
      <p class="cpu-button">
        ${product.brand} ${product.name} ${product.core} ( ${product.socket})
      </p>
      <p class="cpu-info">
        ${product.info} <br> Price: &#x20B9; ${product.price}
      </p>
    </div>
  `
});

document.querySelector('.js-cpu-options').innerHTML = processorListHTML;

const cpuContainer = document.querySelectorAll('.css-cpu-button');

radioButtonCPU.forEach ((radioButton) => {
  radioButton.addEventListener('change', 
  function rendList () {
    cpuContainer.forEach ((container) => {
      if(container.classList.contains(`cpu-button-${this.value}`)) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      };  
    });
  });    
});

const cpuListButton = document.querySelectorAll('.cpu-button');

cpuListButton.forEach ((button) => {
  button.addEventListener('click',() => {
    cpuListButton.forEach ((button) => {
      if (button.classList.contains('selected-cpu')) {
        button.classList.remove('selected-cpu');
        button.classList.add('cpu-button');
      }
    });
    button.classList.add('selected-cpu');
    button.classList.remove('cpu-button');
  })
});

let processorCost = 0;

processor.forEach ((product) => {
  cpuListButton.forEach ((button) => {
    button.addEventListener ('click', () => {
      if ((product.brand + product.name + product.core + `( ${product.socket})`) === button.innerText) {
        processorCost = product.price;
        costCalculations ();
        document.querySelector('.cpu-container').innerHTML = `<img src="${product.image}">`
      }
    })
  });
});

let graphicsCardListHTML = '';

graphicsCard.forEach ((product) => {
  graphicsCardListHTML += `
    <div class="css-gpu-button gpu-button-${product.brand}">
      <p class="gpu-button">
        ${product.manufacturer} ${product.brand} ${product.name}
      </P>
      <p class="gpu-info">
      ${product.info} <br> Price: &#x20B9; ${product.price}
      </p>
    </div>
  `;
});

document.querySelector('.js-gpu-options').innerHTML = graphicsCardListHTML;

const radioButtonGPU = document.querySelectorAll('input[name="gpu-selector"]');
const gpuContainer = document.querySelectorAll('.css-gpu-button');

radioButtonGPU.forEach ((radioButton) => {
  radioButton.addEventListener('change', 
  function rendList () {
    gpuContainer.forEach ((container) => {
      if(container.classList.contains(`gpu-button-${this.value}`)) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      };  
    });
  });    
});

const gpuListButton = document.querySelectorAll('.gpu-button');
gpuListButton.forEach ((button) => {
  button.addEventListener('click',() => {
    gpuListButton.forEach ((button) => {
      if (button.classList.contains('selected-gpu')) {
        button.classList.remove('selected-gpu');
        button.classList.add('gpu-button');
      }
    });
    button.classList.add('selected-gpu');
    button.classList.remove('gpu-button');
  });
});

let graphicsCardCost = 0;

graphicsCard.forEach ((product) => {
  gpuListButton.forEach ((button) => {
    button.addEventListener ('click', () => {
      if ((product.manufacturer + product.brand + product.name) === button.innerText) {
        graphicsCardCost = product.price;
        costCalculations ();
        document.querySelector('.gpu-container').innerHTML = `<img src="${product.image}">`
      }
    });
  });
});

let storageListHTML = '';

storage.forEach ((product) => {
  storageListHTML += `
  <div class="css-storage-button storage-button-${product.space}">
    <p class="storage-button">
      ${product.name} ${product.space} ${product.formFactor} ${product.interface}
    </P>
    <p class="storage-info">
      Price: &#x20B9; ${product.price}
    </p>
  </div>
  `
});

document.querySelector('.js-storage-options').innerHTML = storageListHTML;

const radioButtonStorage = document.querySelectorAll('input[name="storage-selector"]');
const storageContainer = document.querySelectorAll('.css-storage-button');

radioButtonStorage.forEach ((radioButton) => {
  radioButton.addEventListener('change', 
  function rendList () {
    storageContainer.forEach ((container) => {
      if(container.classList.contains(`storage-button-${this.value}`)) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      };  
    });
  });    
});

const storageListButton = document.querySelectorAll('.storage-button');
storageListButton.forEach ((button) => {
  button.addEventListener('click',() => {
    storageListButton.forEach ((button) => {
      if (button.classList.contains('selected-storage')) {
        button.classList.remove('selected-storage');
        button.classList.add('storage-button');
      }
    });
    button.classList.add('selected-storage');
    button.classList.remove('storage-button');
  });
});

let storageCost = 0;

storage.forEach ((product) => {
  storageListButton.forEach ((button) => {
    button.addEventListener ('click', () => {
      if ((product.name + product.space + product.formFactor + product.interface) === button.innerText) {
        storageCost = product.price;
        costCalculations ();
        document.querySelector('.storage-container').innerHTML = `<img src="${product.image}">`
      }
    });
  });
});

let memoryListHTML = '';

memory.forEach ((product) => {
  memoryListHTML += `
    <div class="css-ram-button ram-button-${product.type}">
      <p class="ram-button">
        ${product.name} ${product.space} ${product.type}
      </P>
      <p class="ram-info">
        ${product.info} <br> Price: &#x20B9; ${product.price}
      </p>
    </div>
  `;
});

document.querySelector('.js-memory-options').innerHTML = memoryListHTML;

const radioButtonRAM = document.querySelectorAll('input[name="ram-selector"]');
const ramContainer = document.querySelectorAll('.css-ram-button');

radioButtonRAM.forEach ((radioButton) => {
  radioButton.addEventListener('change', 
  function rendList () {
    ramContainer.forEach ((container) => {
      if(container.classList.contains(`ram-button-${this.value}`)) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      };  
    });
  });    
});

const memoryListButton = document.querySelectorAll('.ram-button');
memoryListButton.forEach ((button) => {
  button.addEventListener('click',() => {
    memoryListButton.forEach ((button) => {
      if (button.classList.contains('selected-ram')) {
        button.classList.remove('selected-ram');
        button.classList.add('ram-button');
      }
    });
    button.classList.add('selected-ram');
    button.classList.remove('ram-button');
  });
});

let memoryCost = 0;

memory.forEach ((product) => {
  memoryListButton.forEach ((button) => {
    button.addEventListener ('click', () => {
      if ((product.name + product.space + product.type) === button.innerText) {
        memoryCost = product.price;
        costCalculations ();
        document.querySelector('.ram-container').innerHTML = `<img src="${product.image}">`
      }
    });
  });
});

let  powerSupplyListHTML = '';

powerSupply.forEach ((product) => {
  powerSupplyListHTML += `
  <div class="css-psu-button">
    <p class="psu-button">
      ${product.manufacturer} ${product.name} ${product.wattage} ${product.efficiency} ${product.modular}
    </p>
    <p class="psu-info">
      Price: &#x20B9; ${product.price}
    </p>
  </div>
  `
});

document.querySelector('.js-power-supply-options').innerHTML = powerSupplyListHTML;

const powerSupplyListButton = document.querySelectorAll('.psu-button');
powerSupplyListButton.forEach ((button) => {
  button.addEventListener('click',() => {
    powerSupplyListButton.forEach ((button) => {
      if (button.classList.contains('selected-psu')) {
        button.classList.remove('selected-psu');
        button.classList.add('psu-button');
      }
    });
    button.classList.add('selected-psu');
    button.classList.remove('psu-button');
  });
});

let powerSupplyCost = 0;

powerSupply.forEach ((product) => {
  powerSupplyListButton.forEach ((button) => {
    button.addEventListener ('click', () => {
      if ((product.manufacturer + product.name + product.wattage + product.efficiency + product.modular) === button.innerText) {
        powerSupplyCost = product.price;
        costCalculations ();
        document.querySelector('.psu-container').innerHTML = `<img src="${product.image}">`
      }
    });
  });
});

let caseListHTML = '';

caseTower.forEach ((product) => {
  caseListHTML += `
  <div class="css-case-button">
    <p class="case-button">
      ${product.name} ${product.type}
    </p>
    <p class="case-info">
      Price: &#x20B9; ${product.price}
    </p>
  </div>
  `
});

document.querySelector('.js-case-options').innerHTML = caseListHTML;

const caseListButton = document.querySelectorAll('.case-button');
caseListButton.forEach ((button) => {
  button.addEventListener('click',() => {
    caseListButton.forEach ((button) => {
      if (button.classList.contains('selected-case')) {
        button.classList.remove('selected-case');
        button.classList.add('case-button');
      }
    });
    button.classList.add('selected-case');
    button.classList.remove('case-button');
  });
});

let caseCost = 0 ;

caseTower.forEach ((product) => {
  caseListButton.forEach ((button) => {
    button.addEventListener ('click', () => {
      if ((product.name + product.type) === button.innerText) {
        caseCost = product.price;
        costCalculations ();
        document.querySelector('.case-container').innerHTML = `<img src="${product.image}">`
      }
    });
  });
});

let coolersListHTML =  '';

coolers.forEach ((product) => {
  coolersListHTML += `
  <div class="css-cooler-button">
    <p class="cooler-button">
      ${product.manufacturer} ${product.name} 
    </p>
    <p class="cooler-info">
      ${product.info} <br> Price: &#x20B9; ${product.price}
    </p>
  </div>
  `
});

document.querySelector('.js-cooler-options').innerHTML = coolersListHTML;

const coolersListButton = document.querySelectorAll('.cooler-button');
coolersListButton.forEach ((button) => {
  button.addEventListener('click',() => {
    coolersListButton.forEach ((button) => {
      if (button.classList.contains('selected-cooler')) {
        button.classList.remove('selected-cooler');
        button.classList.add('cooler-button');
      }
    });
    button.classList.add('selected-cooler');
    button.classList.remove('cooler-button');
  });
});

let coolerCost = 0;

coolers.forEach ((product) => {
  coolersListButton.forEach ((button) => {
    button.addEventListener('click', () => {
      if ((product.manufacturer + product.name) === button.innerText) {
        coolerCost = product.price;
        costCalculations ();
        document.querySelector('.cooler-container').innerHTML = `<img src="${product.image}">`
      }
    });
  });
});

let totalCost = 0;

function costCalculations () {
totalCost = motherboardCost + processorCost + graphicsCardCost + storageCost + memoryCost + powerSupplyCost + caseCost + coolerCost;
rendCostTable ();
}

function rendCostTable () {

let costSummaryHTML = `
  
  <div class="cost-element">
    <p>
      Motherboard :
    </p>
    <p>
      &#x20B9; ${motherboardCost}
    </p>
  </div>

  <div class="cost-element">
    <p>
      Processor :
    </p>
    <p>
      &#x20B9; ${processorCost}
    </p>
  </div>

  <div class="cost-element">
    <p>
      Graphics Card :
    </p>
    <p>
      &#x20B9; ${graphicsCardCost}
    </p>
  </div>

  <div class="cost-element">
    <p>
      Storage : 
    </p>
    <p>
      &#x20B9; ${storageCost}
    </p>
  </div>

  <div class="cost-element">
    <p>
      Memory :
    </p>
    <p>
      &#x20B9;  ${memoryCost}
    </p>
  </div>
  
  <div class="cost-element">
    <p> 
      Power Supply :
    </p>
    <p>
      &#x20B9; ${powerSupplyCost}
    </p>
  </div>

  <div class="cost-element">
    <p>
      Case  :
    </p>
    <p>
      &#x20B9; ${caseCost}
    </p>
  </div>

  <div class="cost-element">
    <p>
      Cooler  :
    </p>
    <p>
      &#x20B9; ${coolerCost}
    </p>
  </div>

  <div class="cost-bar">
    <p>
      Total :
    </p>
    <p>
      &#x20B9; ${totalCost}
    </p>
  </div>
`;

document.querySelector('.js-section-2').innerHTML = costSummaryHTML;
}

document.querySelectorAll('.sidebar-button').forEach ((button) => {
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