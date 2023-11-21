
// kullanıcıdan veri buradan alınır.
const number = parseInt(12/*prompt('Enter a positive integer: ')*/);

// verilen numaranın negatif olup olmadığı olması durumunda hata vermesi sağlanır.
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

//  verilen numaranın 0 olması durumunda sonucun 1 olduğu ifade edilir.
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if numara pozitif ise aşağıdaki işlem yapılır.
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}