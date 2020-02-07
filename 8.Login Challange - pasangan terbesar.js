function pasanganTerbesar(num) {
//   you can only write your code here!
//   var banding1=[]
//   for (var i = 0 ; i < num.length ; i++){
//     banding1+=num[i]+num[i+1]
//   }
num = num.toString();
var braket = num[0]+num[1]
for (var i=0 ; i < num.length-2; i++){
if (braket < num[i+1]+num[i+2]){
    braket = num[i+1]+num[i+2]
}else{
    braket = braket
}
}
return braket
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

// console.log(pasanganTerbesar([6,2,3,4,5,6]))


// var pasanganterbesar=(13241235)
// console.log(pasanganterbesar[0,1])