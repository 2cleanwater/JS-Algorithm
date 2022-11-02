function solution(progresses, speeds) {
  let dayCnt = 0;
  let workCnt =0;
  let answer = [0];
  while(progresses.length>0){
      while(progresses[0]<100){
          for(let i=0;i<progresses.length;i++){
              progresses[i]+=speeds[i];
          }
      }
      progresses.shift();
      speeds.shift();
      answer[workCnt]++;
      if(progresses[0]<100){
          workCnt++;
          answer[workCnt] = 0;
      }
  }
  return answer
}
//28