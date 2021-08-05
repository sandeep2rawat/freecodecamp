/** 
 * https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-circular-queue
*/

class CircularQueue {
    constructor(size) {
  
      this.queue = [];
      this.read = 0;
      this.write = 0;
      this.max = size - 1;
  
      while (size > 0) {
        this.queue.push(null);
        size--;
      }
    }
  
    print() {
      return this.queue;
    }
  
    enqueue(item) {
      if (this.queue[this.write] !== null) return null;
      this.queue[this.write++] = item;
      this.write = this.write % (this.max + 1);
      return item;
    }
  
    dequeue() {
      let item = this.queue[this.read];
      if (item === null) return item;
      this.queue[this.read++] = null;
      this.read = this.read % (this.max + 1);  
      return item;
    }
  }
