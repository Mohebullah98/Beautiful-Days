/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
    let beautifulDays=0;
    for(let a=i;a<=j;a++){
        console.log(reverseNumber(a));
        if(Math.abs((a-reverseNumber(a)))%k===0) beautifulDays+=1;
    }
    return beautifulDays;
}
function reverseNumber(num){
    let result=0;
    while(num>0){
        result*=10;
        result+=num%10;
        num=Math.floor(num/10);
    }
    return result;
}
