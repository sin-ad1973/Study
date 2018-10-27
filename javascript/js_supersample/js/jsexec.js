window.onload = appInit;

function appInit() {

    /* 1 */
    var h1Element = document.getElementsByTagName("H1").item(0);
    // DISPLAY ID
    // alert(h1Element.id);

    // DIDSPLAY VALUE
    // alert(h1Element.firstChild.nodeValue);
    // WRITE VALUE
    h1Element.firstChild.nodeValue = "TEST1";

    // DISPLAY NODE NAME
    alert(h1Element.nodeName);

    /* 2 (CHILD) */
    var groupsElement = document.getElementById("groups");
    var nodeList = groupsElement.childNodes;
    var str = "";
    for (var i=0; i<nodeList.length; i++) {
        str += nodeList.item(i).id + '\n';
    }
    // alert(str);

    /* 3 Prev, Next */
    var group2Element = document.getElementById("group2");
    str = "Prev: " + group2Element.previousSibling.id + "\n"
          + "Next: " + group2Element.nextSibling.id;
    // alert(str);

}