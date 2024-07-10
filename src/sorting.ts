 export function merge(collection_1: number[], collection_2: number[], collection_3: number[]) {    
    let idx1 = 0;
    let idx2 = collection_2.length - 1;
    let idx3 = 0;

    let mergedArr:number[] = [];
    
    while (idx1 < collection_1.length || idx2 >= 0 || idx3 < collection_3.length) {
        let e1 = collection_1[idx1] ??  Number.MAX_VALUE;
        let e2 = collection_2[idx2] ?? Number.MAX_VALUE;
        let e3 = collection_3[idx3] ?? Number.MAX_VALUE;

        if (e1 <= e2 && e1 <= e3) {
            mergedArr.push(e1);
            idx1++;  
        } else if (e2 <= e1 && e2 <= e3) {
            mergedArr.push(e2);
            idx2--;
        } else {
            mergedArr.push(e3);
            idx3++;
        }
    }

    return mergedArr;
}