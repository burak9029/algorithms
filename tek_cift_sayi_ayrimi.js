//numaranın tek mi çift mi olduğunu kontrol ediyor.

/*
numaranın ikiye bölümünden kalan 0 ise numara çift kalan sıfıra eşit değilse sayı tektir. diyor. başkanım %2 bölümden kalan olarak algıladım. hatırlayamadım 
*/


const number = 2/*prompt("Enter a number: ")*/;

//sayının çift olup olmadığını kontrol eder.
if(number % 2 == 0) {
    console.log("The number is even.");
}

// değilse tek sayı olduğunu yazdırır.
else {
    console.log("The number is odd.");
}