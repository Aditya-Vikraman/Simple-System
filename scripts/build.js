// ==================== motherboard ====================

let motherboardListHTML = '';

motherboard.forEach ((product) => {
  motherboardListHTML += `
    <div class="motherboard-container js-motherboard-container motherboard-container-${product.socket}">
      <p class="motherboard-button js-motherboard-button">
      ${product.name} (${product.socket} Socket) (${product.size})
      </p>
      <p class="motherboard-info">
      ${product.info} <br> Price: &#x20B9; ${formatCurrency(product.price)}
      </p> 
    </div>
  `;
});

document.querySelector('.js-motherboard-options').innerHTML = motherboardListHTML;

const socketSelectorElements = document.querySelectorAll('input[name="socket-selector"]');
const motherboardContainers = document.querySelectorAll('.js-motherboard-container');

socketSelectorElements.forEach ((radioButton) => {
  radioButton.addEventListener('change', 
  function rendList () {
    motherboardContainers.forEach ((container) => {
      if(container.classList.contains(`motherboard-container-${this.value}`)) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      };  
    });
  });    
});

const motherboardListButtons = document.querySelectorAll('.js-motherboard-button');

motherboardListButtons.forEach ((button) => {
  button.addEventListener('click',() => {
    motherboardListButtons.forEach ((button) => {
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

const motherboardSidebarBtn = document.querySelector('.js-motherboard-sidebar-container');

motherboard.forEach ((product) => {
  motherboardListButtons.forEach ((button) => {
    button.addEventListener('click', () => {
      if ([product.name, product.socket, product.size].every(value => button.textContent.includes(value))) {
        motherboardCost = product.price;
        costCalculations ();
        
        motherboardSidebarBtn.innerHTML = '<div class="spinner"></div><p>Loading image...</p>';

        const motherboardImg = new Image();
        motherboardImg.alt = "selected motherboard";
        motherboardImg.onload = () => {
          motherboardSidebarBtn.innerHTML = "";
          motherboardSidebarBtn.appendChild(motherboardImg);
        }

        motherboardImg.src = product.image;
      }
    });
   });
});

document.querySelector('.js-motherboard-sidebar-container').addEventListener('click', () => {
  document.querySelector('.js-motherboard-section').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

// ==================== processor ====================

let processorListHTML = '';

processor.forEach ((product) => {
  processorListHTML += `
    <div class="cpu-container js-cpu-container cpu-container-${product.socket}">
      <p class="cpu-button js-cpu-button">
        ${product.brand} ${product.name} ${product.core} (${product.socket})
      </p>
      <p class="cpu-info">
        ${product.info} 
        <br> Power: ${product.power}
        <br> Price: &#x20B9; ${formatCurrency(product.price)}
      </p>
    </div>
  `
});

document.querySelector('.js-cpu-options').innerHTML = processorListHTML;

const cpuContainers = document.querySelectorAll('.js-cpu-container');

socketSelectorElements.forEach ((radioButton) => {
  radioButton.addEventListener('change', 
  function rendList () {
    cpuContainers.forEach ((container) => {
      if(container.classList.contains(`cpu-container-${this.value}`)) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      };  
    });
  });    
});

const cpuListButtons = document.querySelectorAll('.js-cpu-button');

cpuListButtons.forEach ((button) => {
  button.addEventListener('click',() => {
    cpuListButtons.forEach ((button) => {
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

const cpuSidebarBtn = document.querySelector('.js-cpu-sidebar-container');

processor.forEach ((product) => {
  cpuListButtons.forEach ((button) => {
    button.addEventListener ('click', () => {
      if ([product.brand, product.name, product.core, product.socket].every(value => button.textContent.includes(value))) {
        processorCost = product.price;
        costCalculations ();
        
        cpuSidebarBtn.innerHTML = '<div class="spinner"></div><p>Loading image...</p>';

        const cpuImg = new Image();
        cpuImg.alt = "selected processor";
        cpuImg.onload = () => {
          cpuSidebarBtn.innerHTML = "";
          cpuSidebarBtn.appendChild(cpuImg);
        }

        cpuImg.src = product.image;
      }
    })
  });
});

document.querySelector('.js-cpu-sidebar-container').addEventListener('click', () => {
  document.querySelector('.js-cpu-section').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

// ==================== GPU ====================

let graphicsCardListHTML = '';

graphicsCard.forEach ((product) => {
  graphicsCardListHTML += `
    <div class="gpu-container js-gpu-container gpu-container-${product.brand}">
      <p class="gpu-button js-gpu-button">
        ${product.manufacturer} ${product.brand} ${product.name}
      </p>
      <p class="gpu-info">
        ${product.info}, ${product.power}
        <br> Recommended PSU: ${product.psu}
        <br> Price: &#x20B9; ${formatCurrency(product.price)}
      </p>
    </div>
  `;
});

document.querySelector('.js-gpu-options').innerHTML = graphicsCardListHTML;

const GPUSelectorElements = document.querySelectorAll('input[name="gpu-selector"]');
const gpuContainers = document.querySelectorAll('.js-gpu-container');

GPUSelectorElements.forEach ((radioButton) => {
  radioButton.addEventListener('change', 
  function rendList () {
    gpuContainers.forEach ((container) => {
      if(container.classList.contains(`gpu-container-${this.value}`)) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      };  
    });
  });    
});

const gpuListButtons = document.querySelectorAll('.js-gpu-button');

gpuListButtons.forEach ((button) => {
  button.addEventListener('click',() => {
    gpuListButtons.forEach ((button) => {
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

const gpuSidebarBtn = document.querySelector('.js-gpu-sidebar-container');

graphicsCard.forEach ((product) => {
  gpuListButtons.forEach ((button) => {
    button.addEventListener ('click', () => {
      if ([product.manufacturer, product.brand, product.name].every(value => button.textContent.includes(value))) {
        graphicsCardCost = product.price;
        costCalculations ();
        
        gpuSidebarBtn.innerHTML = '<div class="spinner"></div><p>Loading image...</p>';

        const gpuImg = new Image();
        gpuImg.alt = "selected graphics card";
        gpuImg.onload = () => {
          gpuSidebarBtn.innerHTML = "";
          gpuSidebarBtn.appendChild(gpuImg);
        }

        gpuImg.src = product.image;
      }
    });
  });
});

document.querySelector('.js-gpu-sidebar-container').addEventListener('click', () => {
  document.querySelector('.js-gpu-section').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

// ==================== storage ====================

let storageListHTML = '';

storage.forEach ((product) => {
  storageListHTML += `
  <div class="storage-container js-storage-container storage-container-${product.space}">
    <p class="storage-button js-storage-button">
      ${product.name} ${product.space} ${product.formFactor} ${product.interface}
    </p>
    <p class="storage-info">
      Price: &#x20B9; ${formatCurrency(product.price)}
    </p>
  </div>
  `
});

document.querySelector('.js-storage-options').innerHTML = storageListHTML;

const storageSizeSelectorElements = document.querySelectorAll('input[name="storage-size-selector"]');
const storageContainers = document.querySelectorAll('.js-storage-container');

storageSizeSelectorElements.forEach ((radioButton) => {
  radioButton.addEventListener('change', 
  function rendList () {
    storageContainers.forEach ((container) => {
      if(container.classList.contains(`storage-container-${this.value}`)) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      };  
    });
  });    
});

const storageListButtons = document.querySelectorAll('.js-storage-button');
storageListButtons.forEach ((button) => {
  button.addEventListener('click',() => {
    storageListButtons.forEach ((button) => {
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

const storageSidebarBtn = document.querySelector('.js-storage-sidebar-container');

storage.forEach ((product) => {
  storageListButtons.forEach ((button) => {
    button.addEventListener ('click', () => {
      if ([product.name, product.space, product.formFactor, product.interface].every(value => button.textContent.includes(value))) {
        storageCost = product.price;
        costCalculations ();
      
        storageSidebarBtn.innerHTML = '<div class="spinner"></div><p>Loading image...</p>';

        const storageImg = new Image();
        storageImg.alt = "selected storage";
        storageImg.onload = () => {
          storageSidebarBtn.innerHTML = "";
          storageSidebarBtn.appendChild(storageImg);
        }

        storageImg.src = product.image;
      }
    });
  });
});

document.querySelector('.js-storage-sidebar-container').addEventListener('click', () => {
  document.querySelector('.js-storage-section').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

// ==================== RAM ====================

let memoryListHTML = '';

memory.forEach ((product) => {
  memoryListHTML += `
    <div class="ram-container js-ram-container ram-container-${product.type}">
      <p class="ram-button js-ram-button">
        ${product.name} ${product.space} ${product.type}
      </p>
      <p class="ram-info">
        ${product.info} <br> Price: &#x20B9; ${formatCurrency(product.price)}
      </p>
    </div>
  `;
});

document.querySelector('.js-memory-options').innerHTML = memoryListHTML;

const RAMSelectorElements = document.querySelectorAll('input[name="ram-selector"]');
const ramContainers = document.querySelectorAll('.js-ram-container');

RAMSelectorElements.forEach ((radioButton) => {
  radioButton.addEventListener('change', 
  function rendList () {
    ramContainers.forEach ((container) => {
      if(container.classList.contains(`ram-container-${this.value}`)) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      };  
    });
  });    
});

const memoryListButtons = document.querySelectorAll('.js-ram-button');

memoryListButtons.forEach ((button) => {
  button.addEventListener('click',() => {
    memoryListButtons.forEach ((button) => {
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

const ramSidebarBtn = document.querySelector('.js-ram-sidebar-container');

memory.forEach ((product) => {
  memoryListButtons.forEach ((button) => {
    button.addEventListener ('click', () => {
      if ([product.name, product.space, product.type].every(value => button.textContent.includes(value))) {
        memoryCost = product.price;
        costCalculations ();
      
        ramSidebarBtn.innerHTML = '<div class="spinner"></div><p>Loading image...</p>';

        const ramImg = new Image();
        ramImg.alt = "selected memory";
        ramImg.onload = () => {
          ramSidebarBtn.innerHTML = "";
          ramSidebarBtn.appendChild(ramImg);
        }

        ramImg.src = product.image;
      }
    });
  });
});

document.querySelector('.js-ram-sidebar-container').addEventListener('click', () => {
  document.querySelector('.js-ram-section').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

// ==================== PSU ====================

let  powerSupplyListHTML = '';

powerSupply.forEach ((product) => {
  powerSupplyListHTML += `
  <div class="psu-container">
    <p class="psu-button js-psu-button">
      ${product.manufacturer} ${product.name} ${product.wattage} ${product.efficiency} ${product.modular}
    </p>
    <p class="psu-info">
      Price: &#x20B9; ${formatCurrency(product.price)}
    </p>
  </div>
  `
});

document.querySelector('.js-power-supply-options').innerHTML = powerSupplyListHTML;

const powerSupplyListButtons = document.querySelectorAll('.js-psu-button');
powerSupplyListButtons.forEach ((button) => {
  button.addEventListener('click',() => {
    powerSupplyListButtons.forEach ((button) => {
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

const psuSidebarBtn = document.querySelector('.js-psu-sidebar-container');

powerSupply.forEach ((product) => {
  powerSupplyListButtons.forEach ((button) => {
    button.addEventListener ('click', () => {
      if ([product.manufacturer, product.name, product.wattage, product.efficiency, product.modular].every(value => button.textContent.includes(value))) {
        powerSupplyCost = product.price;
        costCalculations ();

        psuSidebarBtn.innerHTML = '<div class="spinner"></div><p>Loading image...</p>';

        const psuImg = new Image();
        psuImg.alt = "selected power supply";
        psuImg.onload = () => {
          psuSidebarBtn.innerHTML = "";
          psuSidebarBtn.appendChild(psuImg);
        }

        psuImg.src = product.image;
      }
    });
  });
});

document.querySelector('.js-psu-sidebar-container').addEventListener('click', () => {
  document.querySelector('.js-psu-section').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

// ==================== Case ====================

let caseListHTML = '';

caseTower.forEach ((product) => {
  caseListHTML += `
  <div class="case-container">
    <p class="case-button js-case-button">
      ${product.name} ${product.type}
    </p>
    <p class="case-info">
      Price: &#x20B9; ${formatCurrency(product.price)}
    </p>
  </div>
  `
});

document.querySelector('.js-case-options').innerHTML = caseListHTML;

const caseListButtons = document.querySelectorAll('.js-case-button');
caseListButtons.forEach ((button) => {
  button.addEventListener('click',() => {
    caseListButtons.forEach ((button) => {
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

const caseSidebarBtn = document.querySelector('.js-case-sidebar-container');

caseTower.forEach ((product) => {
  caseListButtons.forEach ((button) => {
    button.addEventListener ('click', () => {
      if ([product.name, product.type].every(value => button.textContent.includes(value))) {
        caseCost = product.price;
        costCalculations ();

        caseSidebarBtn.innerHTML = '<div class="spinner"></div><p>Loading image...</p>';

        const caseImg = new Image();
        caseImg.alt = "selected case";
        caseImg.onload = () => {
          caseSidebarBtn.innerHTML = "";
          caseSidebarBtn.appendChild(caseImg);
        }

        caseImg.src = product.image;
      }
    });
  });
});

document.querySelector('.js-case-sidebar-container').addEventListener('click', () => {
  document.querySelector('.js-case-section').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

// ==================== Cpu cooler ====================

let coolersListHTML =  '';

coolers.forEach ((product) => {
  coolersListHTML += `
  <div class="cooler-container">
    <p class="cooler-button js-cooler-button">
      ${product.manufacturer} ${product.name} 
    </p>
    <p class="cooler-info">
      ${product.info} 
      <br> ${product.tdp} TDP
      <br> Price: &#x20B9; ${formatCurrency(product.price)}
    </p>
  </div>
  `
});

document.querySelector('.js-cooler-options').innerHTML = coolersListHTML;

const coolersListButtons = document.querySelectorAll('.js-cooler-button');

coolersListButtons.forEach ((button) => {
  button.addEventListener('click',() => {
    coolersListButtons.forEach ((button) => {
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

const coolerSidebarBtn = document.querySelector('.js-cooler-sidebar-container');

coolers.forEach ((product) => {
  coolersListButtons.forEach ((button) => {
    button.addEventListener('click', () => {
      if ([product.manufacturer, product.name].every(value => button.textContent.includes(value))) {
        coolerCost = product.price;
        costCalculations ();

        coolerSidebarBtn.innerHTML = '<div class="spinner"></div><p>Loading image...</p>';

        const coolerImg = new Image();
        coolerImg.alt = "selected cooler";
        coolerImg.onload = () => {
          coolerSidebarBtn.innerHTML = "";
          coolerSidebarBtn.appendChild(coolerImg);
        }

        coolerImg.src = product.image;
      }
    });
  });
});

document.querySelector('.js-cooler-sidebar-container').addEventListener('click', () => {
  document.querySelector('.js-cooler-section').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

// ==================== Cost Summary ====================

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
    <p class="cost">
      &#x20B9; ${formatCurrency(motherboardCost)}
    </p>
  </div>

  <div class="cost-element">
    <p>
      Processor :
    </p>
    <p class="cost">
      &#x20B9; ${formatCurrency(processorCost)}
    </p>
  </div>

  <div class="cost-element">
    <p>
      Graphics Card :
    </p>
    <p class="cost"> 
      &#x20B9; ${formatCurrency(graphicsCardCost)}
    </p>
  </div>

  <div class="cost-element">
    <p>
      Storage : 
    </p>
    <p class="cost">
      &#x20B9; ${formatCurrency(storageCost)}
    </p>
  </div>

  <div class="cost-element">
    <p>
      Memory :
    </p>
    <p class="cost">
      &#x20B9;  ${formatCurrency(memoryCost)}
    </p>
  </div>
  
  <div class="cost-element">
    <p> 
      Power Supply :
    </p>
    <p class="cost">
      &#x20B9; ${formatCurrency(powerSupplyCost)}
    </p>
  </div>

  <div class="cost-element">
    <p>
      Case  :
    </p>
    <p class="cost">
      &#x20B9; ${formatCurrency(caseCost)}
    </p>
  </div>

  <div class="cost-element">
    <p>
      Cooler  :
    </p>
    <p class="cost">
      &#x20B9; ${formatCurrency(coolerCost)}
    </p>
  </div>

  <div class="cost-bar">
    <p>
      Total :
    </p>
    <p class="cost">
      &#x20B9; ${formatCurrency(totalCost)}
    </p>
  </div>
`;

document.querySelector('.js-section-2').innerHTML = costSummaryHTML;
}

function formatCurrency (cost) {
  const costString = cost.toLocaleString("en-IN", {style:"currency", currency: "INR", maximumFractionDigits: 0 });
  return costString.substring(1)
}

// ==================== Overlay ====================

document.querySelectorAll('.js-sidebar-button').forEach ((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.js-image-box').innerHTML = `
    <div class="overlay">
      ${button.innerHTML}
      <button aria-label="close overlay image" class="close-button js-close-button">
        X
      </button>
    </div>
    `;
    document.querySelector('.js-close-button').focus({
      preventScroll: true
    });
    document.querySelector('.js-close-button').addEventListener ('click', () => {
      document.querySelector('.js-image-box').innerHTML = '';
    });
  });
});