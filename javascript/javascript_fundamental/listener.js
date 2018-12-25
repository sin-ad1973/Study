	function addListener(elem, ev, listener) {
		if (elem.addEventListener) {
			elem.addEventListener(ev, listener, false);
		} else if (elem.attachEvent) {
			elem.attachEvent("on" +ev, listener);
		} else {
			throw new Error("イベントリスナに未対応です。");
		}
	}
	