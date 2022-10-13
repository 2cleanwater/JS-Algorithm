function solution(people, limit) {
  people = people.sort((a,b)=>b-a);
  let answer = 0;
  let endIndex = people.length;

  for(let i=0;i<people.length;i++){
      if(i==endIndex){
          answer++
          return answer;
      } else if(i>endIndex) return answer;
      
      if(people[i]+people[endIndex]>limit){
          answer++;//최대무게인원 한명 보내기
      }
      else{
          endIndex--;
          answer++;//최대,최소 2명 묶어서 보내기
      }
  }
}//function