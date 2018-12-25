var displayPanel;
var controlPanel;
var textBox;

window.onload = appInit;

function appInit() {
  displayPanel = document.getElementById("displayPanel");
  controlPanel = document.getElementById("controlPanel");
  textBox = document.getElementById("textBox");

  var applyButton = document.getElementById("applyButton");
  var clearButton = document.getElementById("clearButton");

  applyButton.addEventListener("click", applyButtonClick, false);
  clearButton.addEventListener("click", clearButtonClick, false);
  window.onreseize = setPosition;
  document.body.onclick = switchPanel;
  controlPanel.onclick = function(event){event.cancelBubble = true;};
  loadText();
}

function applyButtonClick(evnet) {
  var text = textBox.value;
  setText(text);
  saveText(text);
}

function clearButtonClick(event) {
  displayPanel.textContent = "";
  textContent.value = "";
}

function setPosition() {
  var bodyHeight = document.body.clientHeight;
  var divHeight = displayPanel.clientHeight;
  displayPanel.style.top = (bodyHeight - divHeight)/2 + "px";
}

function switchPanel(event) {
  if (controlPanel.style.visibility === "hidden") {
    controlPanel.style.visibility = "visible";
  } else {
    controlPanel.style.visibility = "hidden";
  }
}

function loadText() {
  var strage = localStorage;
  if (typeof strage == "undefined") {
    return;
  }
  var text = strage.getItem("text");
  if (text) {
    setText(text);
  }
}

function saveText(text) {
  var strage = localStorage;
  if (typeof strage == "undefined") {
    return;
  }
  strage.setItem("text", text);
}

function setText(text) {
  displayPanel.textContent = text;
  if (text.length < 6) {
    displayPanel.style.fontSize = "72px";
  } else if (text.length < 11) {
    displayPanel.style.fontSize = "48px";
  } else {
    displayPanel.style.fontSize = "36px";
  }
  setPosition();
  switchPanel();
}
