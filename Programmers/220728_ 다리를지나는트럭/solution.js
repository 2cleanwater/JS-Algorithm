function solution(bridge_length, weight, truck_weights) {
  //     let bridge_weight = 0;
  //     let onBridge = [];
  //     let time = 0;
      
  //     while(truck_weights[0]){
  //         bridge_weight = onBridge.reduce((a,b)=>a+b,0);
  //         if(bridge_weight+truck_weights[0]<=weight&&onBridge.length+1<=bridge_length){
  //             onBridge.push((truck_weights.shift()));
  //             time++;
  //             console.log("예")
  //         }
  //         else {
  //             time+=bridge_length-onBridge.length;
  //             if(onBridge[0]>=truck_weights[0]){
  //                 time++;
  //                 onBridge.shift();
  //                 onBridge.push((truck_weights.shift()));
  //                 console.log("헤이")
  //             }
  //             else {
  //                 onBridge.shift();
  //                 time++;
  //                 console.log("야이")
  //             }
  //         }
  //         console.log("다리 위 트럭" + onBridge);
  //         console.log("다리 준비 트럭" + truck_weights);
  //         console.log("시간" + time);
  //     }
  //     time+=bridge_length;
  //     return time;
      let onBridge = new Array(bridge_length).fill(0);
      let time = 0;
      while(onBridge.length){
          onBridge.shift();
          time++;
          if(truck_weights.length){
              let bridge_weight = onBridge.reduce((a,b)=>a+b,0);
              if(bridge_weight+truck_weights[0]<=weight){
                  onBridge.push((truck_weights.shift()));
              } else {
                  onBridge.push(0);
              }
          }
      }
      return time
  }
  //1시간 45분