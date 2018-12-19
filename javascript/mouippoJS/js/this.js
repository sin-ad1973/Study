var output1;
var output2;
var callKansu;
var callMethod;

window.onload=appInit;

function appInit() {
    output1 = document.getElementById("output1");
    output2 = document.getElementById("output2");
    callKansu = document.getElementById("callKansu");
    callMethod = document.getElementById("callMethod");
    callKansu.addEventListener("click", callKansuFunc);
    callMethod.addEventListener("click", callMethodFunc);
}

function callKansuFunc() {
    // 関数
    function checkThis() {
        output1.innerHTML = this;
        this.val = "test";
    }

    checkThis();
    output2.innerHTML = val;
}

function callMethodFunc() {
    // メソッド
    var obj = {
        val:"hoge",
        checkThis:function () {
            output1.innerHTML = this;
            this.val = "fuga";
        }
    }

    obj.checkThis();
    output2.innerHTML = obj.val;
}
