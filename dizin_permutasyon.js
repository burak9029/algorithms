
//permutations([1, 33, 5]);
/*
abi array permutasyonunu şu şekilde gerçekleştiğini görüyorum düşünüyorum: eğer diyor array 2 veya daha az elemanlı olursa
iki eleman sayısını 2 eleman olarak varsay ve arrayın kendisi ve arr 2. elemanı ve ilk elemanını array olarak koymaya devam et diyor vee array aşağıdaki işlemlerden sonra
reduce yani sadeleştir diyor diye anladım başkanım. acc nedir anlamadım ancak fonksiyon içinde tanımlanan değişken gibi geldi. ama enson concat kısmında iki farklı erray 
ancak aynı türdeki dataları birleştirdiğini biliyorum ancak burada en son permutasyon da ne yapmak istediğini anlamadım.

*/
const permutations = arr => {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
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