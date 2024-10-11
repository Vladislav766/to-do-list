const inputBox = document.getElementById('input-box')
const addTaskButton = document.getElementById('addTaskButton')
const taskList = document.getElementById('taskList')

addTaskButton.addEventListener('click', function () {
	const taskInput = inputBox.value

	if (taskInput.trim() === '') {
		alert('Please enter a task')
	} else {
		let li = document.createElement('li')
		li.innerHTML = taskInput
		let renameButton = document.createElement('button')
		renameButton.innerHTML = 'Rename'
		renameButton.className = 'rename-button'
		li.appendChild(renameButton)
		let span = document.createElement('span')
		span.innerHTML = '\u00d7'
		li.appendChild(span)
		taskList.appendChild(li)
		inputBox.value = ''
		saveData()
	}
})

taskList.addEventListener('click', function (e) {
	S
	if (e.target.tagName === 'LI') {
		e.target.classList.toggle('checked')
		saveData()
	} else if (e.target.tagName === 'SPAN') {
		e.target.parentElement.remove()
		saveData()
	} else if (e.target.tagName === 'BUTTON') {
		let newTaskName = prompt(
			'Enter new task name:',
			e.target.parentElement.firstChild.textContent
		)
		if (newTaskName.trim() !== '') {
			e.target.parentElement.firstChild.textContent = newTaskName
			saveData()
		}
	}
})

function saveData() {
	localStorage.setItem('data', taskList.innerHTML)
}
function showTask() {
	taskList.innerHTML = localStorage.getItem('data')
}
showTask()
