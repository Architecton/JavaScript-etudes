  //Exercise 2:
  //Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.


const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]

const makeAllCaps = (array) => {
   return new Promise((resolve, reject) => {
     
    let capsArray = array.map(word => {
     
      if(typeof word === 'string'){
        return word.toUpperCase()
      } else {
        reject('Error: Not all items in the array are strings!')
      }
    })
    resolve(capsArray)
  })
}

  
 const sortWords = (array) => {
   return new Promise((resolve, reject) => {
     if(array) {
       array.forEach((el) => {
         if(typeof el !== 'string'){
           reject('Error: Not all items in the array are strings!')
         }
       })
       resolve(array.sort());
     } else {
       reject('Error: Something went wrong with sorting words.') 
     }
 })
} 
  

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch(error => console.log(error))
  
makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch(error => console.log(error))
