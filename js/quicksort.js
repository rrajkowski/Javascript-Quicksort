/**
 * User: rrajkowski
 * Date: 10/9/13
 * Time: 9:58 PM
 * Quicksort in Javascript
 */

    // Quick sort
    // array to sort, can be any random numbers
var items = [1, 5, 53, 55, 10, 16, 20, 8, 999];

//swap function
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

//partition function
function partition(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}


function quickSort(items, left, right) {

    var index;

    if (items.length > 1) {

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

    }

    return items;
}

// trim whitespace from string
function trim(str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

//check if number
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


// testing sort function
//var result = quickSort(items, 0, items.length - 1);
//console.log(result);




//takes a input from a string and convert to array
function runQuickSort(){
    var inputStr = trim(document.getElementById("sortMe").value);
    var inputArray = [];
    inputArray = inputStr.split(",");

    //loop through string and convert to numbers, remove NaN
    for (a in inputArray ) {
        var isNum = parseInt(inputArray[a], 10);
            if(isNumber(isNum)){
                inputArray[a] = isNum;
            }else{
                //remove non numbers
                console.log(inputArray[a]);
                inputArray.splice(a, 1);
            }
    }
    console.log(inputArray.length);

    //call quicksort, output list in #outputcontent
    var sorted = quickSort(inputArray, 0, inputArray.length - 1);
    console.log("sorted:"+sorted);
    document.getElementById('outputcontent').innerHTML = sorted;

}

