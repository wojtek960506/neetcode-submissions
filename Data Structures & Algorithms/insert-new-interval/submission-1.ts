class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals: number[][], newInterval: number[]): number[][] {

        const [newIntervalStart, newIntervalEnd] = newInterval;

        
        // we initially set start and end indices to be rigth after the end of array in case
        // of not founding space for it between existing intervals
        let startIndex: number = intervals.length;
        let isStartOverlapping: boolean = false;

        let endIndex: number = intervals.length;
        let isEndOverlapping: boolean = false;

        let prevIntervalEnd: number = -Infinity;

        for (let i = 0; i < intervals.length ; i++) {

            const [curIntervalStart, curIntervalEnd] = intervals[i];

            // start of new interval is between previous and this interval without overlapping
            if (prevIntervalEnd < newIntervalStart && newIntervalStart < curIntervalStart) {
                startIndex = i;
                isStartOverlapping = false;
            }

            // nd of new interval is between previous and this interval without overlapping
            if (prevIntervalEnd < newIntervalEnd && newIntervalEnd < curIntervalStart) {
                endIndex = i;
                isStartOverlapping = false;
            }

            // start of new interval is within current interval
            if (curIntervalStart <= newIntervalStart && newIntervalStart <= curIntervalEnd) {
                startIndex = i;
                isStartOverlapping = true;
            }

            // end of new interval is within current interval
            if (curIntervalStart <= newIntervalEnd && newIntervalEnd <= curIntervalEnd) {
                endIndex = i;
                isEndOverlapping = true;
            }



            // in the end of the loop we need to set previous interval's end
            prevIntervalEnd = curIntervalEnd;
        }

        // so now we need to insert interval in the found place

        // maybe first I will start by pushing everything to a new array
        const newArr: number[][] = [];

        let prevIntervalStart = -Infinity;
        prevIntervalEnd = -Infinity;

        let isOngoingInterval = false;
        let ongoingIntervalStart: number | undefined = undefined;

        let wasNewIntervalMerged = false;

        for (let i = 0; i < intervals.length; i++) {

            

            const [curIntervalStart, curIntervalEnd] = intervals[i];
            
            if (wasNewIntervalMerged) {
                newArr.push([curIntervalStart, curIntervalEnd]);
                continue;
            }

            if (!isOngoingInterval) {
                if (curIntervalEnd < newIntervalStart) {
                    newArr.push([curIntervalStart, curIntervalEnd]);
                    continue;
                }
                
                if (newIntervalStart < curIntervalStart) {
                    ongoingIntervalStart = newIntervalStart;
                    isOngoingInterval = true;
                }

                if (curIntervalStart <= newIntervalStart && newIntervalStart <= curIntervalEnd) {
                    ongoingIntervalStart = curIntervalStart;
                    isOngoingInterval = true;
                }

                


                // // when newIntervalStart is bigger then end of current interval
                // // it will be handled later and we just push current interval to new array
                // newArr.push([curIntervalStart, curIntervalEnd]);
                // continue;
            } 
            
            
            

            

            if (isOngoingInterval) {
                if (newIntervalEnd < curIntervalStart) {
                    newArr.push([ongoingIntervalStart, newIntervalEnd]);
                    isOngoingInterval = false;
                    wasNewIntervalMerged = true;
                    
                    newArr.push([curIntervalStart, curIntervalEnd]);
                    continue;
                }

                if (newIntervalEnd <= curIntervalEnd) {
                    newArr.push([ongoingIntervalStart, curIntervalEnd]);
                    isOngoingInterval = false;
                    wasNewIntervalMerged = true;

                    continue;
                }

                // when we have ongoing interval building and new interval end is bigger
                // than current interval end then we just "absorb" current interval
                

            }            
        }

        if (!wasNewIntervalMerged) {
            if (ongoingIntervalStart === undefined) {
                newArr.push([newIntervalStart, newIntervalEnd]);
            } else {
                newArr.push([ongoingIntervalStart, newIntervalEnd]);
            }
        }
        


        // console.log('')
        // console.log('startIndex', startIndex)
        // console.log('isStartOverlapping', isStartOverlapping);

        // console.log('endIndex', endIndex);
        // console.log('isEndOverlapping', isEndOverlapping);


        return newArr;
    }
}
