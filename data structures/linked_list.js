/**
 * Linked List implementations
 * Start from: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-linked-list-class
*/

function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function (element) {
        this.element = element;
        this.next = null;
    };

    this.size = function () {
        return length;
    };

    this.head = function () {
        return head;
    };

    this.add = function (element) {
        var node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            var currentNode = head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        length++;
    };

    this.addAt = function (index, element) {
        if (index < 0 || index > length) return false;

        const node = new Node(element);
        if (index == 0) {
            node.next = head;
            head = node;
        } else {
            let current = head;
            while (i > 1) {
                current = current.next;
                i -= 1;
            }
            node.next = current.next;
            current.next = node;
        }
        length += 1
    }

    this.remove = function (element) {
        var currentNode = head;
        var previousNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        length--;
    };

    this.removeAt = (index) => {
        if (index < 0 || index >= length) return null;

        let current = head;
        let prev = head;
        while (index > 0) {
            prev = current;
            current = current.next;
            index -= 1;
        }

        let element = current.element;
        if (prev == current) {
            head = head.next;
        } else {
            prev.next = current.next;
        }
        length -= 1;
        return element;
    }

    this.isEmpty = () => head === null;

    this.indexOf = (element) => {
        let current = head;
        var index = 0;
        while (current && current.element !== element) {
            index++;
            current = current.next;
        }

        if (current) return index;
        return -1;
    }

    this.elementAt = (index) => {
        let current = head;
        while (current && index > 0) {
            index -= 1;
            current = current.next;
        }
        if (current) return current.element;
        return undefined;
    }

}
