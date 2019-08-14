// Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!

display() {
    let current = this.head;

    while (current) {
      console.log("value is " + current.value);

      current = current.next;
    }

    return this;
  }
}

const list = new List();


list
  .addFront(23)
  .addFront(99)
  .addFront(34)
  .addFront(79)
  .addFront(9)
  .addFront(-1);

console.log('contains -1', list.contains(-1));
console.log('length is ' + list.length());
list.display();
list.removeFront();
console.log(list.front());

console.log('contains -1', list.contains(-1));
console.log('length is ' + list.length())