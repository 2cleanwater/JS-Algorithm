function solution(n, lost, reserve) {
  let realLost = lost.sort((a,b)=>a-b).filter((a)=>!reserve.includes(a));
  let realReserve = reserve.sort((a,b)=>a-b).filter((a)=>!lost.includes(a));
  let answer = n-realLost.length;
  realLost.forEach((a) => {
      if(realReserve.length===0) return;
      if(realReserve.includes(a-1)){
          realReserve = realReserve.filter((b)=>b!=a-1);
          answer++;
      }
      else if(realReserve.includes(a+1)){
          realReserve = realReserve.filter((b)=>b!=a+1);
          answer++;
      }
  })
  return answer;
}