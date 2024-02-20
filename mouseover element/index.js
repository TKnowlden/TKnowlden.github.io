const myDiv = document.getElementById('myBox');
myDiv.addEventListener('mouseover', hoverEvent);
myDiv.addEventListener('mouseout', hoverEventOut);
myDiv.addEventListener('click', mouseClick);
function hoverEvent(event){
    event.target.style.background = 'Yellow';
    myDiv.innerHTML = 'Dont do it! 🤔'
}
function hoverEventOut(event){
    event.target.style.background = 'lightgreen';
    myDiv.innerHTML = 'Do not think about clicking this box! 👌';
}
function mouseClick(event){
    event.target.style.background = 'tomato';
    myDiv.innerHTML = 'I cant believe you! 🫥';
}