function tentukanDeretAritmatika(arr) {
    // you can only write your code here!

var asd = arr [0] - arr[1]

for(var i = 0 ; i<arr.length-1; i++){

if( asd == arr [i] - arr[i+1] ){
    status = true
} else {
    status = false
    break; // begitu statusnya false dia langsung keluar dari loop
    }
  }
  return status
}

// var asd = [] ;
// var result = 0 ;

// for (var i=1;i<arr.length;i++){
// result = arr[i]-arr[i-1]
// asd.push(result)
// result = 0
// }
// return asd
// for (var j=0;j<asd.length;j++){
// if( asd[j]!==asd[j+1]){
//     return false
// }else {
//     return true
// }
// }
// }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 2, 4, 6])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false