function calculateSalaryWithTaxes(input) {
    
    const number = parseFloat(input);

    if (isNaN(number)) {
      console.log("Значение задано неверно. Пожалуйста, введите число.");
    } else {
      const taxAmount = number * 0.13;
      const salaryAfterTaxes = number - taxAmount;
      console.log(`Размер заработной платы за вычетом налогов равен ${salaryAfterTaxes}`);
    }
  }