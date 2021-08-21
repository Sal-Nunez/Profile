function remove(document) {
    document.remove()
}
function replace(document) {
    if(document.innerText == "Jane Doe") {
        document.innerText = "Sal Nunez";
    }
    else {
        document.innerText = "Jane Doe";
    }
}
function addConnection(document) {
    var currentCount = parseInt(document.innerText);
    document.innerText = 1 + currentCount;
}
function subtractConnectionRequests(document) {
    var currentConnectionRequests = parseInt(document.innerText);
    console.log(currentConnectionRequests)
    document.innerText = currentConnectionRequests - 1;
}