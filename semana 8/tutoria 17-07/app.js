const inputColor = document.querySelector('#color')
console.log(inputColor);

inputColor.addEventListener('input', function(event) {
    console.log(event);

    document.body.style.backgroundColor = event.target.value
})