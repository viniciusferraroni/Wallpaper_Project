var horas = document.getElementById('hours');

function clock() {

    var currentTime = new Date();

    var displayhours = currentTime.getHours();
    var displayminutes = currentTime.getMinutes();
    var displayseconds = currentTime.getSeconds();

    horas.innerHTML = displayhours + ":" + displayminutes + ":" + displayseconds;


}

setInterval(clock, 1000);