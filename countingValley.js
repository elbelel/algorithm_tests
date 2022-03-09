// first attempt
function countingValleys(steps, path) {
    let Up = 0
    let Down = 0
    let valley=0
    
    // Write your code here
    for(let i = 0; i < steps; i++){
            if(path[i] == "U"){
                Up++
            }else{
                Down++
            }
        if(Up == Down ){
             valley++
        }
    }
    
return valley-1
}

//subsequent attempt which passed all tests.

function countingValleys(steps, path) {
    let Up = 0
    let Down = 0
    let valley= 0
    
    // Write your code here
    for(let i = 0; i < steps; i++){
            if(path[i] == "U"){
                Up++
            }else if(path[i] =="D"){
                if(Up==Down){
                    valley++
                }
                Down++
            }
        
    }
return valley
}
