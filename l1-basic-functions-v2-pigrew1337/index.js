//function getSquare(num) {
    //const g = num ** 2;
  //  return g;
//}
export const getSquare = (num) => num ** 2;

//function isEven(num) {
  //  const result = num % 2 === 0;
    //return result;
//}

export const isEven = (num) => (num % 2 === 0);



//function castNumber() {

//}

//function checkType(value) {
   // const j = typeof(value);
  //  return j;
//}

export const checkType = (value) => typeof (value);

//const glas = ['e', 'E', 'y', 'Y', 'u', 'U', 'i', 'I', 'o', 'O', 'a', 'A'];

//function countVowels(text) {
//    let y = 0;
 ////   for (let i = 0; i < text.length; i += 1) {
 ///     if (_.includes(glas, text[i])) {
    //    y += 1;
    //  }
   // }
    //return y;
//};

//const result = countVowels(Hexlet);
//console.log(result);

const glas = ['e', 'E', 'y', 'Y', 'u', 'U', 'i', 'I', 'o', 'O', 'a', 'A'];

export const countVowels = (text) => {
    let g = 0;
    for (let i = 0; i < text.length; i += 1) {
      if (_.includes(glas, text[i])) {
        g += 1;
      }
    }
    return g;
  };

const result = countVowels(Hexlet);
console.log(result);