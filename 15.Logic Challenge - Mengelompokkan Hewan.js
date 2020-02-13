function groupAnimals(animals) {
    // you can only write your code here!
 var arr1=[]
 var arr2=[]

 for(var i=0;i<animals.length;i++){
    for(var j=i+1;j<animals.length;j++){
        if(animals[j] < animals[i]){
            var temp = animals[j];
            animals [j] = animals [i];
            animals [i] = temp;
        }
    }
}
arr1.push(animals[0])
// console.log (animals[0])
for(var j=0;j<animals.length-1;j++){
    if(animals[j][0]===animals[j+1][0]){
        arr1.push(animals[j+1])
    } else if (animals [j][0]!==animals[j+1][0]){
        arr2.push(arr1)
        arr1=[]
        arr1.push(animals[j+1])
    } 
}
arr2.push(arr1)

return arr2
}



  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]