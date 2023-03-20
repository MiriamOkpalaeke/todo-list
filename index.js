
let input = document.querySelector("#new-task");
let addBtn = document.querySelector("#add-button");
let tasks = document.querySelector(".tasks");
//let deleteBtn = document.querySelector('#delete-button');


//adding new task
addBtn.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `
    <div id="item">
    <p> ${input.value} </p>
            <div class="item-btn">
              <button id="edit-button">Edit</button>
              <button id="delete-button">Delete</button>
            </div>
            `
  tasks.appendChild(newItem);
  input.value = "";
  } else{
   alert("Please enter a task")
  }
});

//delete item
tasks.addEventListener("click", (e) => {
   if (e.target.classList.contains("button")){
      e.target.parentElement.remove();
   }
})


