
//Select elements on the page
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

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
