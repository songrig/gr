let addMessage = document.querySelector('.message'),
   addButton = document.querySelector('.add');
   todo=document.querySelector('.todo');

let todoList = []
addButton.addEventListener('click',function(){
    let newTodo = {
      todo: addMessage.value

    };
    todoList.push(newTodo);
    
    
});
