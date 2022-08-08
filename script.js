const container = document.getElementById("container");
const hours = [
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "1:00",
  "2:00",
  "3:00",
  "4:00",
  "5:00",
];

function onSave(evt) {
  const time = evt.target.id.replace("save-button", "");
  const input = document.getElementById("text-input" + time);
  const inputValue = input.value;
  const textBox = document.getElementById("text-box" + time);
  textBox.textContent = inputValue;
  localStorage.setItem(time, inputValue);
}
function onClear(evt) {
    const time = evt.target.id.replace("clear-btn","");
    const input = document.getElementById("text-input" + time);
    input.value=""
    const textBox =document.getElementById("text-box" + time)
    textBox.textContent = ""
    localStorage.removeItem(time);
}

for (let i = 0; i < hours.length; i++) {
  const currentHour = hours[i];
  const newHourBlock = document.createElement("div");
  newHourBlock.classList.add("hour-block");

  const label = document.createElement("p");
  label.textContent = currentHour;
  label.classList.add("label");
  newHourBlock.append(label);

  const textInput = document.createElement("input");
  textInput.setAttribute("type", "text");
  textInput.classList.add("text-input");
  textInput.setAttribute("id", "text-input" + currentHour);
  newHourBlock.append(textInput);

  const saveButton = document.createElement("button");
  saveButton.classList.add("save-button");
  saveButton.setAttribute("id", "save-button" + currentHour);
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", onSave);
  newHourBlock.append(saveButton);

  const clearBtn = document.createElement("button")
  clearBtn.classList.add("clear-btn")
  clearBtn.setAttribute("id","clear-btn" + currentHour);
  clearBtn.textContent = "Clear";
  clearBtn.addEventListener("click",onClear);
  newHourBlock.append(clearBtn);

  const textBox = document.createElement("p");
  textBox.setAttribute("id", "text-box" + currentHour);
  const savedValue = localStorage.getItem(currentHour);
  textBox.textContent = savedValue;
  textBox.classList.add("text-box");
  newHourBlock.append(textBox);

  container.append(newHourBlock);
}

const clearAllBtn = document.getElementById("clear-all-btn");
function clearAll() {
  localStorage.clear();
  const textBoxes = document.getElementsByClassName("text-box");
  for (let i = 0; i < textBoxes.length; i++) {
    const currentTextBox = textBoxes[i];
    currentTextBox.textContent = "";
  }
}
clearAllBtn.addEventListener("click", clearAll);
