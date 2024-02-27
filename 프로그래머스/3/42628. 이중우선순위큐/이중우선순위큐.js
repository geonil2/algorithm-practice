class Heap {
    constructor() {
        this.heap = []
    }
    
    getMin() {
        return this.heap[0] ? this.heap[0] : null;
    }
    
    getMax() {
        return this.heap[0] ? this.heap[this.heap.length - 1] : null
    }
    
    swap(a, b) {
        [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ]
    }
    
    insert(value) {
        this.heap.push(value);
        
        let currentIndex = this.heap.length - 1;
        let leftIndex = currentIndex - 1;
    
        while (this.heap[leftIndex] > this.heap[currentIndex]) {
            this.swap(leftIndex, currentIndex)
            
            currentIndex = leftIndex
            leftIndex = currentIndex - 1
        }
    }
    
    pop() {
        this.heap.pop();
        
    }
    
    shift() {
        this.heap.shift();
    }
}

function solution(operations) {
    const heap = new Heap();
   
    operations.forEach(operation => {
        if (operation.startsWith("I ")) {
            heap.insert(Number(operation.replace("I ", '')))
        } else if (operation === "D 1") {
            heap.pop();
        } else if (operation === "D -1") {
            heap.shift();
        }
    })
    
    return heap.heap.length === 0 ? [0, 0] : [heap.getMax(), heap.getMin()]
}

