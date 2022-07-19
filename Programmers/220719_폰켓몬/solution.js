function solution(nums) {
  let answer = 0;
  let arr = new Map();
  for(let i=0;i<nums.length; i++){
      if(!arr.has(nums[i])){
          arr.set(nums[i],1);
      }
  }
  arr.size>nums.length/2? answer=nums.length/2:answer=arr.size;
  return answer;
}