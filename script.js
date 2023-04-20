//hacer que el cubo tome una posicion "horizontal"
const clockCapture = document.querySelector('.clock-face')
clockCapture.style.transform = 'rotate(90deg)'

//capturar nodos 
const hours = document.querySelector('.hour-hand')
  hours.style.width = '100%';
  hours.style.height = '2.5'
  hours.style.backgroundColor = 'red';
  hours.style.background = 'linear-gradient(to left, transparent 46%, red, red, red, red, red)';
// nodeChanges(hours, 20 , '2.5', 'red'); 

const minutes = document.querySelector('.min-hand')
minutes.style.width = '100%'
minutes.style.height = '1.5%'
minutes.style.background = 'blue'
minutes.style.background = 'linear-gradient(to left, transparent 46%, blue, blue, blue, blue, blue)';
 
const seconds = document.querySelector('.second-hand')
seconds.style.width = '100%';
seconds.style.height = '1%'
seconds.style.background = 'yellow'
seconds.style.background = 'linear-gradient(to left, transparent 46%, yellow, yellow, yellow, yellow, yellow)';

// function nodeChanges(node, wdth, hght, bColor){
//     node.style.with = wdth
//     node.style.height = hght
//     node.style.backgroundColor = bColor
//     node.style.background = linear-gradiente(to left, transparent 46%, ${bColor}, ${bColor}, ${bColor}, ${bColor}, ${bColor})
// }

 
setInterval(time, 1000) 

function time(){
    let segundosPeru = 0;
    let minutosPeru = 0;
    let horasPeru = 0;

    const datePeru = new Date();
  
    //extraer los segundos, minutos y las horas
    segundosPeru = datePeru.getSeconds() * 6
    minutosPeru = datePeru.getMinutes() * 6
    horasPeru =  datePeru.getHours() * 30 + Math.round(minutosPeru / 12)
        
    seconds.style.transform = `rotate(${segundosPeru}deg)`  
    minutes.style.transform = `rotate(${minutosPeru}deg)`    
    hours.style.transform = `rotate(${horasPeru}deg)`

 }