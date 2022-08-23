function solution(name) {
    let answer = 0;
    
    let minMoves = name.length -1;
    
    for (let i = 0; i<name.length; i++) {
        let cNum = name.charCodeAt(i);
        if (cNum<78) answer += cNum-65;
        else answer += 91-cNum;
        
        let index = i+1;
        while(index < name.length && name[index] == 'A') index ++;
        
        minMoves = Math.min(minMoves, (i*2) + name.length - index);
        minMoves = Math.min(minMoves, (name.length - index)*2+i);
    }
    
    return answer + minMoves;
}