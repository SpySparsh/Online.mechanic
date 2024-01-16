const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

const button = document.querySelectorAll(".button");

console.log(button);

button.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.classList.contains("button_enabled")) {
      item.classList.remove("button_enabled");
    } else {
      item.classList.add("button_enabled");
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.button');

  buttons.forEach(button => {
      button.addEventListener('click', function () {
          // Remove clicked class from all buttons
          buttons.forEach(btn => {
              btn.classList.remove('clicked');
          });

          // Add clicked class to the button
          button.classList.add('clicked');
      });
  });
});


