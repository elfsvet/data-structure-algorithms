// reverse a string to array split reverse and join and return
// function to reverse a string
const reverse = (str) => {
  // check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'not valid input';
  } else {
    let arr = str.split('');
    let reversed = [];
    // we need to loop from the back to the front and add to an array
    /*  
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
      */
    //   another way to solve this problem
    arr.map((item) => reversed.unshift(item));
    // use join method or to string method
    // return reversed.toString();
    return reversed.join('');
  }
};

const reverse2 = (str) => {
  // if we using reverse method
  return str.split('').reverse().join('');
};

const reverse3 = (str) => [...str].reverse().join('');

console.log(reverse('Hi my name is Stepan'));
console.log(reverse2('Hi my name is Stepan'));
console.log(reverse3('Hi my name is Stepan'));
let s = 'hello'
console.log(s)
// spread operator will return an array of strings with items in from the string
console.log([...s]);
// you need to talk through the problem to be a great 
