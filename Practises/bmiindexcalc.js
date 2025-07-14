
    const form = document.querySelector('#bmiForm');
    document.body.style.backgroundColor = 'black';

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const weight = parseFloat(document.querySelector('#weight').value);
        const height = parseFloat(document.querySelector('#height').value);
        const resultDiv = document.querySelector('#result');

        if (isNaN(weight) || isNaN(height) || height <= 0) {
            resultDiv.textContent = 'Please enter valid weight and height.';
            return;
        }

        const bmi = weight / (height * height);
        resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)}`;
    });
    