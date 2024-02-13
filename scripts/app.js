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
        // Create container div
        let containerDiv = document.createElement('div');
        containerDiv.classList.add('container-fluid', 'center', 'topSpace');

        // Create inner row div
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row', 'center');

        // Create width div
        let widthDiv = document.createElement('div');
        widthDiv.classList.add('width', 'center');

        // Create custom row div
        let rowCustomDiv = document.createElement('div');
        rowCustomDiv.classList.add('row', 'rowCustom');

        // Create first column div
        let colDiv1 = document.createElement('div');
        colDiv1.classList.add('col-6');
        colDiv1.style.display = 'flex';
        colDiv1.style.alignItems = 'center';
        colDiv1.textContent = inputField.value; // Set text content to input value

        // Create second column div
        let colDiv2 = document.createElement('div');
        colDiv2.classList.add('col-6');

        // Create button element
        let button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.classList.add('btn', 'btn-danger');
        button.textContent = 'Remove';

        button.addEventListener('click', async () => {
            containerDiv.remove(); 
        });

        // Append button to second column div
        colDiv2.appendChild(button);

        // Append first and second column divs to the custom row div
        rowCustomDiv.appendChild(colDiv1);
        rowCustomDiv.appendChild(colDiv2);

        // Append custom row div to width div
        widthDiv.appendChild(rowCustomDiv);

        // Append width div to inner row div
        rowDiv.appendChild(widthDiv);

        // Append inner row div to container div
        containerDiv.appendChild(rowDiv);

        // Append container div to the body
        document.body.appendChild(containerDiv);
    }else{
        alert("please type a name")
    }
});

