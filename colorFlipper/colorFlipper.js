

function changeColor(newColor){
newColor.toLowerCase();
document.body.style.background = newColor;
document.getElementById('bgndcolor').innerHTML = ('Background color : ' + newColor);
};

const myBtn = document.getElementById('btn');
myBtn.addEventListener('click',(event) =>{
    const newColor = document.getElementById('input').value;
    changeColor(newColor);
});

