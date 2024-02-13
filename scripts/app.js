import { saveLocalStorage, getLocalStorage, removeLocalStorage } from "./localStorage.js";
import {GroupRND} from "./randomGeneratorGroup.js"

let inputField = document.getElementById("inputField");

let submitBtn = document.getElementById("submitBtn");

let groupBtn = document.getElementById("groupBtn");

let randomBtn = document.getElementById("randomBtn");

let randomName = document.getElementById("randomName");

let groupSlider = document.getElementById("groupSlider");

let groupNumber = document.getElementById("groupNumber");

let generateNameGroup = document.getElementById("generateNameGroup");

let NameContainer = document.getElementById("NameContainer");


let arr = [];

const NameInputAdd = (name) => {
    
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
    colDiv1.textContent = name;

    let colDiv2 = document.createElement('div');
    colDiv2.classList.add('col-6');

    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('btn', 'btn-danger');
    button.textContent = 'Remove';

    button.addEventListener('click', async () => {
        removeLocalStorage(name);
        updateFunction();
    });

    colDiv2.appendChild(button);
    rowCustomDiv.appendChild(colDiv1);
    rowCustomDiv.appendChild(colDiv2);
    widthDiv.appendChild(rowCustomDiv);
    rowDiv.appendChild(widthDiv);
    containerDiv.appendChild(rowDiv);
    NameContainer.append(containerDiv);
}

const updateFunction = () => {
    NameContainer.innerHTML = "";
    arr = getLocalStorage();

    arr.map(element => NameInputAdd(element)); 
    groupSlider.max = arr.length;
}

updateFunction();

const updateFunctionSlider = () => {
    groupNumber.textContent = groupSlider.value;
    console.log("change");
}

groupSlider.onchange = () => {
    updateFunctionSlider();
};

submitBtn.addEventListener('click', () => {
    if(inputField.value !== "")
    {    
    saveLocalStorage(inputField.value);
    updateFunction();
    }
    else
    {
        alert("PLEASE TYPE A NAME")
    }
})

randomBtn.addEventListener('click', () => {
    let newArr = getLocalStorage();
    randomName.innerHTML = "";
    let num = Math.floor(Math.random() * newArr.length);
    let h3 = document.createElement("h3");
    h3.textContent = newArr[num];
    randomName.append(h3)
})


groupBtn.addEventListener('click', () => {
    let groupArr = getLocalStorage();
    GroupRND(groupArr, groupSlider.value);
})


export { generateNameGroup }

