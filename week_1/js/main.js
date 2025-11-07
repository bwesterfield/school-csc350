const buttons = document.querySelectorAll(".action");

const inputValue = document.getElementById("inputText");
const placesList = document.getElementById("itemList");
const placesArray = [];

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const action = this.dataset.action;

    if (action == "add") {
      addPlaces();
    } else if (action == "clear") {
      clearPlaces();
    } else {
      console.log("error occurred");
    }
  });
});

function addPlaces() {
  const textValue = inputValue.value;

  if (textValue) {
    if (!placesArray.includes(textValue)) {
      placesArray.push(textValue);

      placesList.innerHTML = "";
      placesArray.map(function (element, array) {
        const li = document.createElement("li");
        li.textContent = element;
        placesList.appendChild(li);
      });
    } else {
      window.alert("Input value already exists - add another value");
    }
  }
}

function clearPlaces() {
  placesArray.length = 0;
  placesList.innerHTML = "";
}
