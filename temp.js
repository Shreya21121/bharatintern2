document.addEventListener("DOMContentLoaded", function() {
    const celsiusInput = document.getElementById("celsius");
    const convertBtn = document.getElementById("convertBtn");
    const result = document.getElementById("result");

    convertBtn.addEventListener("click", function() {
        const celsiusValue = parseFloat(celsiusInput.value);
        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = celsiusValue * 9/5 + 32;
            result.textContent = `${celsiusValue}°C is equal to ${fahrenheitValue.toFixed(2)}°F.`;
        } else {
            result.textContent = "Please enter a valid number.";
        }
    });
});