function targetTerdekat(arr) {
    // you can only write your code here!
    var start = 0
    var end = 0
    
    for (var i=0;i<arr.length;i++){
        if (arr[i]=='o'){
            start = i
       }else if (arr[i]=='x'){
           end = i
           break;
       }
       }
    if(start==end){
        for (var i=0;i<arr.length;i++){
            if (arr[i]=='x'){
                start = i
           }else if (arr[i]=='o'){
               end = i
               break;
           }
           }
    }
var selisih = end-start
var hasil = 0
if (selisih < 0){
    hasil = 0
} else if (selisih == 0){
    hasil = start-end
} else {
    hasil = end-start
}
return hasil

}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2