function fibo(n){
  let num = 0;
  for(let i=1;i<=n;i++){
      num+=i;
  }
  return num;
}
  
function solution(n) {
  let count = 0;
  let i = 2;
  for (let i =2; fibo(i-1)<n;i++){
      if((n-fibo(i-1))%i===0) {
          count++;
      }
  }
  return count+1;
}