const form = document.getElementById('todo-form')
const input = document.getElementById('todo-input')
const list = document.getElementById('todo-list')

// Загружаем задачи из LocalStorage
let todos = JSON.parse(localStorage.getItem('todos')) || [] 


function renderTodos() {
  list.innerHTML = ''   // Очищаем список чтобы заполнить заново и без повторений 
  todos.forEach((todo, index) => {
    const li = document.createElement('li')
    li.textContent = todo

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Удалить'
    deleteBtn.onclick = () => {
      todos.splice(index, 1)
      updateLocalStorage()
      renderTodos()
    }

    li.appendChild(deleteBtn)
    list.appendChild(li)
  })
}

function updateLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(todos))
}

form.addEventListener('submit', e => {
  e.preventDefault() 
  const value = input.value.trim() 
  if (value) {
    todos.push(value)
    updateLocalStorage()
    renderTodos()
    input.value = ''
  }
})

// Инициализация при загрузке
renderTodos()
