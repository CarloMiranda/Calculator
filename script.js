document.addEventListener('DOMContentLoaded', function (){
    const result = document.getElementById("result");
    const buttons = document.querySelectorAll("button");
    let calculation = "";
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const value = button.innerText;
            if(value === "C") {
                calculation = "";
                result.value = "0";
            }else if (value === "=") {
                try {
                    result.value = eval(calculation);
                } catch (error) {
                    result.value = "error"
                }
                calculation = "";
            }else {
                calculation += value;
                result.value = calculation;
            }
        });
    });
})
