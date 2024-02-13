import { generateNameGroup } from "./app.js";

const GroupRND = (arry, number) => {
  if (number !== "0") {
    let array = [];
    let randomArray = arry;
    let nameCounter = 0;
    let newArray = [];

    for (let i = 0; i < number; i++) {
      let emptyArray = [];
      array.push(emptyArray);
    }

    while (randomArray.length >= 1) {
      for (let i = 0; i < number; i++) {
        if (randomArray.length !== 0) {
          let index = Math.floor(Math.random() * randomArray.length);
          array[i].push(randomArray[index]);
          randomArray.splice(index, 1);
        }
      }
    }

    while (array.length >= 1) {
      let index = Math.floor(Math.random() * array.length);
      newArray.push(array[index]);
      array.splice(index, 1);
    }

    generateNameGroup.innerHTML = "";

    newArray.map((arrayGroup) => {
      nameCounter++;
      let h3 = document.createElement("h3");
      h3.textContent = "Group " + nameCounter + ": ";

      for (let i = 0; i < arrayGroup.length; i++) {
        if (arrayGroup.length > 1) {
          if (i === arrayGroup.length - 1) {
            h3.textContent += arrayGroup[i];
          } else {
            h3.textContent += arrayGroup[i] + ", ";
          }
        } else {
          h3.textContent += arrayGroup[i];
        }
      }

      generateNameGroup.append(h3);
    });
  }
};

export { GroupRND };
