const day = 1440;

// Values from form
let lastMealHour;
let lastMealMinutes;
let fastDuration;

function grabNumbers(){
  lastMealHour = Number(document.getElementById('mealHour').options[document.getElementById('mealHour').selectedIndex].value);
  lastMealMinutes = Number(document.getElementById('mealMinutes').options[document.getElementById('mealMinutes').selectedIndex].value);
  fastDuration = Number(document.getElementById('fastingHours').options[document.getElementById('fastingHours').selectedIndex].value);
}

// Grab result
let hourResult = document.getElementById('hourResult');
let minResult = document.getElementById('minResult');

// Button event listener
const button = document.getElementById('btn-calculate');

button.addEventListener('click', buttonClicked);

let endFast;
function buttonClicked(){
  grabNumbers();
  let startFast = (lastMealHour * 60) + lastMealMinutes;
  fastDuration *= 60;
  let totalMins = startFast + fastDuration;
  if(totalMins > day){
    endFast = totalMins - day;
    return minutesToTime(endFast);
  } else {
    endFast = totalMins;
    return minutesToTime(endFast);
  }
}


function minutesToTime(minutes){
  let hours = Math.floor(minutes / 60);
  let minut = minutes - (hours * 60);
  hourResult.innerText = hours;
  if (minut != 0){
    minResult.innerText = minut;
  } else {
    minResult.innerText = '00';
  }
}
