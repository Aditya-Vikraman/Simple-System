let motherboardListHTML = '';

motherboard.forEach ((product) => {
motherboardListHTML += `
<div class="css-motherboard-button">
  <p class="motherboard-button">
  ${product.name} ( ${product.socket})
  </p>
  <P class="motherboard-info">
  ${product.info} <br> Price: &#x20B9; ${product.price}
  </p> 
</div>
`
});

document.querySelector('.js-motherboard-options').innerHTML = motherboardListHTML;


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
<div class="css-cpu-button">
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
  <div class="css-gpu-button">
    <p class="gpu-button">
      ${product.manufacturer} ${product.brand} ${product.name}
    </P>
    <p class="gpu-info">
     ${product.info} <br> Price: &#x20B9; ${product.price}
    </p>
  </div>
  `
})

document.querySelector('.js-gpu-options').innerHTML = graphicsCardListHTML;

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
  <div class="css-storage-button">
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
  <div class="css-ram-button">
    <p class="ram-button">
      ${product.name} ${product.space} ${product.type}
    </P>
    <p class="ram-info">
      ${product.info} <br> Price: &#x20B9; ${product.price}
    </p>
  </div>
  `
});

document.querySelector('.js-memory-options').innerHTML = memoryListHTML;

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

let caseCoolerListHTML = '';

caseCooler.forEach ((product) => {
  caseCoolerListHTML += `
  <div class="css-cc-button">
    <p class="cc-button">
      ${product.name} ${product.type}
    </p>
    <p class="cc-info">
      Price: &#x20B9; ${product.price}
    </p>
  </div>
  `
});

document.querySelector('.js-case-cooler-options').innerHTML = caseCoolerListHTML;

const caseCoolerListButton = document.querySelectorAll('.cc-button');
caseCoolerListButton.forEach ((button) => {
  button.addEventListener('click',() => {
    caseCoolerListButton.forEach ((button) => {
      if (button.classList.contains('selected-cc')) {
        button.classList.remove('selected-cc');
        button.classList.add('cc-button');
      }
    });
    button.classList.add('selected-cc');
    button.classList.remove('cc-button');
  });
});

let caseCoolerCost = 0 ;

caseCooler.forEach ((product) => {
  caseCoolerListButton.forEach ((button) => {
    button.addEventListener ('click', () => {
      if ((product.name + product.type) === button.innerText) {
        caseCoolerCost = product.price;
        costCalculations ();
        document.querySelector('.cc-container').innerHTML = `<img src="${product.image}">`
      }
    });
  });
});

let totalCost = 0;

function costCalculations () {
totalCost = motherboardCost + processorCost + graphicsCardCost + storageCost + memoryCost + powerSupplyCost + caseCoolerCost;
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
      Graphics Card (GPU) :
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
      Memory (RAM) :
    </p>
    <p>
      &#x20B9;  ${memoryCost}
    </p>
  </div>
  
  <div class="cost-element">
    <p> 
      Power Supply (PSU) :
    </p>
    <p>
      &#x20B9; ${powerSupplyCost}
    </p>
  </div>

  <div class="cost-element">
    <p>
      case & Cooler :
    </p>
    <p>
      &#x20B9; ${caseCoolerCost}
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