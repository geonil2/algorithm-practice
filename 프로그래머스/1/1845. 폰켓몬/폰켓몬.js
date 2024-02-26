function solution(nums) {
    const halfNumsLength = nums.length / 2
    const setArrayLength = [...new Set(nums)].length
    
    return halfNumsLength <= setArrayLength ? halfNumsLength : setArrayLength ;
}