document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form")
  const placeHolder = document.getElementById("new-task-description")
  const tasks = document.getElementById("tasks")
  
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const list = document.createElement("li")
     list.innerHTML = placeHolder.value
    tasks.appendChild(list)
    form.reset()
  
   })
  });