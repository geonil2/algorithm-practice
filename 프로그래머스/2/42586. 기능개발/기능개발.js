function solution(progresses, speeds) {
    const workingDays = [];
    
    for (i = 0; i < progresses.length; i++) {
        const workingDay = Math.ceil((100 - progresses[i]) / speeds[i]);
        
        workingDays.push(workingDay);
    }
    
    let deployCount = 1; // 배포 횟수
    let maxDeployDate = workingDays[0]; // 배포 횟수 내 작업 일수 중 가장 큰 값
    let result = []
    
    for (i = 1; i < workingDays.length; i++) {
        const workingDay = workingDays[i];
        
        if (maxDeployDate >= workingDay) {
            deployCount++
        } else {
            result.push(deployCount);
            deployCount = 1;
            maxDeployDate = workingDay;
        }
    }
    
    result.push(deployCount) // 마지막 배포
    
    return result;
}