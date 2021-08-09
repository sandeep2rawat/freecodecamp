/**
 * Trie tree implementaion
 * https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-trie-search-tree
*/

var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function () {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function () {
        this.end = true;
    };
    this.isEnd = function () {
        return this.end;
    };
};
var Trie = function () {
    this.root = new Node();

    this.add = (word) => {
        if (word.length === 0) return null;

        (function _add(word, node = this.root) {
            const ch = word[0];
            if (node.keys.hasOwnProperty(ch)) {
                _add(word.slice(1), node = node.keys[ch]);
            } else {
                for (let i = 0; i < word.length; i++) {
                    node.keys[word[i]] = new Node();
                    node = node.keys[word[i]];
                }
                node.setEnd();
            }
        }.bind(this)(word));
    };

    this.isWord = (word) => {
        return (function _isWord(word, node = this.root) {
            const ch = word[0];
            if (!node.keys.hasOwnProperty(ch)) return false;
            node = node.keys[ch];
            if (word.length === 1) return node.isEnd();
            return _isWord(word.slice(1), node = node);
        }.bind(this)(word));
    };

    this.print = () => {
        var words = [];
        (function getWords(node = this.root, traversed = '') {
            for (const [ch, node] of Object.entries(node.keys)) {
                if (node.isEnd()) {
                    words.push(traversed + ch);
                }
                getWords(node, traversed + ch);
            }
        }.bind(this)());
        return words;
    };
};

let tt = new Trie();
tt.add('jump');
tt.add('jumps');
tt.add('jumped');
tt.add('house');
tt.add('mouse');

console.log(tt.print());
