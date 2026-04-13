//Clock
var time = document.getElementById('hours');

function clock() {

    var currentTime = new Date();

    var displayhours = currentTime.getHours();
    var displayminutes = currentTime.getMinutes();
    var displayseconds = currentTime.getSeconds();

    if (displayhours < 10) {
        displayhours = ("0" + displayhours)
    }
    if (displayminutes < 10) {
        displayminutes = ("0" + displayminutes)
    }

    if (displayseconds < 10) {
        displayseconds = ("0" + displayseconds)
    }

    time.innerHTML = displayhours + ":" + displayminutes + ":" + displayseconds;

}

setInterval(clock, 100);