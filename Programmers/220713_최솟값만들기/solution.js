function solution(A,B){
  var answer = 0;
  
  A.sort((a,b)=>a-b);
  B.sort((a,b)=>b-a);
  
  answer = A.reduce((acc,n,index)=>{
      return acc+=n*B[index];
  },0);

  return answer;
}