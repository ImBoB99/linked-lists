class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  prepend(value) {
    let newNode = new Node(value, this.head);
    this.head = newNode;
  }

  append(value) {
    let currentNode = this.head;
    if (currentNode === null) {
      let newNode = new Node(value);
      this.head = newNode;
    } else {
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      let newNode = new Node(value);
      currentNode.nextNode = newNode;
    }
  }

  size() {
    let currentNode = this.head; // linkedList start node
    let counter = 0;
    while (currentNode !== null) {
      currentNode = currentNode.nextNode;
      counter++;
    }
    return counter;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let currentNode = this.head;
    if (currentNode) {
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
    }
    return currentNode;
  }

  at(index) {
    if (index < 0) return null; // Handle negative indexes

    let currentNode = this.head; // Start at the head

    // Traverse the list with a for loop
    for (let i = 0; i < index && currentNode !== null; i++) {
      currentNode = currentNode.nextNode; // Move to the next node
    }

    return currentNode; // Return the node if found, otherwise null
  }

  pop() {
    if (!this.head) return undefined;

    if (this.head.nextNode === null) {
      this.head = null;
      return this.head;
    }

    let currentNode = this.head;
    let previous = null;

    while (currentNode.nextNode !== null) {
      previous = currentNode;
      currentNode = currentNode.nextNode;
    }

    previous.nextNode = null; // remove the last node
    return this.head;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true
      } else if (currentNode.nextNode === null) {
        return false
      } else {
        currentNode = currentNode.nextNode;
      }
    }
  }

  find(value) {
    let currentNode = this.head;
    let counter = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return counter;
      } else if (currentNode.nextNode === null) {
        return "Node with this value not found"
      } else {
        currentNode = currentNode.nextNode;
        counter++
      }
    }
  }

  toString() {
    let currentNode = this.head;
    let result = "";

    while (currentNode !== null) {
      result += `( ${currentNode.value} ) -> `
      currentNode = currentNode.nextNode;
      if (currentNode === null) {
        result += `( null )`
      }
    }
    return result;
  }

  insertAt(value, index) {
    if (index === 0) {
      // Inserting at the head
      let newNode = new Node(value, this.head);
      this.head = newNode;
      return;
    }

    let previousNode = this.at(index - 1);
    if (!previousNode || !previousNode.nextNode) {
      throw new Error("Index out of bounds");
    }

    let newNode = new Node(value, previousNode.nextNode);
    previousNode.nextNode = newNode;

  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    let previousNode = this.at(index - 1);
    let currentNode = this.at(index);

    if (!previousNode || !previousNode.nextNode) {
      throw new Error("Index out of bounds");
    }

    previousNode.nextNode = currentNode.nextNode;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

// example uses class syntax
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// console.log(`List size: ${list.size()}`);
// console.log(list.getHead());
// console.log(list.getTail());
// console.log(list.at(1));
// console.log(list.pop());
// console.log(list.contains(5));
// console.log(list.find(3));
// console.log(list.removeAt(5))
console.log(`List size: ${list.size()}`);

console.log(list.toString())
