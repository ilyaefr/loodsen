const addBtn = document.getElementById('addBtn');
const container = document.getElementById('container');
let count = 1;

addBtn.addEventListener('click', () => {
	const box = document.createElement('div');
	box.classList.add('box');
	box.textContent = `Новый элемент #${count++}`;

	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete-btn');
	deleteBtn.textContent = 'Удалить';

	deleteBtn.addEventListener('click', () => {
		box.remove();
	});

	box.append(deleteBtn);
	container.append(box);
});
