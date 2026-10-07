// 1. Select all elements
const form = document.querySelector('#new-item-form');
const list = document.querySelector('#list');
const input = document.querySelector('#item-input');

// 2. Submit the form to add a new element
form.addEventListener('submit', (e) => {
  e.preventDefault();
  //console.log(input.value)

  // a. Create a new item
  const item = document.createElement('div');
  item.innerText = input.value;
  item.classList.add('list-item');
  //console.log(item);

  // b. Add that item to the list
  list.appendChild(item);

  // c. Clear input
  input.value = '';

  // d. Setup event listener to delete item when clicked
  item.addEventListener('click', () => {
    list.removeChild(item);
    //Line below also removes the item
    //item.remove();
  });
});
