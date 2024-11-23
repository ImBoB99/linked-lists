class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  prepend(value) {
    let newNode = new Node(value, this.head);
    this.head = newNode;
  }

  append(value) {
    let lastNode = this.head;
    if (lastNode === null) {
      let newNode = new Node(value);
      lastNode = newNode;
    } else {
      while (lastNode.nextNode !== null) {
        lastNode = lastNode.nextNode;
      }
      let newNode = new Node(value);
      lastNode.nextNode = newNode;
    }
  }

  size() {
    let node = this.head; // linkedList start node
    let counter = 0;
    while (node !== null) {
      node = node.nextNode;
      counter++;
    }
    return counter;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let node = this.head;
    if (node) {
      while (node.nextNode) {
        node = node.nextNode;
      }
    }
    return node;
  }

  at(index) {
    if (index < 0) return null; // Handle negative indexes

    let node = this.head; // Start at the head

    // Traverse the list with a for loop
    for (let i = 0; i < index && node !== null; i++) {
      node = node.nextNode; // Move to the next node
    }

    return node; // Return the node if found, otherwise null
  }

  pop() {
    if (!this.head) return undefined;

    if (this.head.nextNode === null) {
      this.head = null;
      return this.head;
    }

    let current = this.head;
    let previous = null;

    while (current.nextNode !== null) {
      previous = current;
      current = current.nextNode;
    }

    previous.nextNode = null; // remove the last node
    return this.head;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

let list = new LinkedList();
list.prepend(1);
list.append(2);
list.append(3);
list.append(4);
console.log(`List size: ${list.size()}`);
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(0));
console.log(list.pop());
console.log(`List size: ${list.size()}`);

let node = list.head;
while (node !== null) {
  console.log(node.value); // Output: 5, 10, 20
  node = node.nextNode;
}
