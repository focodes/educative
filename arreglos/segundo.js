let array = [11,3,7,2,9,10];

function secondMinimum (values) {
    min = Number.MAX_SAFE_INTEGER;
    secondMinimum = Number.MAX_SAFE_INTEGER;
    for (value  of values){
        if (value != min){
            if (value < min){
                secondMinimum = min;
                min = value;
            }
            else if (value < secondMinimum){
                secondMinimum = value;
            }
        }
    }
    return console.log((secondMinimum))
}

secondMinimum(array)