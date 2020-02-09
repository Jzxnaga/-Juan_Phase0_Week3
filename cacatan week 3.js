// SLICE //
// SPLICE //
// JOIN //
// POP //
// PUSH //

var string = "22-11-1994"
var temp = ''
var result = []

for (var i=0;i<string.length;i++){
    if (string[i] !== '-'){
        temp+= string[i]
    } else {
        result.push(temp)
        temp = ''
    }
    // console.log(result)
    // console.log(temp, '<<< ini temp')
}
console.log(temp)
result.push(temp)
console.log(result)

// // push , gunanya push data ke array yang tadi di kosongin dalam //
// // case ini result [] //

// //CONCAT //

// var concat1 = "good"
//     concat2 = "luck"
//     concat3 = "ya"

// console.log(concat1.concat(concat2.concat(concat3)))

// //Char at//

// console.log(concat1.charAt(3)); /// hasilnya "d" 


// //indexOf//
// var text = 'dung dung ces!';
// console.log(text.indexOf('dung'));  // 0
// console.log(text.indexOf('e'));     // 11
// console.log(text.indexOf('u'));     // 1
// console.log(text.indexOf('jreng')); // -1


// //substr//
// var car1 = 'Lykan Hypersport';
// var car2 = car1.substr(6,4);
// console.log(car2); // menngambil karakter ke 6 yaitu H kemudian 4 karakter

//substr//
// var car1 = 'Lykan Hypersport';
// var car2 = car1.substr(6,4);
// console.log(car1.substr(6,3)); // menngambil karakter ke 6 yaitu H kemudian 4 karakter



// // toUpperCase()
// var letter = 'This Letter Is For You';
// var upper  = letter.toUpperCase();
// console.log(upper); // THIS LETTER IS FOR YOU


// // toLowerCase()
// var letter = 'This Letter Is For You';
// var lower  = letter.toLowerCase();
// console.log(upper); // this letter is for you

// //trim
// var username    = ' administrator ';
// var newUsername = username.trim(); // 'newUsername = 'administrator'

// // To String //
// var number = 21;
// console.log(number.toString()); // '21'
// var array = [1,2];
// console.log(array.toString());  // '1,2'


//parseInt dan parseFloat//
// var numberonly  = '89';
// var decimal = '56.7';

// var strInt_1 = parseInt(numberonly);  // strInt_1 = 89
// var strInt_2 = parseInt(decimal); // strInt_2 = 56

// var strReal_1 = parseFloat(numberonly); // strReal_1 = 89
// var strReal_2 = parseFloat(decimal); // strReal_2 = 56.7

// gunanya adalah mengembalikan variable agar menjadi angka

// function buku(arr1,arr2){

// }


// var arr1 = [A,B,C]
// var arr2 = [A,B,C,D,E,E,A]

// console.log(buku[arr1,arr2])

/// Jika ingin hanya muncul A B C D E
/// bikin array baru menggabungkan semuanya sudah di gabungkan pasti ada yang double
/// agar tidak double bikin boolean pada looping kedua yang mengecek true or false
/// jika dicek double true tidak di push jike check false if(!check){ di push}




// function buku(arr1,arr2){

// for (var i=0;i<arr2.length;i++){
//     arr1.push(arr2[i])
// }
// var result = []
// for (var j=0;j<arr1.length;j++){
//     var check = false
//     for(var k=0;k<result.length;k++){
//         if(result[k][0]===arr1[j]){
//             check = true
//             result[k].push(arr1[j])
//         }
//     }
//     if (!check){
//         result.push([arr1[j]])
//         }
// }
// return result
// }

// var arr1 = ['A','B','A','E','C','D','A']
// var arr2 = ['A','B']
// console.log(buku(arr1,arr2))


/// Jika  ingin muncul [[A,A,A],[B,B],[C],[D],[E,E]]
/// Looping alat tulis
/// Bikin variable result
/// FORE kedua itu untuk looping ke samping

// function nilaitertinggi (nilai){


// for(var i=0;i<nilai.length;i++){
//     for(var j=i+1;j<nilai.length;j++){
//         if(nilai[j][1] < nilai[i][1]){
//             var temp = nilai[j];
//             nilai [j] = nilai [i];
//             nilai [i] = temp;
//         }
//     }
// }
// return nilai
// }


// var nilai = [['Yoyok',80],['Judy',100],['Jane',50],['Judith',10]]

// console.log(nilaitertinggi(nilai))

/// sortir by nilai dengan [yoyok],[80]
//// looping ke dua j = i+1
//// untuk menukar sesuatu/// cara swap nya [j][1] > [i][1]
/// var temp = arr [j]
/// arr [j]= arr[i] (harusnya disini + 1 tapi karna J nya sudah I + 1 maka gausa)
/// arr [i] = temp