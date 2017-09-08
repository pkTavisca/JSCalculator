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

function getViewboxText() {
    return selectId("viewbox").innerHTML;
}

var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
        id = event.target.id;

        if (id === "C")
            onCPress();

        else if (id === "CE")
            onCEPress();

        else if (id === "=")
            onEnterPress();
        else
            appendToViewbox(id);
    });
}

function onEnterPress() {
    writeToViewbox(eval(getViewboxText()));
}

function onCPress() {
    writeToViewbox("");
}

function onCEPress() {
    writeToViewbox(getViewboxText().slice(0, -1));
}
