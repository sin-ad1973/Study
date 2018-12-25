var output;
var callClosure;
var myClosure;

window.onload = appInit;

function appInit() {
    output = document.getElementById("output");
    callClosure = document.getElementById("callClosure");
    callClosure.addEventListener("click", callClosureFunc);
    myClosure = closure(100);
}

function callClosureFunc(event) {
    output.innerHTML = myClosure();
}

function closure(initVal) {
    var count = initVal;

    var innerFunc = function() {
        return count++;
    }

    return innerFunc;
}