class MinHeap {
    constructor() {
        this.heap = [null]
    }
    swap(a, b) {
        [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ]
    }
    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
        
        while (parentIndex !== 0 && this.heap[parentIndex] > value) {
            this.swap(parentIndex, currentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }
    pop() {
        const minValue = this.heap[1];
        
        if(this.heap.length <= 2) {
            this.heap = [ null ];
        } else {
            this.heap[1] = this.heap.pop();
        }
        
        let currentIndex = 1;
        let leftIndex = currentIndex * 2;
        let rightIndex = currentIndex * 2 + 1;
        
        if (!this.heap[leftIndex]) return minValue;
        if (!this.heap[rightIndex]) {
            if (this.heap[leftIndex] < this.heap[currentIndex]) {
                this.swap(leftIndex, currentIndex);
            }
            
            return minValue;
        }
        
        while (this.heap[leftIndex] < this.heap[currentIndex] || this.heap[rightIndex] < this.heap[currentIndex]) {
            const minIndex = this.heap[leftIndex] > this.heap[rightIndex] ? rightIndex : leftIndex;
            this.swap(minIndex, currentIndex);
            
            currentIndex = minIndex;
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }
        
        return minValue;
    }
}

function solution(scoville, K) {
    let count = 0;
    const heap = new MinHeap();
    
    for (const food of scoville) {
        heap.push(food);
    }
    
    while (heap.heap[1] < K) {
        if (heap.heap.length === 2 && heap.heap[1] < K) {
            count = -1;
            break;
        } else {
            const minFood = heap.pop();
            const secondMinFood = heap.pop();
            
            const newFood = minFood + secondMinFood * 2;
            
            heap.push(newFood);
            count++;
        }
    }
    
    return count;
}