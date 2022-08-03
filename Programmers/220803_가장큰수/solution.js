function solution(numbers) {
  var answer = numbers.map(n=>n+"").sort((a,b)=>(b+a)-(a+b)).join('')
  return answer[0]==='0'?'0':answer;
}
//20분