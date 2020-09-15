
//Select elements on the page
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemButton = document.querySelector('button.addItemButton');
const addItemInput = document.querySelector('input.addItemInput');

//Delete the li text upon click instead of mouseover
listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') { //Target and respond to button elements only
    if (event.target.className == 'remove') { //Only remove an element if target's class name is remove.
      let li = event.target.parentNode; //The li element is the parent of the button. Use the parentNode property to refer to it.
      let ul = li.parentNode; //Get a reference to the target li element's parent, which would be the ul.
      ul.removeChild(li); //Call removeChild on it, passing in an li, the event target.
    }
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
