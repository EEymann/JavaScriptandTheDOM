//Select elements on the page
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemButton = document.querySelector('button.addItemButton');
const addItemInput = document.querySelector('input.addItemInput');
const existingLi = listUl.children;

//This function accepts a list item and attaches buttons to it
function attachListItemButtons(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);

  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);

  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

//Attach buttons on existing list items (existingLi)
for (let i = 0; i < existingLi.length; i++) {
  attachListItemButtons(existingLi[i]);
}

//Delete the li text upon click instead of mouseover
listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') { //Target and respond to button elements only
    if (event.target.className == 'remove') { //Only remove an element if target's class name is remove.
      let li = event.target.parentNode; //The li element is the parent of the button. Use the parentNode property to refer to it.
      let ul = li.parentNode; //Get a reference to the target li element's parent, which would be the ul.
      ul.removeChild(li); //Call removeChild on it, passing in an li, the event target.
    }
    if (event.target.className == 'up') { //Only remove an element if target's class name is up.
      let li = event.target.parentNode; //The li element is the parent of the button. Use the parentNode property to refer to it.
      let prevLi = li.previousElementSibling; //Get a reference to li's previous element sibling.
      let ul = li.parentNode; //Get a reference to the target li element's parent, which would be the ul.
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
//Down button
    if (event.target.className == 'down') { //Only remove an element if target's class name is down.
      let li = event.target.parentNode; //The li element is the parent of the button. Use the parentNode property to refer to it.
      let nextLi = li.nextElementSibling; //Get a reference to li's next element sibling.
      let ul = li.parentNode; //Get a reference to the target li element's parent, which would be the ul.
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
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
  attachListItemButtons(li); //Attach a button on a new item
  //Append the list item
  ul.appendChild(li);
  //Clear the input field when a new list item is added
  addItemInput.value = '';
});
