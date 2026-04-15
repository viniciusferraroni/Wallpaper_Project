var time = document.getElementById('hours');
var weeks = document.getElementById('day');

function clock() {
    // Relógio
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

    // Dia
    var displayday = currentTime.getDay();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var week = days[displayday]

    weeks.innerHTML = week;
}

setInterval(clock, 100);

// Clima
function BuscarClima(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Sao%20Paulo,br&units=metric&lang=pt_br&appid=2f0769ba6488ad6f089c3481b881684d')
        .then(c => c.json())
        .then(dados => {
            const temperatura = Math.floor(dados.main.temp);


            document.getElementById("temp").innerHTML = temperatura + "°C"
        }).catch(erro =>{
            document.getElementById("temp").innerHTML = "";
        })

}

BuscarClima();
setInterval(BuscarClima, 600000);

// Estrelas
function criarEstrelas() {
    const vazio = document.getElementById('vazio-infinito');
    const quantidade = 100;

    for (let i = 0; i < quantidade; i++){
        let estrela = document.createElement('div');
        estrela.className = 'particula';

        let tamanho = Math.random() * 3 + 'px';
        estrela.style.width = tamanho;
        estrela.style.height = tamanho;

        estrela.style.top = '50%';
        estrela.style.left = '50%';

        estrela.style.background = Math.random() > 0.5 ? '#ffffff' : '#7000da';

        estrela.style.setProperty('--x', (Math.random() * 2000 - 1000) + 'px');
        estrela.style.setProperty('--y', (Math.random() * 2000 - 1000) + 'px');

        estrela.style.animationDelay = (Math.random() * -20) + 's';

        vazio.appendChild(estrela);
    }
}
criarEstrelas();
