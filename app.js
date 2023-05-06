//selecting element from the DOM
const dropDowns = document.querySelectorAll('.drop-down');

//For each dropdown
dropDowns.forEach(dropDown => {
  const dropContent = dropDown.querySelector('.drop-down-content');

// Add click event listener to the dropdown menu
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