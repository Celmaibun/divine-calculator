const btn = document.querySelector('.submit');
const btnClear = document.querySelector('.clear');
const resultText = document.querySelector('.text');

const minArray = document.querySelectorAll('#min');
const maxArray = document.querySelectorAll('#max');


function calculate(e){
    e.preventDefault();

    let min = [];
    let max = [];
    let maxMinusmin = [];
    let sum = 1;

    minArray.forEach(item => {
        min.push(item.value);
    })
    maxArray.forEach(item => {
        max.push(item.value);
    })

    for(let i = 0; i < min.length; i++){
        if(min[i] > 0 && max[i] > 0)
        maxMinusmin.push(max[i] - min[i])
    }

    for(let i = 0; i < maxMinusmin.length; i++){
        sum = sum * maxMinusmin[i];
    }


    resultText.textContent = `~ ${sum}`
}



btn.addEventListener('click', calculate)
btnClear.addEventListener('click', function(e){
    e.preventDefault();
    minArray.forEach(item => {
        item.value = "";
    })
    maxArray.forEach(item => {
        item.value = "";
    })

    resultText.textContent = 0;
})