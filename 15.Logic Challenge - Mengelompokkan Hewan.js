function groupAnimals(animals) {
    // you can only write your code here!
 var result =[]

 for(var i=0;i<animals.length;i++){
    for(var j=i+1;j<animals.length;j++){
        if(animals[j] < animals[i]){
            var temp = animals[j];
            animals [j] = animals [i];
            animals [i] = temp;
        }
    }
}
var temp2 = []
for (var k=0;k<animals.length-1;k++){
        temp2 += animals[k]+','
    if(animals[k][0] !== animals[k+1][0]){
        result.push(temp2)
        temp2= ''
    }
}
result.push(temp2)
return result
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]