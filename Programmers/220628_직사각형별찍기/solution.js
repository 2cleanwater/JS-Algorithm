function solution(n,m){
  let answer = "";
  for(let i=0;i<m;i++){
      for(let j=0;j<n;j++){
          answer = answer+"*"            
      }
      answer = answer+"\n" 
  }
  return answer;
  
}

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  console.log(solution(a,b));
});