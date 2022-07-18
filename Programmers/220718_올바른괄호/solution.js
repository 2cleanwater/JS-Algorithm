function solution(s){
  let cnt = 0;
  let stack =[];
  for(let i=0;i<s.length;i++){
      if(s[0]===')') return false;
      if(s[i]==='('){
          stack.push('(');
          cnt++;
      } 
      else {
          stack.pop();
          cnt--;
      }
  }
  if(stack.length>0 || cnt!==0) return false;
  return true;
}