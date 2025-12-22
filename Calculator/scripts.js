const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");


let expression = "";


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            expression = "";
            display.textContent = "0";
            return;
        }


        if (value === "=") {
            try {
                expression = eval(expression).toString();
                display.textContent = expression;
            } catch {
                display.textContent = "Error";
                expression = "";
            }
            return;
        }


        expression += value;
        display.textContent = expression;
    });
});