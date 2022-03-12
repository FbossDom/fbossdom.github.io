var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var cityname = document.querySelector('.name')
var description = document.querySelector('.description')
var temperature = document.querySelector('.temperature')
var unitsystem = 'metric';
var unitelement = document.getElementById('unit')

var timeelement = document.getElementById('time');

setInterval( function(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (minutes<=9){
        minutes="0"+minutes;
    }
    if (seconds<=9){
        seconds="0"+seconds;
    }
    var timetext = hours + ":" + minutes + ":" + seconds;
    timeelement.innerText = timetext.replace(/\r?\n|\r/g, "");
    //console.log(hours + ":" + minutes + ":" + seconds);
}, 1000);

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+
    '&units='+unitsystem+'&appid=0ee3cad4c759de5ab5444aaee73a95f3')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        cityname.innerHTML = nameValue;
        description.innerHTML = descValue;
        temperature.innerHTML = tempValue;
        unitelement.innerText = unitchooser();
    })

.catch(err => alert("Wrong city name."))
})
function unitchooser(){
    switch(unitsystem){
        case 'metric':
        return('°C');
        break;
        
        case 'imperial':
        return('°F');
        break;

        default: return('°C');
    }
}
function dayornight(hoursinput){
    if(hoursinput >= 0 && hoursinput < 8){
        return('dawn');
    }
    if(hoursinput >= 8 && hoursinput < 12){
        return('morning');
    }
    if(hoursinput >= 12 && hoursinput < 18){
        return('afternoon');
    }
    if(hoursinput >= 18){
        return('night');
    }
}
