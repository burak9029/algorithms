//string = 12;

let findPermutations = (string) => {
    if (!string || typeof string !== "string"){
      return "Please enter a string"
    }
  //girdi tipi string değilse ya da girilen string değilse "please enter a string" uyarısı alırız.
    if (!!string.length && string.length < 2 ){
      return string
    }
  //string olmayanın eleman miktarı ile string olanın eleman miktarı 2 den az ise cevap verilen string olacaktır.
    let permutationsArray = [] 
     
    for (let i = 0; i < string.length; i++){
      let char = string[i]
  //char varyantı string i ye eşit ve index of char i ye eşit olmazsa kodun çalışmasına devam dilir ve 
      if (string.indexOf(char) != i)
      continue
  
      let remainder = string.slice(0, i) + string.slice(i + 1, string.length)
  
      for (let permutation of findPermutations(remainder)){
        permutationsArray.push(char + permutation) }
    }
    return permutationsArray
  }
  
  module.exports = findPermutations