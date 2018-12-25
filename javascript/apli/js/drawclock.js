/*
 * アナログ時計特有の処理を行うクラス
 */

var drawClock = (function(){

  var canvas;
  var _hourHand;
  var _minHand;
  var _secHand;
  var diameter = 250;
  var r = diameter / 2;

  /**
   * 初期化
   */
  function initClock(panel) {
    setStyle();
    setCanvas(panel);

    _hourHand = new Image();
    _hourHand.src = "./images/hand_hours.png";

    _minHand = new Image();
    _minHand.src = "./images/hand_minutes.png";

    _secHand = new Image();
    _secHand.src = "./images/hand_seconds.png";

    showTime();
  }

  function setStyle() {
    var styleSheets = document.styleSheets;
    var styleSheet;
    var ruleString = ".analogclock{position:absolute;width:100%;height:100%}";

    if (styleSheets.length > 0) {
      styleSheet = styleSheets[0];
    } else {
      var style = document.createElement("style");
      document.head.appendChild(style);
      styleSheet = style.sheet;
    }
    styleSheet.insertRule(ruleString, 0);
  }

  function setCanvas(panel) {
    canvas = document.createElement("canvas");
    canvas.className = "analogclock";

    frameCanvas = document.createElement("canvas");
    frameCanvas.className = "analogclock";

    dial = new Image();
    dial.className = "analogclock";
    dial.src = "./images/dial.png";

    panel.appendChild(frameCanvas);
    panel.appendChild(dial);
    panel.appendChild(canvas);
  }

  function showTime() {
    if (!canvas.getContext) return;

    var date = new Date();
    var sec = date.getSeconds();
    var min = date.getMinutes();
    var hour = date.getHours();

    var radSec = Math.PI / 30 * sec;
    var radMin = Math.PI / 30 * min;
    var radHour = (Math.PI / 6 * hour) + (Math.PI / (30 * 12) * min);

    canvas.width = diameter;
    canvas.height = diameter;

    var context = canvas.getContext("2d");
    drawHand(radHour, _hourHand);
    drawHand(radMin, _minHand);
    drawHand(radSec, _secHand);
    setTimeout(showTime, 1000 - date.getMilliseconds());

    function drawHand(rad, hand) {
      context.save();
      context.translate(r, r);
      context.rotate(rad);
      context.drawImage(hand, -10, -r * 0.7, 21, diameter * 0.7);
      context.restore();
    }
  }

  /**
   * 時計描画
   */
  function drawFrame(color) {
    if (!frameCanvas.getContext) return;

    frameCanvas.width = diameter;
    frameCanvas.height = diameter;

    var context = frameCanvas.getContext("2d");
    var gradient = context.createRadialGradient(r, r, 0, r, r, r * 0.95);
    gradient.addColorStop("1", color);
    gradient.addColorStop("0.9", "black");

    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.fillStyle = gradient;
    context.beginPath();
    context.arc(r, r, r - 1, 0, Math.PI * 2, false);
    context.fill;
    context.stroke();
  }

  return {
    start: initClock,
    frame: drawFrame
  }
})();
