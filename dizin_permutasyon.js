
//permutations([1, 33, 5]);
/*


*/
const permutations = arr => {
  //dizin eleman sayısı 2 den düşük olduğunda yeni dizin arr , arrayın 1. ve 2. elemanı oluşturur.
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
   //
    return arr.reduce(
      (acc, item, i) =>
        acc.concat(
          permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
            item,
            ...val,
          ])
        ),
      []
    );
  };


  console.log(permutations([1, 33, 5]))