// function solution(maps) {
//     var answer = Number.MAX_SAFE_INTEGER;
    
    
//     findRoute(0,0,0);
    
//     function findRoute(x,y,count){
//         //현재 있는 장소 체크
//         // if(count>=answer) return;
        
//         let n = maps.length-1;
//         let m = maps[0].length-1;
//         maps[x][y] = 0;
        
//         if(x-1>=0&&maps[x-1][y]!=0) findRoute(x-1,y,count+1);
//         if(x+1<=n&&maps[x+1][y]!=0) findRoute(x+1,y,count+1);
//         if(y-1>=0&&maps[x][y-1]!=0) findRoute(x,y-1,count+1);
//         if(y+1<=m&&maps[x][y+1]!=0) findRoute(x,y+1,count+1);

//         if(x==n&&y==m){
//             answer = Math.min(answer,count+1)
//         }
//         maps[x][y] = 1;
//     }
    
//     return (answer!=Number.MAX_SAFE_INTEGER ? answer : -1);
// }


function solution(maps) {
  let answer = 1;
  let visited = maps;
  let queue = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const n = maps.length;
  const m = maps[0].length;
  
  queue.push([0, 0]);
  visited[0][0] = 0;
  
  while(queue.length > 0) {
      let size = queue.length;
      
      for(let i = 0; i < size; i++) {
          let [x, y] = queue.shift();
          
          for(let j = 0; j < 4; j++) {
              let nx = x + dx[j];
              let ny = y + dy[j];
              
              if(nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
                  if(nx == n - 1 && ny == m - 1) {
                      return ++answer;
                  }
                  queue.push([nx, ny]);
                  visited[nx][ny] = 0;
              }
          }
      }
      answer++;
  }
  
  return -1;
}