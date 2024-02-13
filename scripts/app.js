let inputField = document.getElementById("inputField");
let numInput = document.getElementById("numInput");
let submitBtn = document.getElementById("submitBtn");
let groupBtn = document.getElementById("groupBtn");
let deleteName = document.getElementById("deleteName");
let TotalNameCount = document.getElementById("TotalNameCount");

const AddNames = () => {

}

submitBtn.addEventListener("click", async () => {
    if(inputField.value !== ""){
        let containerDiv = document.createElement('div');
        containerDiv.classList.add('container-fluid', 'center', 'topSpace');

        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row', 'center');

        let widthDiv = document.createElement('div');
        widthDiv.classList.add('width', 'center');

        let rowCustomDiv = document.createElement('div');
        rowCustomDiv.classList.add('row', 'rowCustom');

        let colDiv1 = document.createElement('div');
        colDiv1.classList.add('col-6');
        colDiv1.style.display = 'flex';
        colDiv1.style.alignItems = 'center';
        colDiv1.textContent = inputField.value;

        let colDiv2 = document.createElement('div');
        colDiv2.classList.add('col-6');

        let button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.classList.add('btn', 'btn-danger');
        button.textContent = 'Remove';

        button.addEventListener('click', async () => {
            containerDiv.remove(); 
        });

        colDiv2.appendChild(button);
        rowCustomDiv.appendChild(colDiv1);
        rowCustomDiv.appendChild(colDiv2);
        widthDiv.appendChild(rowCustomDiv);
        rowDiv.appendChild(widthDiv);
        containerDiv.appendChild(rowDiv);

        // Append container div to the body
        document.body.appendChild(containerDiv);
    }else{
        alert("please type a name")
    }
});

