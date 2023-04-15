let input = prompt("Enter a string");
let n = input.length;
let count=true;
let ans = '';
for(let i=0;i<n;i++){
	let currentCharaceter = input.charAt(i);
    count=true;
    for(let j=0;j<n;j++){
        if(i==j)
        continue;
        else if(currentCharaceter == input.charAt(j))
        count = false;
    }

    if(count){
        ans+=currentCharaceter;
        break;
    }
}
alert(ans);