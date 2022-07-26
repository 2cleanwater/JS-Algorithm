function solution(participant, completion) {
  // let comPeople = [];
  // for(let i = 0; i<participant.length; i++){
  //     if(completion.includes(participant[i])){
  //         if(comPeople.includes(participant[i])) return participant[i];
  //         else comPeople.push(participant[i]);
  //     }
  //     else return participant[i];
  // }
  
  participant.sort();
  completion.sort();
  for(let i = 0; i<participant.length; i++){
      if(participant[i]!==completion[i]) return participant[i];
  }
}