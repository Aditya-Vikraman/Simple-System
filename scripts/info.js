const main = document.querySelector('.js-content');

const sidebarButtons = document.querySelectorAll('.js-sidebar-button');

sidebarButtons.forEach ((button) => {
  button.addEventListener ('click', () => {
    sidebarButtons.forEach ((button) => {
      if (button.classList.contains('selected')) {
        button.classList.remove('selected');
      }
    });
    button.classList.add('selected');
  });
});

const cpuButton = document.querySelector('.js-cpu');
const gpuButton = document.querySelector('.js-gpu');
const displayButton = document.querySelector('.js-display');
const memoryStorageButton = document.querySelector('.js-memory-storage');
const connectivityButton = document.querySelector('.js-connectivity');

cpuButton.addEventListener ('click', () => {
  sidebarButtons.forEach((button) => {
    button.setAttribute('aria-expanded', 'false')
  })
  cpuButton.setAttribute('aria-expanded', 'true');
  main.innerHTML = cpuHTML;
});

gpuButton.addEventListener ('click', () => {
  sidebarButtons.forEach((button) => {
    button.setAttribute('aria-expanded', 'false')
  })
  gpuButton.setAttribute('aria-expanded', 'true');
  main.innerHTML = gpuHTML;
});

displayButton.addEventListener ('click', () => {
  sidebarButtons.forEach((button) => {
    button.setAttribute('aria-expanded', 'false')
  })
  displayButton.setAttribute('aria-expanded', 'true');
  main.innerHTML = displayHTML;
});

memoryStorageButton.addEventListener ('click', () => {
  sidebarButtons.forEach((button) => {
    button.setAttribute('aria-expanded', 'false')
  })
  memoryStorageButton.setAttribute('aria-expanded', 'true');
  main.innerHTML = memoryStorageHTML;
});

connectivityButton.addEventListener ('click', () => {
  sidebarButtons.forEach((button) => {
    button.setAttribute('aria-expanded', 'false')
  })
  connectivityButton.setAttribute('aria-expanded', 'true');
  main.innerHTML = connectivityHTML;
});