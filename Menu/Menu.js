
const toggleMenu = (event) => {
  // Toggle the "menu--open" class on your menu refence. 
  // menu.classList.toggle('menu--open')
  TweenMax.to(menu, 1, {
    opacity: 1,
    width: 350,
  });
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button')
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu)

// Stretch
// Body Selector
const body = document.querySelector('body')

body.addEventListener('click', event => {
  if (menu.style.opacity === '1'){
    TweenMax.to(menu, 1, {
      // display: 'block',
      opacity: 0,
      width: 0,
    });
  }
})