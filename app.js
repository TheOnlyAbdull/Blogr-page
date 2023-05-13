//selecting element from the DOM
const dropDowns = document.querySelectorAll('.drop-down');
const navBtn = document.querySelector('.menu-bar');
const nav = document.querySelector('.navigate');
const navLink = document.querySelector('.nav-ul');
const logLink = document.querySelector('.log-ul');
const imgSrc = document.getElementById('img-src');



//For each nav dropdown
dropDowns.forEach(dropDown => {
  const dropContent = dropDown.querySelector('.drop-down-content');

// Add click event listener to the dropdown to each nav
  dropDown.addEventListener('click', () => {
      dropContent.classList.toggle('show-dropdown');
  });

  // Add click event listener to document, to remove dropdown
  document.addEventListener('click', (event) => {
      if (!dropDown.contains(event.target)) {
          dropContent.classList.remove('show-dropdown');
      }
  });
});

//Add click event to the navigation bar
navBtn.addEventListener('click', () => {

  // toggle full navigation
  nav.classList.toggle('show-nav');
  navLink.classList.toggle('display-nav');
  logLink.classList.toggle('display-nav');
});

