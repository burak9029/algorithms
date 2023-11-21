// program to find Armstrong number between intervals
/* 
ARMSTRONG SAYISINDAN ANLADIĞIM KADARIYLA RAKAMLARDAKİ SAYILAR KENDİLERİNCE KENDİ ADEDİNCE KENDİ ARALARINDA ÇARPILIP TOPLANDIKLARINDA YİNE SAYININ AYNISI ÇIKIYORSA 
BUNA ARMSTRONG SAYISI DENİR. JS KODUNDA İSE ÖNCELİK İLE İNTEGER PARSE LAYARAK SONRASINA ÇOK BİR ANLAM VEREMEDİM. .....................
*/
// take an input
const lowNumber = parseInt(1/* prompt('Enter a positive low integer value: ') */);
const highNumber = parseInt(153/* prompt('Enter a positive high integer value: ') */);

console.log ('Armstrong Numbers:');

// looping through lowNumber to highNumber
for (let i = lowNumber; i <= highNumber; i++) {

    // converting number to string 
    let numberOfDigits = i.toString().length;

    let sum = 0;

    // create a temporary variable
    let temp = i;

    /* loop through a number to find if 
    a number is an Armstrong number */
    while (temp > 0) {

        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        // removing last digit from the number
        temp = parseInt(temp / 10); // convert float into integer
    }
 
    if (sum == i) {
        console.log(i);
    }
}