function solution(n) {
  let answer =0;
  function queen(board, y){
      if(y===n) answer++;
      else{
          for(let i=1;i<=n;i++){
              board[y+1] = i;
              if(isVaild(board,y+1)) queen(board,y+1);
          }
      }
  }
  
  function isVaild(board,y){
      for(let i=1;i<y; i++){
          if (board[i]===board[y]) return false; // 같은 x축 체크
          if (Math.abs(i-y)===Math.abs(board[i]-board[y])) return false; // 대각선 체크
      }
      return true;
  }
  
  for(let i=1;i<=n;i++){
      let board = Array.from({length:n+1}, ()=>0);
      board[1]=i;
      queen(board, 1);
  }
  
  return answer;
}