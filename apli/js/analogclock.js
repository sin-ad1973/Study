var displayPanel;
var controlPanel;
var lastX;
var lstY;

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

  if (typeof displayPanel.ontouchstart === "undefined") {
    displayPanel.addEventListener("dragstart", dragStart, false);
    displayPanel.addEventListener("dragend", dragEnd, false);
  } else {
    displayPanel.addEventListener("touchstart", touchStart, false);
    displayPanel.addEventListener("touchmove", touchMove, false);
    displayPanel.addEventListener("touchend", touchEnd, false);
  }

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
  var posX = storage.getItem("PosX");
  var posY = storage.getItem("PosY");

  var colorPicker = document.getElementById("colorPicker");
  drawClock.frame(color);
  colorPicker.value = color;

  if (image) {
    document.body.style.backgroundImage = "url('" + image + "')";
  }

  if (posX && posY) {
    displayPanel.style.left = posX;
    displayPanel.style.top = posY;
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
 * ドラッグスタートイベントハンドラ
 */
 function dragStart(event) {
   lastX = event.screenX;
   lastY = event.screenY;

   // For Firefox
   event.dataTransfer.setData("Text", this.innerHTML);
 }
 /**
  * タッチスタートイベントハンドラ
  */
 function touchStart(event) {
   lastX = event.touches[0].clientX;
   lastY = event.touches[0].clientY;
 }
 /**
  * タッチムーブイベントハンドラ
  */
  function touchMove(event) {
    event.preventDefault();
    var element = event.target;
    if (element.nodeName === "CANVAS") {
      element = element.parentNode;
    }

    var x = event.touches[0].clientX;
    var y = event.touches[0].clientY;

    moveClock(element, x, y);

    lastX = x;
    lastY = y;
  }

 /**
  * ドラッグエンドイベントハンドラ
  */
  function dragEnd(event) {
    var element = event.target;
    var x = event.screenX;
    var y = event.screenY;

    var pos = moveClock(element, x, y);

    saveData("PosX", pos.x);
    saveData("PosY", pos.y);

    lastX = null;
    lastY = null;
  }
  /**
   * タッチエンドイベントハンドラ
   */
   function touchEnd(event) {
     var element = event.target;
     if (element.nodeName === "CANVAS") {
       element = element.parentNode;
     }

     var x = event.changedTouches[0].clientX;
     var y = event.changedTouches[0].clientY;

     var pos = moveClock(element, x, y);

     saveData("PosX", pos.x);
     saveData("PosY", pos.y);

     lastX = null;
     lastY = null;
   }

  function moveClock(element, curX, curY) {
    var posX, posY;
    var newX = element.offsetLeft + curX - lastX;
    var newY = element.offsetTop + curY - lastY;
    var maxX = document.body.clientWidth - element.offsetWidth;
    var maxY = document.body.clientHeight - element.offsetHeight;

    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX > maxX) newX = maxX;
    if (newY > maxY) newY = maxY;

    posX = newX + "px";
    posY = newY + "px";

    element.style.left = posX;
    element.style.top = posY;

    return {x:posX, y:posY};
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
