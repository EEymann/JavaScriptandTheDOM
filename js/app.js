
//Select elements on the page
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemButton = document.querySelector('button.addItemButton');
const addItemInput = document.querySelector('input.addItemInput');
const removeItemButton = document.querySelector('button.removeItemButton');

//Delete the li text gets upon mouseover
listDiv.addEventListener('mouseover', (event) => {
  if (event.target.tagName == 'LI') {
  
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

// Allow user to change the list description
descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = ''; //This resets the input box to empty
});

// Allow user to add items to the list

addItemButton.addEventListener('click', () => {
  //Select the parent element 'ul'. This returns a collection. Access the first ul on the page at [0]
  let ul = document.getElementsByTagName('ul')[0];
  //Create new list item
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  //Append the list item
  ul.appendChild(li);
  //Clear the input field when a new list item is added
  addItemInput.value = '';
});

// Allow user to remove items fron the list
removeItemButton.addEventListener('click', () => {
//Select the parent element 'ul'. This returns a collection. Access the first ul on the page at [0]
let ul = document.getElementsByTagName('ul')[0];
//Select the LAST child from the ul
let li = document.querySelector('li:last-child');
//Remove the list item
ul.removeChild(li);
});
