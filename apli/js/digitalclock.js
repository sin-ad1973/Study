var displayPanel;
var controlPanel;

window.onload = appInit;

function appInit() {
  displayPanel = document.getElementById("displayPanel");
  controlPanel = document.getElementById("controlPanel");
  tick();
  initColorPicker();

  var filePicket = document.getElementById("filePicker");
  var fileButton = document.getElementById("fileButton");
  filePicker.addEventListener("change", setBackground, false);
  fileButton.addEventListener("click", function(){filePicker.click()}, false);
  loadSettings();
  hideControlPanel();
}

function tick() {
  var date = new Date();
  displayPanel.textContent = date.toLocaleTimeString();
  setTimeout(tick, 1000 - date.getMilliseconds());
}

function initColorPicker() {
  var colorPicker = document.getElementById("colorPicker");

  // カラーピッカーに置き換え
  var inputColor = document.createElement("input");
  inputColor.setAttribute("type", "color");
  if (inputColor.type == "color") {
    inputColor.value = "black";
    if (inputColor.value == "#000000") {
      colorPicker.parentNode.replaceChild(inputColor, colorPicker);
      inputColor.id = "colorPicker";
      colorPicker = inputColor;
    }
  }

  colorPicker.addEventListener("change", setColor, false);
}

function setColor(evnet) {
  displayPanel.style.color = event.target.value;
  saveData("color", event.target.value);
}

function setBackground(event) {
  var file = event.target.files[0];
  window.URL = window.URL||window.webkitURL;
  var url = window.URL.createObjectURL(file);
  document.body.style.backgroundImage = "url('" + url + "')";

  var fileReader = new FileReader();
  fileReader.onload = function(){saveData("image", this.result);}
  fileReader.readAsDataURL(file);
}

function saveData(name, data) {
  var storage = localStorage;
  if (typeof storage == "undefined") return;
  storage.setItem(name, data);
}

function loadSettings() {
  var storage = localStorage;
  if (typeof storage == "undefined") return;

  var textColor = storage.getItem("color");
  var image = storage.getItem("image");

  if (textColor) {
    var colorPicker = document.getElementById("colorPicker");
    displayPanel.style.color = textColor;
    colorPicker.value = textColor;
  }

  if (image) {
    document.body.style.backgroundImage = "url('" + image + "')";
  }
}

function hideControlPanel() {
  controlPanel.style.visibility = "hidden";

  if (typeof document.ontouchmove == "undefined") {
    document.addEventListener("mousemove", showControlPanel, false);
  } else {
    document.addEventListener("touchmove", showControlPanel, false);
  }
}

function showControlPanel() {
  controlPanel.style.visibility = "visible";
  setTimeout(hideControlPanel, 3000);

  if (typeof document.ontouchmove == "undefined") {
    document.removeEventListener("mousemove", showControlPanel);
  } else {
    document.removeEventListener("touchmove", showControlPanel);
  }
}
