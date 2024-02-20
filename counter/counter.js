const btnAdd      = document.getElementById('increase');
const btnSubtract = document.getElementById('decrease');
const count       = document.getElementById('count');
const btnReset    = document.getElementById('reset');
      counts      = 0
btnAdd.addEventListener('click', add);
btnSubtract.addEventListener('click', subtract)
btnReset.addEventListener('click', reset);


function add(event){
addCount        = counts += 1;
count.innerHTML = addCount;
}

function subtract(event){
  minusCount      = counts -= 1;
  count.innerHTML = minusCount;
}
function reset(event){
  counts          = 0;
  count.innerHTML = 0;
}