var time = document.getElementById('hours');
var weeks = document.getElementById('day');

function clock() {
    // Clock
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

    // Day
    var displayday = currentTime.getDay();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var week = days[displayday]

    weeks.innerHTML = week;
}

setInterval(clock, 100);


