function angkaPalindrome(num) {
    // you can only write your code here!
    var num = num.toString()
    if(num[0]==num[num.length-1]){
    var num = parseInt(num)
    return (num+1)
}else{
    var num = parseInt(num)
    for( var i = 0; i<1000 ; i++){
        temp = num+i
        var temp = temp.toString()
    if (temp[0]!==temp[temp.length-1]){
        var temp = parseInt(temp)   
    }else{
        var temp = parseInt(temp)
        return (temp)
    }
}
}
}


  




  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  console.log(angkaPalindrome(1005))