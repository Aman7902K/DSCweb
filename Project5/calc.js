const inputField = document.getElementById('calc-display');
const buttons = [...document.querySelectorAll('.but')];
const equal = document.getElementById('calc')
const cl = document.getElementById('clear')
const dl = document.getElementById('del')

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        btnval = button.textContent
        inputField.value += btnval;
    });
});

equal.addEventListener('click',function(){
    inputField.value = eval(inputField.value)
})

cl.addEventListener('click' , function(){
    inputField.value = ''
})

dl.addEventListener('click', function() {
    const currentValue = inputField.value;
    if (currentValue.length > 0) {
        // Remove the last character from the input value
        inputField.value = currentValue.slice(0, -1);
    }
});