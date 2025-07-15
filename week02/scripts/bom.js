const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______________');
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);

button.addEventListener('click', fuction()){
    if (input.value.trim() !== '') { }
}

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
    input.value = '';
})