function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  
  addToDoForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    // how it all links together and behaves
    // get the text
    let title =newToDoText.value;
    // create a new li
    let newLi = document.createElement('li');
    // create a new input
    let checkbox = document.createElement('input');
    // set the input type to checkbox
    checkbox.type = "checkbox";
    // add delete button element
    let deleteBtn = document.createElement('button');
    // add text content to the button
    deleteBtn.addEventListener('click', function(event){
    //Opposite of append child, remove (this.parentElement) targeting <li> parent
    toDoList.removeChild(this.parentElement)
  });
    // what the elements contents are and where they are
    // set the title
    newLi.textContent = title;
    //attach the checkbox to the li
    deleteBtn.textContent="Delete";
    // add event listener for clicking the btn
    newLi.appendChild(checkbox);
    // attach the li to the ul
    toDoList.appendChild(newLi);
    // add delete button to all Li children
    newLi.appendChild(deleteBtn);
    //empty the input
    newToDoText.value = '';


  });
}
window.onload = function(){
  onReady();
};
