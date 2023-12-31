/* Generates primes up to a given number, using the Sieve of Eratosthenes. */



const primes = num => {
    let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2),
      sqroot = Math.floor(Math.sqrt(num)),
      numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2);
    numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)));
    return arr;
  };

  console.log(primes(10))