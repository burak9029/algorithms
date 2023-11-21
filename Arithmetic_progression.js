/*

burada belirlediğin sırada belirlediğin limite kadar ilk değişken kadar artarak giden bir sistem  bu burada 5 den başlayıp 25 e kadar peyder peyder gitmiş.
*/



const arithmeticProgression  = (n, lim) =>
  Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n );

  console.log(arithmeticProgression(5, 25))