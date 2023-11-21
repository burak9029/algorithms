const array = [3, 8, 12, 6, 10, 2];
// aranan sayının dizinin içerisinde olması elemanın  var olup olmadığını tespit için kullanılır.
function checkForN(arr, n) {
    for(let i = 0; i < array.length; i++) {
        if (n === array[i]) {
            return `${true} ${n} exists at index ${i}`;
        }
    }

  return `${false} ${n} does not exist in the given array.`;
}

checkForN(array, 4);