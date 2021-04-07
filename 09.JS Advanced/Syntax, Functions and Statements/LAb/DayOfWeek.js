function getDayNumber(input) {
    let dayNumber;
    let day = input.toLowerCase();
    switch (day){
        case 'monday': dayNumber = '1'; break;
        case 'tuesday': dayNumber = '2'; break;
        case 'wednesday': dayNumber = '3'; break;
        case 'thursday': dayNumber = '4'; break;
        case 'friday': dayNumber = '5'; break;
        case 'saturday': dayNumber = '6'; break;
        case 'sunday': dayNumber = '7'; break;
        default: dayNumber = 'error'
            break;
    }

    console.log(dayNumber);
}

getDayNumber('Monday');