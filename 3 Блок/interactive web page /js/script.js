const input = document.getElementById('todo-input')
const button = document.getElementById('todo-button')
const list = document.getElementById('todo-list')

button.addEventListener('click', () => {
  const taskText = input.value.trim() 
  if (taskText === '') return 

  const li = document.createElement('li')
  const span = document.createElement('span')
  span.textContent = taskText

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed')
  })

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'Удалить'
  deleteBtn.classList.add('delete-btn')
  deleteBtn.addEventListener('click', () => {
    li.remove()
  })

	li.append(checkbox)
	li.append(span)
	li.append(deleteBtn)
	list.append(li)

  input.value = ''
})
