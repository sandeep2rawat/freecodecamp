/**
 * Doubly Linked list implementation
 * Challege start: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-doubly-linked-list
*/

var Node = function (data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};
var DoublyLinkedList = function () {
    this.head = null;
    this.tail = null;
    // Only change code below this line

    this.printMe = function () {
        let temp = this.head;
        let txt = 'head:=> '
        while (temp) {
            txt += (temp.data.toString() + ' <=>');
            temp = temp.next;
        }
        txt += ':tail'
        console.log(txt);
    }

    this.add = (element) => {
        const node = new Node(element, this.tail);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    this.remove = (element) => {
        if (!this.head) return null;

        let current = this.head;
        while (current !== this.tail) {
            if (current.data === element) {
                if (current === this.head) {
                    this.head = this.head.next;
                    this.head.prev = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
            }
            current = current.next;
        };
        if (current.data === element) {
            this.tail = current.prev;
            if (!this.tail) {  // only remaining element
                this.head = null;
            } else {
                this.tail.next = null;
            }
        }
    }

    this.reverse = () => {
        let current = this.head;
        while (current) {
            let next = current.next;
            current.next = current.prev;
            current.prev = next;
            current = current.prev;
        }
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    // Only change code above this line
};

let ll = new DoublyLinkedList();
ll.add(4);
ll.add(2);
ll.add(3);
ll.add(2);

ll.remove(4);
ll.remove(3);
ll.remove(2);
ll.remove(6);
ll.printMe()
ll.reverse()
ll.printMe()
