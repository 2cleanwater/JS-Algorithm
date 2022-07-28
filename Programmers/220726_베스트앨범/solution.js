function solution(genres, plays) {
    // const map = new Map();
    // let answer = [];
    // for(let i = 0; i<genres.length;i++){
    //     if(map.has(genres[i])){
    //         map.set(genres[i],map.get(genres[i])+plays[i]);
    //     }
    //     else map.set(genres[i],plays[i]);
    // }
    // let genDes = [...map].sort((a,b) => b[1]-a[1]);
    // let genPlaysIndex1 = new Map();
    // let genPlaysIndex2 = new Map();
    // for(let i = 0; i<genres.length;i++){
    //     if(genres[i]===genDes[0][0]) genPlaysIndex1.set(plays[i],i);
    //     if(genres[i]===genDes[1][0]) genPlaysIndex2.set(plays[i],i);
    // }
    // let genPlaysSort1 = [...genPlaysIndex1].sort((a,b) => b[0]-a[0]);
    // let genPlaysSort2 = [...genPlaysIndex2].sort((a,b) => b[0]-a[0]);
    // let temp = [];
    // let temp2 = [];
    // genPlaysSort1.forEach((songs) => temp.push(songs[1]));
    // genPlaysSort2.forEach((songs) => temp2.push(songs[1]));
    // answer = temp.slice(0,2).concat(temp2.slice(0,2));
    // return answer;
    
    const genreMap = new Map();
    let answer = [];
    for(let i = 0; i<genres.length;i++){
        if(genreMap.has(genres[i])){
            genreMap.set(genres[i],genreMap.get(genres[i])+plays[i]);
        }
        else genreMap.set(genres[i],plays[i]);
    }
    let genDes = [...genreMap].sort((a,b) => b[1]-a[1]);
    
    let songsMap = genres.map((g,i) => ({
        genre:g,
        index:i,
        playcnt:plays[i]
    }));
    
    genDes.forEach((k,i)=>{
        let thisGenre = [];
        for(let j=0;j<songsMap.length;j++){
            if(k[0]===songsMap[j].genre) thisGenre.push(songsMap[j]);
        }
        thisGenre.sort((a,b)=>b.playcnt-a.playcnt);
        thisGenre.forEach((s,i)=>{
            if(i<2){
                answer.push(s.index);
            }
        })
    })
    return answer;
}