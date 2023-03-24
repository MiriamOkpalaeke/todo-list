//getting elements
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoItemList = document.querySelector(".todo-items");

// create an empty array to hold all the todo task
let todos = [];

// add an eventListener on  the form, and listen for submit event
todoForm.addEventListener("submit", function(event){
  event.preventDefault();//to prevent the page from reloading when submitting the form
  addTodo(todoInput.value);// call addTodo function with input box current value
});

//creating the addTodo () function
//function to add todo items
function addTodo(item) {
  if(item !== "") {//if item is not empty

    //create a todo object, which has name, id and completed
  const todo = {   
    id : Date.now(),
    name: item,
    completed: false,

  };
  //add the todos to the array
  todos.unshift(todo); // to make the latest todo appear first
  addTodoLocalStorage(todos) // renders them between the <ul> to screen

  todoInput.value =""; //refreshes the input field
}
else {
  alert("Please enter a task");
}
}

// creating a function to renderTodos to the screen
function renderTodos(todos) {
  todoItemList.innerHTML =""; // // clear everything inside <ul>
  
  //using forEach loop to run through items inside the todos
  todos.forEach(function(item) {
    const checked = item.completed ? "checked" : null; // using ternary operator to check if item is completed
     
    const li = document.createElement("li"); //creating a li element and giving it a class of item
    li.setAttribute("class", "item");
    li.setAttribute("data-key", item.id);
   
   
    /*<li class="item" data-key"20200708">
    <input class="checkbox" type="checkbox">
          Host live session with stutern students
          <button id="edit-button">Edit</button>
          <button id="delete-button">Delete</button>
        </li> */
        if (item.completed === true) { //checks if an item is completed snd lines it through
          li.classList.add("checked");
          
        }
        li.innerHTML = `
        <input type="checkbox" class="checkbox" ${checked}>
        ${item.name}
          <button class="delete-button">Delete</button>`;
    //add the <li> to th <ul>
    todoItemList.appendChild(li);
  });
  
};

// function to add the todos(array) to local storage
function addTodoLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos)); //convert the array to string then stores it.
renderTodos(todos);
  
};

//function to get the items from local storage
function getFromLocalStorage() {
  const reference = localStorage.getItem("todos"); 

  // if reference exits convert back to array and store it in the todos array
if (reference) {
  todos = JSON.parse(reference);
  renderTodos(todos);
  
}
  
  
}
// toggle the value to completed and not completed
 function toggle(id) {
  todos.forEach(function (item) {
    if (item.id == id){
      item.completed = !item.completed;
    }
    
  });
   addTodoLocalStorage(todos);
  
}
//deleteTodo from the list and renders the updated list
 function deleteTodo(id) {
  todos = todos.filter(function(item){
    return item.id != id;
  }); 

  addTodoLocalStorage(todos);// update local storage
 }
 //get everything from local storage at load
getFromLocalStorage()

//adding event listeners for delete and checkbox
//to check if the event is on checkbox
todoItemList.addEventListener("click", function(event){
if (event.target.type === "checked") {
  toggle(event.target.parentElement.getAttribute('data-key'));
  
}
//check for delete button
if (event.target.classList.contains("delete-button")) {

  // get id from data-key attribute's value of parent <li> where the delete-button is present
  deleteTodo(event.target.parentElement.getAttribute("data-key"));
  
}
});





