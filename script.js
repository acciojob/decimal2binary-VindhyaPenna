function decimalToBinary(num) {
  let ans = "";
	while(num>1){
		ans+=Math.floor(num%2);
		num = num/2;
	}
	if(num==1)
		ans+=1;
    ans= ans.split("").reverse().join("");
    // console.log(ans);
	return ans;
}

decimalToBinary(33);
window.decimalToBinary = decimalToBinary;
