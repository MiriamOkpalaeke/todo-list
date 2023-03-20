let input = document.querySelector("#new-task");
let addBtn = document.querySelector("#add-button");
let tasks = document.querySelector(".tasks");

//add btn disabled

input.addEventListener("keyup", () => {
  if (input.value.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
});

//adding new task
addBtn.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `
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
   if (e.target.classList.contains("delete-button")){
      e.target.parentElement.parentElement.remove();
   }
})


tasks.addEventListener("click", (e) => {
   if (e.target.classList.contains("Delete")){
      e.target.parentElement.parentElement.remove();
   }
})
