function solution(n, lost, reserve) {
    let result = 0;
    const students = {};
    
    for (i = 1; i <= n; i++) {
        students[i] = 1;
    }
    
    lost.forEach(student => students[student] = students[student] -1);
    reserve.forEach(student => students[student] = students[student] + 1);
    
    for (i = 1; i <= n; i++) {
        if (students[i] === 0) {
            if (students[i - 1] === 2) {
                students[i - 1] = students[i - 1] - 1;
                students[i] = students[i] + 1;    
            } else if (students[i + 1] === 2) {
                students[i + 1] = students[i + 1] - 1;
                students[i] = students[i] + 1;    
            }
        }
    }

    for (const student in students) {
        students[student] >= 1 && result++;
    }
    
    return result
}