const addFieldBtn = document.querySelector('#addBtn');
const inputFieldData = document.querySelector('#inputField');
const ulOfList = document.querySelector('#ulList');

addFieldBtn.addEventListener('click', () => {
    if (inputFieldData.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `<p>${inputFieldData.value}</p>
                        <div>
                        <button class="editBtn">Edit</button>
                        <button class="deleteBtn">Delete</button>
                        </div>`;
        
        const editBtn = li.querySelector('.editBtn');
        editBtn.addEventListener('click', () => {
            const currentText = li.querySelector('p').textContent;
            inputFieldData.value = currentText;
            addFieldBtn.textContent = "Save"; 

            
            addFieldBtn.onclick = () => {
                if (inputFieldData.value.trim() !== '') {
                    li.querySelector('p').textContent = inputFieldData.value;
                    inputFieldData.value = ''; 
                    addFieldBtn.textContent = "Add"; 
                    addFieldBtn.onclick = () => {}; 
                }
            };
        });

        const deleteBtn = li.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', () => {
            li.remove(); // Remove the list item
        });

        ulOfList.append(li);
        inputFieldData.value = ''; 
    }
});
