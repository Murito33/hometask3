function myFunc(carFuel = "gas", carSize = "XL") {
    const sizeMessages = {
        S: "for S size car",
        M: 'for M size car',
        L: 'for L size car',
        XL: 'for XL size car',
    };

    const sizeMessage = sizeMessages[carSize] || 'for unknown car size';

    // Используем console.log для вывода сообщения в консоль
    console.log(`Заправка ${sizeMessage}, тип палива "${carFuel}"`);
}

myFunc("disel", "XL");  
myFunc("gas", "M"); 
myFunc("gas", "S");
myFunc("gas", "L");
myFunc("gas", "XL");  // Заправка for unknown car size, тип палива "gas"
myFunc("diesel", "S");
myFunc("diesel", "M");
myFunc("diesel", "L");
myFunc();  