function selectId(id) {
    return document.getElementById(id);
}

function writeToViewbox(text) {
    selectId("viewbox").innerHTML = "";
    selectId("viewbox").innerHTML = text;
}

function appendToViewbox(text) {
    selectId("viewbox").innerHTML += text;
}

selectId("buttons").addEventListener("click", function (event) {
    id = event.target.id;
    if (parseInt(id))
        onNumberPress(parseInt(id));

    if (id === "+" || id === "-" || id === "*" || id === "/")
        onOperationPress(id);

    if (id === "=")
        onEnterPress();

    if (id === "C")
        onCPress();

    if (id === "CE")
        onCEPress();
})

function onNumberPress(number) {
    num1 = num1 * 10 + number;
    writeToViewbox(num1);
}

function onOperationPress(operation) {
    console.log(operation);
}

function onEnterPress() {

}

function onCPress() {

}

function onCEPress() {

}

function init() {
    state = "num1";
    num1 = 0;
    writeToViewbox(num1);
}
init();
var state;
var num1;
