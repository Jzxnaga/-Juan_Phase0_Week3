function balikString(text){
    var text2=""

    for(var i=text.length-1;i>=0;i--){
        text2+=text[i]}
return text2
}

console.log(balikString('Hello World!'))