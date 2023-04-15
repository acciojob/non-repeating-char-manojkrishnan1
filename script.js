//your JS code here. If required.
let input = prompt("Enter a string");
let n = input.length;
let count=1;
let ans = '';
for(let i=0;i<n;i++){
		let currentCharaceter = input.charAt(i);
	    count=1;
	    for(let j=i+1;j<n;j++){
	        if(currentCharaceter == input.charAt(j))
	        count++;
	    }
	    if(count==1){
	    ans+=currentCharaceter;
	    break;
	}
}
alert(ans);