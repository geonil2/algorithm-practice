function solution(bridge_length, weight, truck_weights) {
    let count = 0;
    let weights = 0;
    const bridge = Array.from({ length : bridge_length }, () => 0);
    
    count++;
    weights += truck_weights[0];
    bridge.shift();
    bridge.push(truck_weights.shift());
    
    while (weights > 0) {
        count++;
        weights -= bridge.shift();
        
        if (truck_weights.length > 0 && weights + truck_weights[0] <= weight) {
            weights += truck_weights[0];
            bridge.push(truck_weights.shift());
        } else {
            bridge.push(0);
        }
    }
    
    return count;
}