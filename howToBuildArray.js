// let's build an array
// array class

class MyArray {
  constructor() {
    this.length = 0; // how many items array has
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++; // increment to keep count of the length
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const lastItem = this.data[index];
    this.shiftItems(index);
    return lastItem;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]; // shifting items to the left O(n)
    }
    delete this.data[this.length-1] // delete the last Item we never touched
    this.length--;
    
  }
}

const newArray = new MyArray();
console.log(newArray);
newArray.push('hi');
newArray.push('you');
newArray.push('!');
console.log(newArray);
// newArray.pop();
// newArray.pop();
newArray.delete()
console.log(newArray);