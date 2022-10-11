function solution(number, k){
  let numArr = number.split("");
  let answer = [];
  let cnt = 0;
  for(let i=0;i<number.length;i++){
      while(answer.length!=0){
          if(cnt === k) break;
          if(answer[answer.length-1]<number[i]){
              cnt++;
              answer.pop();
          }
          else break;
      }
      answer.push(number[i]);
  }
  answer = answer.join("").substring(0,number.length-k);
  return answer; 
}