function addListener(elem, ev, listener) {
  if (elem.addEventListener) {
    elem.addEventListener(ev, listener, false);
  } else if (elem.attachEvent) {
    // for IE
    elem.attachEvent('on' + ev, listener);
  } else {
    throw new Error('イベントリスナに未対応です。')
  }
}

function getSource(e) {
  // イベントの発生元取得
  if (e.target) {
    return e.target;
  } else if (window.event) {
    // for IE
    return window.event.srcElement;
  }
}

function getButtonType(e) {
  // ボタン種類取得
  if (e.target) {
    switch (e.button) {
      case 0: return 'left';
      case 1: return 'center';
      case 2: return 'right';
    }
  } else if (window.event) {
    // for IE
    switch (window.event.button) {
      case 1: return 'left';
      case 2: return 'center';
      case 4: return 'right';
    }
  }
}
