function solution(arr1, arr2) {
  let answer = [];
  let temp = [];
  for(let i = 0;i<arr1.length;i++){
      let arr = arr1[i]
      answer.push([]);
      for(let j = 0;j<arr2[0].length;j++){
          let sum = 0;
          for(let k =0;k<arr2.length;k++){
              sum += arr[k]*arr2[k][j];
          }
          answer[i].push(sum);
      }  
  }
  return answer;
}
