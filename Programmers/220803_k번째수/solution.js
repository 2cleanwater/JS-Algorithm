function kthNumber(array,commands){
  let tempArray = [...array];
  let splitArray = tempArray.splice(commands[0]-1,commands[1]-commands[0]+1).sort((a,b)=>a-b);
  return splitArray[commands[2]-1];
}

function solution(array, commands) {
  var answer = [];
  
  for(let i =0;i<commands.length;i++){
      let temp = kthNumber(array,commands[i]);
      answer.push(temp);
  }
  return answer;
}
// 15분