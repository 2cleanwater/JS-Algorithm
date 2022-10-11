function solution(n, lost, reserve){
  let pureLost = lost.sort((a,b) => a-b).filter((a)=>!reserve.includes(a));
  let pureReserve = reserve.sort((a,b)=>a-b).filter((a)=>!lost.includes(a));
  let answer = n-pureLost.length;
  pureLost.forEach((a)=>{
      if(pureReserve.length == 0) return;
      if(pureReserve.includes(a-1)){
          pureReserve = pureReserve.filter((b)=>b!=a-1);
          answer++}
      else if(pureReserve.includes(a+1)){
          pureReserve = pureReserve.filter((b)=>b!=a+1);
          answer++}
  });
  return answer;
}
//filter 이용법
//foreach는 함수이기 때문에 break가 아닌 return
//sort를 작은수부터(b-a)로 했기 때문에 reserve체크도 a-1인 것부터 해야 제대로 작동함
