function myFunc(carFuel = "GAS", carSize) {
    const sizeMessages = {
        S: "for S size car",
        M: 'for M size car',
        L: 'for L size car',
        XL: 'for XL size car',
    };

    const fuelType = carFuel.toUpperCase();  // Приводим к верхнему регистру для удобства сравнения

    const sizeMessage = carSize !== undefined && sizeMessages[carSize] !== undefined
        ? sizeMessages[carSize]
        : 'for unknown car size';

    console.log(`Заправка ${sizeMessage}, тип топлива "${fuelType}"`);
}

// Примеры вызова функции:

// 1. Заправка для XL размера авто, тип топлива "GAS"
myFunc("GAS", "XL");

// 2. Заправка для M размера авто, тип топлива "GAS"
myFunc("GAS", "M");

// 3. Заправка для S размера авто, тип топлива "PETROL"
myFunc("PETROL", "S");

// 4. Заправка для неизвестного размера авто, тип топлива "GAS"
myFunc("GAS");

// 5. Заправка для неизвестного размера авто, тип топлива "PETROL"
myFunc("PETROL");

// 6. Заправка для неизвестного размера авто, тип топлива "GAS"
myFunc("GAS", "");

// 7. Заправка для неизвестного размера авто, тип топлива "PETROL"
myFunc("PETROL", "");

// 8. Заправка для XL размера авто, тип топлива "GAS"
myFunc("gas", "XL");  // Пример нечувствительности к регистру

// 9. Заправка для неизвестного размера авто, тип топлива "GAS"
myFunc();  // Пример вызова без аргументов
