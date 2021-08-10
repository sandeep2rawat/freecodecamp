/**
 * Min heap: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/implement-heap-sort-with-a-min-heap
 */

var MinHeap = function () {
    this.heap = [];

    this.parent = (index) => {
        return Math.floor((index - 1) / 2);
    }

    this.children = (index) => {
        return [2 * index + 1, 2 * index + 2];
    }

    this.insert = (element) => {
        let index = this.heap.length;
        this.heap.push(element);

        let parent = this.parent(index);
        while (parent >= 0 && this.heap[index] < this.heap[parent]) {
            this.heap[index] = this.heap[parent];
            this.heap[parent] = element;
            index = parent;
            parent = this.parent(index);
        }
    }

    this.print = () => {
        return this.heap.slice();
    }

    this.isEmpty = () => this.heap.length === 0;

    this.extract = () => {
        if (this.isEmpty()) return null;

        let lastElement = this.heap.pop();
        if (this.isEmpty()) return lastElement;

        let getSmallerChild = function (index) {
            let [lChild, rChild] = this.children(index);
            if (rChild >= this.heap.length) {
                if (lChild >= this.heap.length) return null;
                return lChild;
            }
            return (this.heap[lChild] < this.heap[rChild]) ? lChild : rChild;
        }.bind(this);

        let minElement = this.heap[0];
        this.heap[0] = lastElement;
        let current = 0;
        let smallerChild = getSmallerChild(current);

        while (smallerChild && lastElement > this.heap[smallerChild]) {
            this.heap[current] = this.heap[smallerChild];
            this.heap[smallerChild] = lastElement;
            current = smallerChild;
            smallerChild = getSmallerChild(current);
        }
        return minElement;
    }

    this.sort = () => {
        let sorted = [];
        let min;
        while ((min = this.extract()) !== null) sorted.push(min);
        return sorted;
    }
};

let mh = new MinHeap();
mh.insert(10);
mh.insert(14);
mh.insert(12);
console.log(mh.sort());
