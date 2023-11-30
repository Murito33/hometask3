function myFunc(carFuel = "gas", carSize = "XL") {
    let sizeMessage;

    switch (carSize) {
        case "S":
            sizeMessage = "for S size car";
            break;
        case "M":
            sizeMessage = 'for M size car';
            break;
        case 'L':
            sizeMessage = 'for L size car';
            break;
        case 'XL':
            sizeMessage = 'for XL size car';
            break;
        default:
            sizeMessage = 'for unknown car size';
            break;
    }

    // Используем console.log для вывода сообщения в консоль
    console.log(`Заправка ${sizeMessage}, тип палива "${carFuel}"`);
}

myFunc("disel", "XL");  
myFunc("gas", "M"); 
myFunc("gas", "S");
myFunc("gas", "L");
myFunc("gas", "XL");
myFunc("diesel", "S");
myFunc("diesel", "M");
myFunc("diesel", "L");
myFunc(); 