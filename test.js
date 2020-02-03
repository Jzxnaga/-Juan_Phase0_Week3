// var kata="abcdefghi"
// for (var i=0;i<kata.length; i+=3){
//     var kata2=""
//     for(var j=0;j<3;j++){
//     kata2=kata2+kata[j+i]
//     }
//     console.log(kata2)
// }
// HASILNYA ABC DEF GHI

// var str="seemmiii"
// var result=""
// for (var i=0;i<str.length;i++){
//     if(str[i]=="e"){
//     result+="3";
//     else if(str[i]=="i"){
//     result+="1";
//     }else{
// result +=str[i]
// }
// console.log(result)
// }

// var deret = 5;
// var jumlah = 0;
// while(jumlah <= 150) {
//   jumlah += deret;
//   console.log('Jumlah saat ini: ' + jumlah)
// }

// console.log(jumlah);

// var kata="abcdefghi"
// for (var i=0;i<kata.length;i+=3){
// var kata2=""
//     for (var j=0;j<3;j++){
//     kata2=kata2+kata[j+i]
//     }
//     console.log(kata2)
// }


// for (var i=0;i<6;i++){
// console.log(i)
//   }
// for (var i=6;i>0;i--){
// console.log(i)
// }

// var str="abcde"
// var result=""
// for (var i=0;i<str.length;i++){
// {
// result +=str[i]
// }
// console.log(result)
// }

// function xo(asasas){
//   var itungX = 0;
//   var itungO = 0;
//   for (var i=0;i<asasas.lenght;i++){
//     if (asasas[i]=== 'x'){
//       itungX = itungX + 1
//     }else{
//       itungO = itungO + 1
//     }
//   }
//   if (itungX ==  itungO){
//     return false
//   }else {
//     return false
//     }
// }
// console.log(xo('xoxoxo')); // true
// console.log(xo('oxooxo')); // false
// console.log(xo('oxo')); // false
// console.log(xo('xxxooo')); // true
// console.log(xo('xoxooxxo')); // true\

// // ABC DEF with space
// function stackLetter(l) {
//     for (var index = 1; index < l[0].length; index++) {
//         var str = "";
//         for(var j = 0; j < index; j++)
//         {
//             str += l[0][j];
//             if(j % 3 == 0 && j != 0)
//                 str += " ";
//         }
//         console.log(str);
//     }
// }

// I IH IHG 
// var tex= "ABCDEFGHI"
// var tex2=""
// for (var i=tex.length-1;i>=0;i--){
//     tex2+=tex[i]
//     console.log(tex2)
// }

// function generatePyramid() {
//     var totalNumberofRows = 5;
//     var output = '';
//     for (var i = 1; i <= totalNumberofRows; i++) {
//         for (var j = 1; j <= i; j++) {
//             output += j + '  ';
//         }
        
//         output = '';
//     }
// return(output);}


// console.log (generatePyramid());
   

// function pembalikkata(kata){
//     var kata="abcde"
//     var katabalik=""
//     for (var i=0;i<kata.length;i++){
//     katabalik+=kata[i]

// }
// return katabalik
// }
// console.log (pembalikkata('abcde'))



// function count(string){
//     var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//     var splittedstring = string;

//     var count = 0;
//     for (i = 0; i < splittedstring.length; i++) { 
//         var letterPosition = alphabet.indexOf(splittedstring[i])+1;
//         count = count + letterPosition;
//     }
//     return count;
// }

// console.log(count("ab")); // returns 27 in the console

 


// Password //
// function Pass(password){
//     var pass=password
//     var pass2=""

//     for (var i=0;i<pass.length-4;i++){
//     pass2+=pass[i]
//     }
// return pass2 + "####"
// }

// console.log(Pass('akumau'))

// split space //
// var text = "hoi how     are          you";
// var arr = text.split(/\s+/);

// console.log(arr) // will result : ["hoi", "how", "are", "you"]

// console.log(arr[2]) // will result : "are" 



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

// push , gunanya push data ke array yang tadi di kosongin dalam //
// case ini result [] //