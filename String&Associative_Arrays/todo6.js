// Zip Arrays into Map
// Associative arrays are sometimes called maps because a key (string) maps to a value. Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}.
function zipArrays(arr1, arr2){
    var obj = {};
    for (var i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = arr2[i];
    }
    return obj;
  }


// Invert Hash
// Associative arrays are also called hashes (we’ll learn why later). Build invertHash(assocArr) to convert hash keys to values, and values to keys. 

// Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"}, return object {"Zaphod": "name", "high":"charm", "dicey": "morals"}.

function invertHash(assocArr){
    for(key in assocArr){
        assocArr[assocArr[key]] = key;
        delete assocArr[key];
    }
    return assocArr;
  }
  var arr = {"name": "Zaphod", "charm": "high", "morals": "dicey"};
  console.log(arr);
  console.log(invertHash(arr));

// Number of Values (without .Length)
// Without using the .length property that is present on all arrays, determine and return the number of values in the given array. If we were to do this on a numerical array, we might check to see whether the element at a certain numerical index was undefined. Unfortunately, we can’t do that here because the keys don’t have any sort of predictable order or first value.

// So, for object { band: "Travis Shredd & the Good Ol’ Homeboys", style: "Country/Metal/Rap", album: "668: The Neighbor of the Beast" }, you should return the value 3, because there are three keys in this object: band, style, and album.

function arrayCounter(array) {
    if(typeof(array) == "object"){
        return array.length;
    }
    else
      return 0;
        }  