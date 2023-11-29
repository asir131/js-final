function reqquiredRate(curRun,reqRun,remainOver){
    let run=reqRun-curRun
    let result = run/remainOver;
    return result
}

console.log("Required run rate = ",reqquiredRate(100,200,20));