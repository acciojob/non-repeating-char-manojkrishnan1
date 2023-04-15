let input = prompt("Enter a string");
let n = input.length;
let count=1;
let ans = '';
for(let i=0;i<n-1;i++){
	let currentCharaceter = input.charAt(i);
    count = 1;
    while(currentCharaceter==input.charAt(i+1)){
        count++;
        i++;
    }
    if(count==1){
        ans+=currentCharaceter;
    }
}
if(ans.length>0)
alert(ans);
else
alert(input.charAt(n-1));