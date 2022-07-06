

function solution(n, info) {
  var answer = [];
  let lionPoints = Array.from({length:11}, ()=>0);
  let maxLionPoints = Array.from({length:11}, ()=>0);
  let max = 0;
  
  function winWithLow(info, lion){
      for(let i=11;i=0;i--){
          if(info[i]<lion[i]){
              return true;
          }
      }
      return false;
  }
  function DFS(L, arrow, sum){
      if(L>10){
          if(max<sum) {
              max = sum;
              maxLionPoints = Array.from(lionPoints);
          }else if(max===sum){
              if(winWithLow(maxLionPoints, lionPoints)){
                  max = sum;
                  maxLionPoints = Array.from(lionPoints);
              }
          }
          if(Math.max(...maxLionPoints)===0){
              maxLionPoints = [-1];
          }
          return;
      } 
      else{
          if(arrow+info[11-L]+1>n||arrow===n) {
              lionPoints[11-L] = 0;
              DFS(L+1,arrow, sum);
              //이길때 n발이 넘거나 이미 n발을 모두 쐈을 때 0발 기록
          }
          else{
              lionPoints[11-L] = 0;
              DFS(L+1,arrow, sum); // 안쏜다.
              
              lionPoints[11-L] = info[11-L]+1;
              DFS(L+1,arrow+info[11-L]+1, sum+L);//이긴다.
          }
      }
  }
  DFS(0, 0, 0);
  return lionPoints;
}