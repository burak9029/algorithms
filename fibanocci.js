// program to generate fibonacci series up to n terms
/* 
her algoritmanın nasıl çalıştığını olayın nasıl gerçekleştiğinin hikayesini yazalım. fibanocchi serisinde şöyle bir durum var. verdiğimiz numaraya kadar bir önceki numara ile toplanıp bulunduğumuz
numaranın sonrasındaki numaraya eşit oluyor.
*/
const number = 100;
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

