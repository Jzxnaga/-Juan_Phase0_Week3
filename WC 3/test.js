
function mineTycoon(mine, steps) {
    var result = []
    var copper = 0
	var silver = 0
	var gold = 0
	var diamond = 0
    var gabung =[]

for (var i=0; i<mine.length;i++){
    for (var j=0; j<mine[i].length;j++)
    gabung.push(mine[i][j])
}

for(var k=0; k<steps;k++){
    if (gabung[k]=="c"){
        copper+=1
    }else if(gabung[k]=='s'){
        silver+=1
    }else if(gabung[k]=='g'){
        gold+=1
    }else if(gabung[k]='d'){
        diamond+=1
    }
}

if(copper!=0){
    result.push([copper, 'copper'])
}
if(diamond!=0){
    result.push([diamond, 'diamond'])
}
if(gold!=0){
    result.push([gold, 'gold'])
}
if(silver!=0){
    result.push([silver, 'silver'])
}

return result
}


var mine1 = [
	['#', 'h', 's', '#', '#', '#', 'g'],
	['u', '#', 'c', '#', 'd', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine1, 10));
// [[1, copper] [1, silver] [1, gold]]

var mine2 = [
	['#', '#', '#', '#', '#', 'w', '#'],
	['r', '#', 'c', '#', 'd', '#', '#'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineTycoon(mine2, 20));
// [[2, copper], [1, diamond]]

var mine3 = [
	['d', 'c', '#', 's', '#', 'w', '#'],
	['r', 'b', 'c', '#', '#', '#', 'g'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#']
];
console.log(mineTycoon(mine3, 94));
// [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]
