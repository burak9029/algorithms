// program to find Armstrong number between intervals
/* 
ARMSTRONG SAYISINDAN ANLADIĞIM KADARIYLA RAKAMLARDAKİ SAYILAR KENDİLERİNCE KENDİ ADEDİNCE KENDİ ARALARINDA ÇARPILIP TOPLANDIKLARINDA YİNE SAYININ AYNISI ÇIKIYORSA 
BUNA ARMSTRONG SAYISI DENİR. JS KODUNDA İSE ÖNCELİK İLE İNTEGER PARSE LAYARAK SONRASINA ÇOK BİR ANLAM VEREMEDİM. .....................
*/
// take an input
const lowNumber = parseInt(1/* prompt('Enter a positive low integer value: ') */);
const highNumber = parseInt(153/* prompt('Enter a positive high integer value: ') */);

console.log ('Armstrong Numbers:');

// "low number" ile "highNumber" arasında döngü oluşturulur.
for (let i = lowNumber; i <= highNumber; i++) {

    //numaralar string olur.
    let numberOfDigits = i.toString().length;

    let sum = 0;

    // geçici bir değişken oluştulur.
    let temp = i;

    /* döngüye sokarak sayısının armstrong sayısı olup olmadığı açığa çıkar. */
    while (temp > 0) {

        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        // sayısının sonundaki numaranın silinmesi
        temp = parseInt(temp / 10); // ondalık sayının normal sayıya yuvarlanması
    }
 
    if (sum == i) {
        console.log(i);
    }
}