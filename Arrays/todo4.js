// Shuffle
// In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method that will randomize the order of an array’s elements. Let’s create shuffle(arr), to efficiently shuffle a given array’s values. Work in-place, naturally. Do you need to return anything from your function?
Var array = [1,2,3,4,5];

function shuffle(Array);

// Remove Range
// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.

var nums = ([20,30,40,50,60,70]2,4);
var a = nums.indexOf(20,30,40,50,60,70);
var b = nums.indexOf(2,4);

var removednums = nums.splice(a, b-a+1);

console.log(nums);

// Intermediate Sums
// You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].
I do not know


// Double Trouble
// Create a function that changes a given array to list each original element twice, retaining original order. Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false].
var arr = [4,"Ulysses",42,false]
[4,4,"Ulysses","Ulysses",42,42,false,false]
function doubleconvert(arr){
var dub=[];
for(let i=0;i<=arr.length-1;i++){
dub.push(arr[i]);
dub.push(arr[i]);
}
return dub;
}

doubleconvert([4, "Ulysses", 42, false])

// Zip It
// Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].
var arr1 = [1,2];
var arr2 = [10,20,30,40];
var arr3 = arr1.concat(arr2);
// Second: combine the two arrays’ values into the first array, instead of into a new array. Much more fun!
var arr1 = [1,2];
var arr2 = [10,20,30,40];
arr.push.apply(a, b);