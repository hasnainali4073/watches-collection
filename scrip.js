 
 
 
 function handlePlusClick() {
        const inputField = document.getElementById('my-custom-qty');
        let currentNumber = parseInt(inputField.value) || 1;
        
        if (currentNumber < 50) { // Max limit 50 hai
            inputField.value = currentNumber + 1;
        }
    }

    // Minus Button ka function (Value kam karne ke liye)
    function handleMinusClick() {
        const inputField = document.getElementById('my-custom-qty');
        let currentNumber = parseInt(inputField.value) || 1;
        
        if (currentNumber > 1) { // Min limit 1 hai (zero nahi hoga)
            inputField.value = currentNumber - 1;
        }
    }
