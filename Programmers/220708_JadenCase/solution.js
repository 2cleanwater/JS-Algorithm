function solution(s) {
  let arr = Array.from({length:s.length-1});
  // s= s.toLowerCase()
  arr = s.split("");
  for(let i=1;i<s.length;i++){
      arr[i]= arr[i].toLowerCase();
      if(isNaN(arr[i]) && arr[i]!=" "){
          if(arr[i-1]===" "){
              arr[i]= arr[i].toUpperCase();
          }
      }
  }
  
  if(isNaN(arr[0])&&arr[0]!=" ") arr[0]= arr[0].toUpperCase();
  
  s = arr.join('');
  return s;
}