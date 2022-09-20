// reference type object
// non primitive types created by programmer

console.log([] === []); // false
console.log({ value: 10 } === { value: 10 }); // false
let obj1 = { value: 10 }; // in box1 same address
let obj2 = obj1; // in box1 same address
let obj3 = { value: 10 }; // in box2 new address
obj1.value = 15; // setting the value of obj1
obj2.value = 10; // setting the value of obj1
obj3.value = 15; // setting the value of obj3
console.log(obj1, obj2, obj3);

// context vs scope
// scope is created inside function curly brackets

// context tells us there we are within an object
console.log(this); // return empty object
// what is to the left of dot notation we should be inside the object. if we inside
function a() {
  console.log(this);
}
// a() // return the object of the environment

const obj4 = {
  a: function () {
    console.log(this);
  },
};
obj4.a();

// instantiation

// class is something we want to make a copy
class Player {
  // constructor runs first and creates name and type
  constructor(name, type) {
    console.log('player '+ this);
    this.name = name; //
    this.type = type;
  }
  // create a method
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this)
    }
    play() {
        console.log(`Weeeeee I'm a ${this.type}`)
    }
}


const wizard1 = new Wizard('Shelly', 'Healer')
const wizard2 = new Wizard('Shawn', 'Wizard')

wizard1.introduce()
wizard1.play()
wizard2.introduce()
wizard2.play()

