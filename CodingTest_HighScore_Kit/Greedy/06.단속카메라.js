function solution(routes) {
  let answer = 0;
  
  for(e of routes){
      e.sort((a,b)=>a-b);
  }
  routes.sort((a,b)=>a[1]-b[1]);

  let cameraPoint = Number.MIN_SAFE_INTEGER
  
  for(let i = 0;i<routes.length;i++){
      if(cameraPoint<routes[i][0]){
          answer++;
          cameraPoint = routes[i][1];
      }
  }
  
  
//     for(let i = routes.length-1;i+1>0;i--){
//         console.log('카메라'+cameraPoint);
//         console.log('즈금'+routes[i]);
//         if(routes[i][1]>=cameraPoint&&cameraPoint>routes[i][0]){
//             console.log('사이 카메라 그대로');
//         }
//         else if(routes[i][1]<cameraPoint&&cameraPoint>routes[i][0]){
//             cameraPoint = routes[i][1];

//             console.log('끝이 작아 카메라 옮겨');
//         }
//         else{
//             answer += routes.length-1-i;
//             cameraPoint = routes[routes.length-1][1];
//             console.log('새로운 카메라');
//         }
//         console.log('ㅗ됴됴됴')
//     }

  return answer;
}