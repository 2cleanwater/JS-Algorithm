function solution(people, limit) {
    let rPeople = people.length-1;
    let boat = 0;
    let answer = 0;
    people.sort((a,b)=>b-a);
    
    for(let i=0;i<people.length;i++){
        if(i>rPeople) break;
        boat+=people[i];
        while(boat<=limit){
            for(let i=rPeople;i>0;i--){
                if(boat+people[i]<=limit){
                    boat+=people[i];
                }else {
                    rPeople = i;
                    break;
                }
            }//for
            boat=0;
            answer+=1;
            break;
        }//while
    }//for
    return answer
}//function //43분