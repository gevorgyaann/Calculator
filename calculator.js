const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";


// Add event listener to each button
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        calculate(button.dataset.value);
    });
});
//Define function to calculate based on button clicked.
const calculate = function(btnValue)  {
    if ("=" === btnValue && "" !== output) {
        console.log (typeof output)

        //If output has '%', replace width '/100' before evaluating.
        output = my_eval(output);
    } else if ("C" === btnValue ) {
        output = "";
    } else {
        //If output is empty and button is specialChars then return
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

function my_eval(input) {
    if (input.includes("+")) {
        const chars = input.split("+");
        result = parseInt(chars[0]) + parseInt(chars[1]);
    
    }
    else if(input.includes("-")) {
        const chars = input.split("-");
        result = parseInt(chars[0]) - parseInt(chars[1]);
    }
    else if (input.includes("/")) {
        const chars = input.split("/");
        result = parseInt(chars[0]) / parseInt(chars[1]);
    }
    else if (input.includes("*")) {
        const chars = input.split("*");
        result = parseInt(chars[0]) * parseInt(chars[1]);
    }
    else if (input.includes("%")) {
        const chars = input.split("%");
        result = parseInt(chars[0]) % parseInt(chars[1]);
    }
    return result;

}
 
