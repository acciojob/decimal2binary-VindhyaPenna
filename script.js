function decimalToBinary(num) {
  let ans = "";
	while(num>1){
		ans+=Math.floor(num%2);
		num = num/2;
	}
	if(num==1)
		ans+=1;
    ans= reverseString(ans);
    // console.log(ans);
	return ans;
}

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
decimalToBinary(33);
window.decimalToBinary = decimalToBinary;
