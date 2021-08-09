/**
 * From: https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/add-a-new-element-to-a-binary-search-tree
 */

// helper functions
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

function isBinarySearchTree(tree) {
    function checkTree(node) {
        if (!node) return true;

        const left_child = node.left;
        const right_child = node.right
        if (left_child && left_child.value > node.value) return false;
        if (right_child && right_child.value <= node.value) return false;

        return checkTree(node.left) && checkTree(node.right);
    }

    return checkTree(tree.root);

}

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;

    // Add a node to BST.
    this.add = (element) => {
        if (!this.root) {
            this.root = new Node(element);
            return undefined;
        }

        function _add(current) {
            if (current.value === element) return null;  // already exists
            if (current.value > element) {
                if (!current.left) {
                    current.left = new Node(element);
                    return undefined;
                }
                return _add(current.left);
            } else {
                if (!current.right) {
                    current.right = new Node(element);
                    return undefined;
                }
                return _add(current.right);
            }
        }

        return _add(this.root);
    };

    // find minimum value
    this.findMin = (node = this.root) => {
        if (!node) return null;
        return node.left ? this.findMin(node.left) : node.value;
    };

    // find max value
    this.findMax = (node = this.root) => {
        if (!node) return null;
        return node.right ? this.findMax(node.right) : node.value;
    };

    // check whether an element exists or not
    this.isPresent = (element) => {
        let current = this.root;
        while (current) {
            if (element === current.value) return true;
            if (element < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    };

    // find mimimum height of the bst
    this.findMinHeight = () => {
        if (!this.root) return -1;

        function minSubtreeHeight(node) {
            if (node.left == null && node.right == null) return 0;
            let lHeight = node.left ? (1 + minSubtreeHeight(node.left)) : 0;
            let rHeight = node.right ? (1 + minSubtreeHeight(node.right)) : 0;
            return Math.min(lHeight, rHeight);
        }

        return minSubtreeHeight(this.root);
    };

    // find maximum height of the bst
    this.findMaxHeight = () => {
        if (!this.root) return -1;

        function maxSubtreeHeight(node) {
            if (node.left == null && node.right == null) return 0;
            let lHeight = node.left ? 1 + maxSubtreeHeight(node.left) : 0;
            let rHeight = node.right ? 1 + maxSubtreeHeight(node.right) : 0;
            return Math.max(lHeight, rHeight);
        }

        return maxSubtreeHeight(this.root);
    };

    // chec bst is balanced or not
    this.isBalanced = () => {
        return (this.findMaxHeight() - this.findMinHeight()) <= 1;
    };

    // ********* tree traversal *************
    // DFS
    this.inorder = () => {
        if (!this.root) return null;
        let values = [];
        function traverse(node) {
            if (node) {
                traverse(node.left);
                values.push(node.value);
                traverse(node.right);
            }
        }
        traverse(this.root);
        return values;
    };

    this.preorder = () => {
        if (!this.root) return null;
        let values = [];
        function traverse(node) {
            if (node) {
                values.push(node.value);
                traverse(node.left);
                traverse(node.right);
            }
        }
        traverse(this.root);
        return values;
    };

    this.postorder = () => {
        if (!this.root) return null;
        let values = [];
        function traverse(node) {
            if (node) {
                traverse(node.left);
                traverse(node.right);
                values.push(node.value);
            }
        }
        traverse(this.root);
        return values;
    };

    // BFS
    this.levelOrder = () => {
        if (!this.root) return null;
        let nodesToVisit = [this.root];
        let values = [];
        while (nodesToVisit.length > 0) {
            let currentNode = nodesToVisit.shift();
            values.push(currentNode.value);
            if (currentNode.left) nodesToVisit.push(currentNode.left);
            if (currentNode.right) nodesToVisit.push(currentNode.right);
        }
        return values;
    };

    this.reverseLevelOrder = () => {
        if (!this.root) return null;
        let nodesToVisit = [this.root];
        let values = [];
        while (nodesToVisit.length > 0) {
            let currentNode = nodesToVisit.shift();
            values.push(currentNode.value);
            if (currentNode.right) nodesToVisit.push(currentNode.right);
            if (currentNode.left) nodesToVisit.push(currentNode.left);
        }
        return values;
    };

    // remove an element from the bst.
    this.remove = function (value) {
        if (this.root === null) {
            return null;
        }
        var target = null;
        var parent = null;
        // Find the target value and its parent
        (function findValue(node = this.root) {
            if (value == node.value) {
                target = node;
            } else if (value < node.value && node.left !== null) {
                parent = node;
                return findValue(node.left);
            } else if (value < node.value && node.left === null) {
                return null;
            } else if (value > node.value && node.right !== null) {
                parent = node;
                return findValue(node.right);
            } else {
                return null;
            }
        }.bind(this)());
        if (target === null) {
            return null;
        }
        // Count the children of the target to delete
        var children =
            (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
        // Case 1: Target has no children
        if (children === 0) {
            if (target == this.root) {
                this.root = null;
            } else {
                if (parent.left == target) {
                    parent.left = null;
                } else {
                    parent.right = null;
                }
            }
        }
        // Case 2: Target has one child
        else if (children == 1) {
            var newChild = target.left !== null ? target.left : target.right;
            if (parent === null) {
                this.root = newChild;
            } else if (newChild.value < parent.value) {
                parent.left = newChild;
            } else {
                parent.right = newChild;
            }
            target = null;
        }
        // Case 3: Target has two children
        else {
            let min = this.findMin(target.right);
            this.remove(min)
            target.value = min;
        }
    };

    // mirror image (by side)
    this.invert = function (node = this.root) {
        if (node) {
            this.invert(node.left);
            this.invert(node.right);
            let temp = node.left;
            node.left = node.right;
            node.right = temp;
        }
    };
}

let bst = new BinarySearchTree();
bst.add(50);
bst.add(20);
bst.add(30);
bst.add(10);
bst.add(70);
bst.add(60);
bst.add(80);
bst.add(40);
bst.add(5);
bst.add(90);
bst.add(85);
bst.add(35);
bst.add(55);
bst.add(95);
bst.add(58);

bst.remove(95);

console.log(bst.inorder());

// displayTree(bst)
