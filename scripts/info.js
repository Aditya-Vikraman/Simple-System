const main = document.querySelector('.js-content');

const sidebarButtons = document.querySelectorAll('.js-sidebar-link');

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


document.querySelector('.js-cpu').addEventListener ('click', () => {
  main.innerHTML = cpuHTML;
});

document.querySelector('.js-gpu').addEventListener ('click', () => {
  main.innerHTML = gpuHTML;
});

document.querySelector('.js-display').addEventListener ('click', () => {
  main.innerHTML = displayHTML;
});

document.querySelector('.js-memory-storage').addEventListener ('click', () => {
  main.innerHTML = memoryStorageHTML;
});

document.querySelector('.js-connectivity').addEventListener ('click', () => {
  main.innerHTML = connectivityHTML;
});