var displayPanel;
var controlPanel;

/**
 * 主に基本処理を行うクラス
 * アナログ時計特有の処理は[drawclodk.js]に委任
 */

window.onload = appInit;

function appInit() {
  displayPanel = document.getElementById("displayPanel");
  controlPanel = document.getElementById("controlPanel");
  drawClock.start(displayPanel);
  // tick();
  initColorPicker();

  var filePicker = document.getElementById("filePicker");
  var fileButton = document.getElementById("fileButton");
  filePicker.addEventListener("change", setBackground, false);
  fileButton.addEventListener("click", function(){filePicker.click()}, false);
  loadSettings();
  hideControlPanel();
}

/**
 * 初期化
 */
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

/**
 * 設定取り出し・反映
 */
function loadSettings() {
  var storage = localStorage;
  if (typeof storage == "undefined") return;

  var color = storage.getItem("color") || "gray";
  var image = storage.getItem("image");

  var colorPicker = document.getElementById("colorPicker");
  drawClock.frame(color);
  colorPicker.value = color;

  if (image) {
    document.body.style.backgroundImage = "url('" + image + "')";
  }
}

/**
 * 背景画像選択ファイルピッカーイベントハンドラ
 */
function setBackground(event) {
  var file = event.target.files[0];
  window.URL = window.URL||window.webkitURL;
  var url = window.URL.createObjectURL(file);
  document.body.style.backgroundImage = "url('" + url + "')";

  var fileReader = new FileReader();
  fileReader.onload = function(){saveData("image", this.result);}
  fileReader.readAsDataURL(file);
}

/**
 * カラーピッカーイベントハンドラ
 */
function setColor(evnet) {
  // displayPanel.style.color = event.target.value;
  drawClock.frame(event.target.value);
  saveData("color", event.target.value);
}

/**
 * ローカルストレージ保存
 */
function saveData(name, data) {
  var storage = localStorage;
  if (typeof storage == "undefined") return;
  storage.setItem(name, data);
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
