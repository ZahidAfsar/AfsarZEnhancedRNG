const getLocalStorage = () => {
  if (localStorage.getItem("savedNames") === null) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem("savedNames"));
  }
};

const saveLocalStorage = (nameParameter) => {
  let names = getLocalStorage();

  if (!names.includes(nameParameter)) {
    names.push(nameParameter);
  }

  localStorage.setItem("savedNames", JSON.stringify(names));
};

const removeLocalStorage = (nameParameter) => {
  let names = getLocalStorage();
  let index = names.indexOf(nameParameter);

  names.splice(index, 1);
  localStorage.setItem("savedNames", JSON.stringify(names));
};

export { getLocalStorage, saveLocalStorage, removeLocalStorage };
