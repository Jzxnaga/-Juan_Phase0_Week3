function angkaPalindrome(num){
    var temp =''
    var temp1=''
    var temp2=''
    var status = false
    while(status === false){
      if(num<9){
        return num+1
      }else{
        num++
        temp= num.toString()
        for(var i = temp.length-1; i >=0;i--){
          temp1+= temp[i]
        }
        temp2 = Number(temp1)
        if(num===temp2){
          status = true;
          return num
        }else{
          temp1=''
          status = false;
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