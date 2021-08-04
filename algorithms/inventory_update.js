/*
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
Update the current existing inventory item quantities (in arr1).
If an item cannot be found, add the new item and quantity into the inventory array.
The returned inventory array should be in alphabetical order by item.

*/

function addItemToInventory(inventory, item_name, item_count) {
    for (var i = 0; i < inventory.length; i++) {
        if (item_name <= inventory[i][1]) break;
    }
    if(i < inventory.length && item_name == inventory[i][1]) {
        inventory[i][0] += item_count;
    } else {
        inventory.splice(i, 0, [item_count, item_name])
    }
}

function updateInventory(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        addItemToInventory(arr1, arr2[i][1], arr2[i][0])
    }
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
console.log(curInv);
