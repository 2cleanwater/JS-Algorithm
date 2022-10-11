function solution(name){
  let answer = 0; //정답
  let len = name.length;
  let nameChar = new Array(len);
  let minShift = len-1; //커서 이동
  for(let i=0; i<name.length;i++){
      nameChar[i] = name[i].charCodeAt();
  } //문자열 아스키코드로 변환
  
  for(let i=0;i<nameChar.length;i++){
      if(nameChar[i]<78) {
          answer+=nameChar[i]-65;
      }
      else {
          answer+=25-(nameChar[i]-65)+1;
      }
      let lastA = i+1;
      while(lastA <len && name.charAt(lastA) =='A'){
          lastA++;
      }
      minShift = Math.min(Math.min(minShift, i*2+len-lastA),i+((len-lastA)*2));
  }
  return answer+minShift;
}