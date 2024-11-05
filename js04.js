//* 1 sum of resistors in series Calculate the sum of all resistors connected in series.
//* example sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)

function sumResitance (arreglo) 
   let Sum = 0; 
   for (let i=0; i < arreglo.lenght;i++) {
    if (arreglo[i] < 0) { 
         sum+= -arreglo[i];
    } else {   
    sum+= arreglo[i]; 
}  
// resultado 
console.log("La suma es de ${sum} ohms");
}

//* 2 Divided into its halves  Number divided into halves Given a number, return the number es in an array.
//*Examples: `numDiv(4)` should return `[2, 2]`.
function numDiv (number){ 
    let newarray[0] = number / 2;
    newarray [1] = number / 2;
    
    return console.log (newarray);
}
// resultado
console.log(numDiv(10)); // [5, 5]


//* 3 Secret Society Find the name of a secret society based on the first letter of each member's name.
function getSortedInitials(names) {
    let initials = [];
    
    // Obtenemos las iniciales de cada nombre usando un bucle
    for (let i = 0; i < names.length; i++) {
        initials.push(names[i][0]);
    }
    
    // Ordenamos las iniciales alfabéticamente usando un bucle anidado
    for (let i = 0; i < initials.length; i++) {
        for (let j = i + 1; j < initials.length; j++) {
            if (initials[i] > initials[j]) {
                // Intercambiamos las iniciales si están en el orden incorrecto
                let temp = initials[i];
                initials[i] = initials[j];
                initials[j] = temp;
            }
        }
    }
    
    return initials;
}


// Example
console.log(getSortedInitials(["Alfredo", "Wesley", "Diana"])); // ["A", "D", "W"]

//* //*4 Display online status for a list of users.Example:- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
function onlineStatus(users) {
    if (users.length === 0) {
        return 'Nadie está en línea';
    } else if (users.length === 1) {
        return `${users[0]} está en línea`;
    } else if (users.length === 2) {
        return `${users[0]} y ${users[1]} están en línea`;
    } else {
        return `${users[0]}, ${users[1]} y ${users.length - 2} más en línea`;
    }
}

// Ejemplo de uso
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])); // "mockIng99, J0eyPunch y 1 más en línea"
console.log(onlineStatus(['mockIng99', 'J0eyPunch']));               // "mockIng99 y J0eyPunch están en línea"
console.log(onlineStatus(['mockIng99']));                            // "mockIng99 está en línea"
console.log(onlineStatus([]));                                       // "Nadie está en línea"


//* 5  Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
function arrayMultiplos(number, length) {
    let multiples = [];
    
    for (let i = 1; i <= length; i++) {
        multiples.push(number * i);
    }
    
    return multiples;
}
// Example
console.log(arrayMultiplos(2, 10)); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]


//* 6 function antipodalAverage Given an array, return a shorter array following these steps:
//- Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
//- Sum each number of the first part with the inverse numbers of the second part.
//- Divide each number of the resulting array by 2 //*
function antipodalAverage(arr) {
    // Si if the array has a impar number  we elimated the middle
    let length = arr.length;
    if (length % 2 !== 0) {
        // we eliminated the middle element with a bucle
        let newArr = [];
        for (let i = 0; i < length; i++) {
            if (i !== (length - 1) / 2) { // we go straight to the middle element
                newArr.push(arr[i]);
            }
        }
        arr = newArr; // we updated to the middle element 
    }

    let half = arr.length / 2;
    let result = [];
    
    // we sum each element from the first and last element
    for (let i = 0; i < half; i++) {
        let average = (arr[i] + arr[arr.length - 1 - i]) / 2;
        result.push(average);
    }
    
    return result;
}
example 
console.log(antipodalAverage([1, 2, 3, 4, 5, 6]));  // [3.5, 3.5, 3.5]

