class Array {
  constructor(){
    this.data = [];
  }
  get(index) {
    if (!this.data[index]) return "Array Is Empty";
    return this.data[index];
  }
  push(item) {
    let length = this.data.length;
    this.data[length] = item;
    return this.data;
  }
  pop() {
    if (!this.data[0]) return "Array Is Empty";
    let lastItem = this.data.length-1
    this.data.splice(lastItem,1);
    return this.data;
  }
  removeItem(item){
    if (!this.data[0]) return "Array Is Empty"
    for (let i=0; i< this.data.length; i++) {
      if (this.data[i] === item){
        this.data.splice(i, 1);
        return this.data;
      }
    }
    return "No Item Found";
  }
  shift(){
    this.data.splice(0, 1);
    return this.data;
  }
  unshift(item){
    let index = 1;
    for (let i = 0; i< this.data.length; i++) {
      index += i
      let temp = this.data[i];
      //this.data[index] = temp
      console.log(this.data[index])
      //console.log(temp)

      //this.data[index] = this.data[i]
      //console.log(index);
      //console.log(this.data[index])
    }
    console.log(this.data); 
    // this.data.splice(0,0,item)
    // return this.data;
  }
}

let newArray = new Array()
newArray.get(0)
newArray.push(1)
newArray.push(2)
newArray.push(3)
//newArray.pop();
newArray.push(4)
newArray.pop();
newArray.push(5)
newArray.removeItem(1)
newArray.get(0)
newArray.shift()
newArray.unshift(1)