const main = document.querySelector('.js-content');

const sidebarButton = document.querySelectorAll('.sidebar-link');

sidebarButton.forEach ((button) => {
  button.addEventListener ('click', () => {
    sidebarButton.forEach ((button) => {
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