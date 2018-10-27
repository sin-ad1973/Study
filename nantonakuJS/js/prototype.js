var output;
var callBtn1;
var callBtn2;
window.onload = appInit;

function appInit() {
    output = document.getElementById("output");
    callBtn1 = document.getElementById("callProtoType1");
    callBtn2 = document.getElementById("callProtoType2");
    callBtn1.addEventListener("click", getName1);
    callBtn2.addEventListener("click", getName2);
}

function getName1() {
    var phone = new Phone("name1", "model1", "color1");
    output.innerHTML = phone.getName();
}

function getName2() {
    var phone = new Phone("name2", "model2", "color2");
    output.innerHTML = phone.getName();
}

var Phone = function(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
};
Phone.prototype = {
    getName : function() {return this.name},
    getModel : function() {return this.model},
    getColor : function() {return this.color}
};
