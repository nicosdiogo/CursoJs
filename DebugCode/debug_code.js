function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let result = multiply(num1, num2);

                    // Display the result
                    displayResult(result);
                } else {
                    displayResult('Por Favor, insira números válidos.');
                }
            }

            function multiply(a, b) {
                // Introduce a debugger statement to pause execution
                //debugger;
                    let add = a + b;
                    let sub = a - b;
                    let mult = a * b;
                    let div = a / b;
               
                    // Multiply the numbers
                return [add, sub, mult, div];
            }

            function displayResult(result) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result');
                resultElement.innerHTML = `O Resultado é: <b>Adição:</b> ${result[0]}, <b>Subtração:</b> ${result[1]}, <b>Multiplicação:</b> ${result[2]}, <b>Divisão:</b> ${result[3]}`;
            }
        
