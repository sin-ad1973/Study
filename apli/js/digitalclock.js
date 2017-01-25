var displayPanel;

window.onload = appInit;

function appInit() {
  displayPanel = document.getElementById("displayPanel");
  tick();
}

function tick() {
  var date = new Date();
  displayPanel.textContent = date.toLocaleTimeString();
  setTimeout(tick, 1000 - date.getMilliseconds());
}
