function solution(x, n) {
  var answer = [];
  let k = 0;
  for(let i=1;i<n+1;i++){
      k = x*i;
      answer.push(k);
  }
  return answer;
}