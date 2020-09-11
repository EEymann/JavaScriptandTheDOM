
//Select elements on the page
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

//The li text gets capitalized upon mouseover
listDiv.addEventListener('mouseover', (event) => {
  if (event.target.tagName == 'LI') {
  event.target.textContent = event.target.textContent.toUpperCase();
}
});

//The li text gets changed back to lowercase upon mouseout
listDiv.addEventListener('mouseout', (event) => {
  if (event.target.tagName == 'LI') {
    event.target.textContent = event.target.textContent.toLowerCase();
  }
});

/**
Button displays "Hide List" if list is visible,
Button displays "Show List" if list is not visible
**/

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') { //The value returned from the first click is display = none. Second click, it will be reset to block.
    listDiv.style.display = 'block';
    toggleList.textContent = "Hide List"; //When clicked, text is reset to "Hide List"

  } else {
    listDiv.style.display = 'none'; //First click display is set to none.
    toggleList.textContent = 'Show List'; //If display is none, the button text will say "Show List"
  }
});
