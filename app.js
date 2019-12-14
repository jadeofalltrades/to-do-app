function onReady(){
  let toDos = JSON.parse(localStorage.getItem('toDos')) || [];


function getNextIdOnLoad() {
  let next = 0
  for(let i = 0; i < toDos.length; i++) {
    if(toDos[i].id > next) next = toDos[i].id
  }
  if(next > 0) return next+1
  else return next;
}
  let id = getNextIdOnLoad()
  const addToDoForm = document.getElementById('addToDoForm');
  function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value){return};
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    id++;
    newToDoText.value = '';
    renderTheUI();
  }

  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';
    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      let checkbox = document.createElement('input');
      const deleteBtn = document.createElement('button');
      checkbox.type="checkbox";
      checkbox.checked = toDo.complete
      newLi.textContent = toDo.title;
      deleteBtn.textContent="Delete!";
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);

      deleteBtn.addEventListener('click', event =>{
        toDos = toDos.filter(function(item){
          return item.id !== toDo.id;
        })
        renderTheUI();
      });
      checkbox.addEventListener('change', function(){
        let item = toDos.find(i  => i.id === toDo.id)
        item.complete = this.checked
        localStorage.setItem('toDos',JSON.stringify(toDos));
      })

        /* local storage */
      localStorage.setItem('toDos',JSON.stringify(toDos));
      const data = JSON.parse(localStorage.getItem('toDos'))
      data.forEach(function(toDo){
        createNewToDo(toDo)
          })

    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    localStorage.setItem('toDo', JSON.stringify(toDos[id]))
  });


  renderTheUI();
}


window.onload = function(){
  onReady();
};
