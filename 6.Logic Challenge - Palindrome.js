function angkaPalindrome(num) {
  // var temp = num.toString();
  var temp1 = "";
  var temp= num.toString()
  for (var i = temp.length - 1; i >= 0; i--) {
    temp1 += temp[i];
  }
  // console.log (temp1+"initemp1")
  // temp2 = Number(temp1);
  // console.log(num+"ininum")
  // console.log (temp2+"initemp2")
  // console.log(num)
  // console.log(temp1)
  if (num < 9) {
    return num + 1;
  } else {
    while (num != temp1) {
      



      
      console.log (num , temp1)
      num++
      temp1 = ""
      temp = num.toString()
      for (var i = temp.length - 1; i >= 0; i--) {
        temp1 += temp[i];
      }
    }
  }
  return num
}
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(1800)); // 1001
