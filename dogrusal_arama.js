const array = [3, 8, 12, 6, 10, 2];
// aranan sayının dizinin içerisinde olması elemanın  var olup olmadığını tespit için kullanılır.
function checkForN(arr, n) {
    for(let i = 0; i < array.length; i++) {
        if (n === array[i]) {
            return `${true} ${n} exists at index ${i}`;
        }
    }
//arrayın içerisindeki sayının varlığının olup olmadığnı ifade ediyor. checForN fonksiyonunda adı yazılmış arrayın yanına sorgulanacak array elemanı yazılarak var olup olmadığın
//ortaya çıkacatır. varsa doğru olmazsa yanlış sonucu çıkacaktır. alse 4 does not exist in the given array. örnekte olduğu gibi.
  return `${false} ${n} does not exist in the given array.`;
}

console.log(checkForN(array, 4));