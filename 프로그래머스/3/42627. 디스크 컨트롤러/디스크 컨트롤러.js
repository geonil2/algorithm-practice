class Heap {
    constructor() {
        this.heap = [null]
    }
    size () {
        return this.heap.length - 1;
    }
    swap(a, b) {
        [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ]
    }
    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);

        while (parentIndex !== 0 && this.heap[parentIndex][1] > value[1]) {
            this.swap(parentIndex, currentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }
    pop() {
        const minValue = this.heap[1];
				
        if (this.heap.length <= 2) {
            this.heap = [ null ];
        } else {
            this.heap[1] = this.heap.pop();
        } 

        let currentIndex = 1;
        let leftIndex = currentIndex * 2;
        let rightIndex = currentIndex * 2 + 1;

        if (!this.heap[leftIndex]) return minValue;
        if (!this.heap[rightIndex]) {
            if (this.heap[leftIndex][1] < this.heap[currentIndex][1]) {
                this.swap(leftIndex, currentIndex);
            }
            return minValue;
        }

        
        while(this.heap[leftIndex][1] < this.heap[currentIndex][1] || this.heap[rightIndex][1] < this.heap[currentIndex][1]) {
            const minIndex = this.heap[leftIndex][1] > this.heap[rightIndex][1] ? rightIndex : leftIndex;
            this.swap(minIndex, currentIndex);

            currentIndex = minIndex;
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
            
            if (leftIndex >= this.size()) break; // 이 조건이 없으면 while 문에서 에러발생
        }

        return minValue;
    }
}

function solution(jobs) {
    const count = jobs.length;
    const heap = new Heap(); // waiting queue
    let result = 0; // job이 대기하고 걸린 시간의 합
    let now = 0; // 현재 시간
    let complete = 0; // 현재시간 + 해당 job의 걸린 시간
    
    jobs.sort((a, b) => a[0] - b[0]);
    
    while (jobs.length || heap.size()) {
        while (jobs.length) {
            if (jobs[0][0] === now) {
                const job = jobs.shift();
                heap.push(job);
            } else {
                break;
            }
        }

        if (heap.size() && now >= complete) {
            const job = heap.pop();
            complete = job[1] + now;
            result += complete - job[0];
        }

        now++;
    }

    return Math.floor(result / count);
}