class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times: number[][], n: number, k: number): number {

        // We need to find shortest path to each node from starting node
        // and then return the maximum of it because it is the longest time
        // when each node will receive signal.
        // When any of the nodes does not have a shortest path (indicated by -1)
        // then it means that it is unreachable so not every node can receive signal


        // times[i] = (ui, vi, ti)
        // ui - sourceNode
        // vi - targetNode
        // ti - time from sourceNode to targetNode

        // n - number of nodes (tej are numbered in times array from 1 to n)
        // k - number of node from which we are starting

        
        // initially shortest path to every node is set to -1
        const shortestPaths = new Map<number, number>();
        

        for (let i = 1; i <= n; i++) {
            shortestPaths.set(i, -1);
        }

        const timesMap = new Map<number, [number, number, number][]>();
        for (const [sourceNode, targetNode, time] of times) {
            // // just for reference that this is less elegant solution then the one below
            // const arr = timesMap.get(sourceNode) ?? [];
            // arr.push([targetNode, time])
            // timesMap.set(sourceNode, arr);

            if (!timesMap.has(sourceNode)) timesMap.set(sourceNode, [])
            timesMap.get(sourceNode)!.push([sourceNode, targetNode, time]);
        }

        // handle starting element before loop
        const startNodes = timesMap.get(k) ?? [];
        let stack = [...startNodes];
        let head = 0;
        shortestPaths.set(k, 0);
        

        // main loop of bfs
        while (head < stack.length) {

            const [sourceNode, targetNode, time] = stack[head++];

            const shortestSource = shortestPaths.get(sourceNode);
            const possibleNewShortest = shortestSource + time;
            const currentShortestTarget = shortestPaths.get(targetNode);

            if (currentShortestTarget === -1 || currentShortestTarget > possibleNewShortest) {
                
                shortestPaths.set(targetNode, possibleNewShortest);

                // when shortest path was found we revisit the given node by adding its neighbors to the queue
                const neighbors = timesMap.get(targetNode) ?? [];
                stack.push(...neighbors)
            }
        }

        let max = -1;
        for (const val of shortestPaths.values()) {
            // when a shortest path to any of the nodes is -1
            // then it means there is not a single path to a given node
            if (val === -1) return -1;
            if (val > max) max = val;
        }
        
        return  max;
    }
}
