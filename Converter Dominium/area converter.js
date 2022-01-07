var microm = document.getElementById('micromTxta')
var milim = document.getElementById('milimTxta')
var centim = document.getElementById('centimTxta')
var decim = document.getElementById('decimTxta')
var meter = document.getElementById('meterTxta')
var kilom = document.getElementById('kilomTxta')

var inch = document.getElementById('inchTxta')
var feet = document.getElementById('feetTxta')
var yard = document.getElementById('yardTxta')
var mile = document.getElementById('milesTxta')

var astronomicalu = document.getElementById('astronomicaluTxta')
var lightyear = document.getElementById('lightyearTxta')
var lightday = document.getElementById('lightdayTxta')
var lighthour = document.getElementById('lighthourTxta')
var lightminute = document.getElementById('lightminuteTxta')
var lightsecond = document.getElementById('lightsecondTxta')
var parsec = document.getElementById('parsecTxta')

function setResults(valueInKm){
    console.log(valueInKm)
    microm.value = (valueInKm * 100000000).toString();
    milim.value = (valueInKm * 1000000).toString();
    centim.value = (valueInKm * 100000).toString();
    decim.value = (valueInKm * 10000).toString();
    meter.value = (valueInKm * 1000).toString();
    kilom.value = valueInKm

    inch.value = (valueInKm / 0.0000254).toString()
    feet.value = (valueInKm / 0.0003048).toString()
    yard.value = (valueInKm / 0.0009144).toString()
    mile.value = (valueInKm / 1.609344).toString()

    astronomicalu.value = (valueInKm / 149597871).toString()
    lightyear.value = (valueInKm / 9460730472580).toString()
    lightday.value = (valueInKm / (2.59020684 * Math.pow(10, 10) )).toString()
    lighthour.value = (valueInKm / (1.07925285 * Math.pow(10, 9) )).toString()
    lightminute.value = (valueInKm / 17987547.5).toString()
    lightsecond.value = (valueInKm / 299792.458).toString()
    parsec.value = (valueInKm / (3.08567758 * Math.pow(10, 13))).toString()
}
function resetEverything(){
    console.log("Fields Reset")
    microm.value = ""
    milim.value = ""
    centim.value = ""
    decim.value = ""
    meter.value = ""
    kilom.value = ""
    
    inch.value = ""
    feet.value = ""
    yard.value = ""
    mile.value = ""

    astronomicalu.value = "" 
    lightyear.value = ""
    lightday.value = ""
    lighthour.value = ""
    lightminute.value = ""
    lightsecond.value = ""
    parsec.value = ""
}
function micrometer(){
    var num = microm.value / 100000000
    console.log(microm.value)
    setResults(num)
}
function milimeter(){
    var num = milim.value / 1000000
    console.log(milim.value)
    setResults(num)
}
function centimeter(){
    var num = centim.value / 100000
    console.log(centim.value)
    setResults(num)
}
function decimeter(){
    var num = decim.value / 10000
    console.log(decim.value)
    setResults(num)
}
function meterF(){
    var num = meter.value / 1000
    console.log(meter.value)
    setResults(num)
}
function kilometer(){
    setResults(kilom.value)
}

function inchF(){
    var num = inch.value * 0.0000254
    console.log(inch.value)
    setResults(num)
}
function feetF(){
    var num = feet.value * 0.0003048
    console.log(feet.value)
    setResults(num)
}
function yardF(){
    var num = yard.value * 0.0009144
    console.log(yard.value)
    setResults(num)
}
function mileF(){
    var num = mile.value * 1.609344
    console.log(mile.value)
    setResults(num)
}

function AstronomicalUnit(){
    var num = astronomicalu.value * 149597871
    console.log(astronomicalu.value)
    setResults(num)
}
function lightyearF(){
    var num = lightyear.value * 9460730472580
    console.log(lightyear.value)
    setResults(num)
}
function lighdayF(){
    var num = lightday.value * (2.59020684 * Math.pow(10, 10))
    console.log(lightday.value)
    setResults(num)
}
function lighthourF(){
    var num = lighthour.value * (1.07925285 * Math.pow(10, 9))
    console.log(lighthour.value)
    setResults(num)
}
function lightminuteF(){
    var num = lightminute.value * 17987547.5
    console.log(lightminute.value)
    setResults(num)
}
function lightsecondF(){
    var num = lightsecond.value * 299792.458
    console.log(lightsecond.value)
    setResults(num)
}
function parsecF(){
    var num = parsec.value * (3.08567758 * Math.pow(10, 13))
    console.log(parsec.value)
    setResults(num)
}