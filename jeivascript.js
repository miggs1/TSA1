document.getElementById('changeColorButton').addEventListener('click', function() {
    const resume = document.getElementById('resume');
    const changeColor = getchangeColor();
    resume.style.backgroundColor = changeColor;
});

function getchangeColor() {
    var newColor = "#87B7D6";
    var resume = document.getElementById('resume');
    resume.style.backgroundColor = newColor;
    
}

