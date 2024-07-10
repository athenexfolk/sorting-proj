import { merge } from "./sorting";

describe('merge', () => {
    it('should be sorted and merge three arrays in simple form', () => {
        const collection_1 = [3,6,9];
        const collection_2 = [8,4,2];
        const collection_3 = [1,5,7];
        const expectedResult = [1,2,3,4,5,6,7,8,9];

        const actualResult = merge(collection_1, collection_2, collection_3);

        expect(actualResult).toEqual(expectedResult);
    });

    it('should be empty array on merge three empty arrays', () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [];
        const expectedResult: number[] = [];

        const actualResult = merge(collection_1, collection_2, collection_3);

        expect(actualResult).toEqual(expectedResult);
    });

    it('should be sorted and merge three arrays with single element in each', () => {
        const collection_1: number[] = [9];
        const collection_2: number[] = [5];
        const collection_3: number[] = [7];
        const expectedResult: number[] = [5,7,9];

        const actualResult = merge(collection_1, collection_2, collection_3);

        expect(actualResult).toEqual(expectedResult);
    });

    it('should be sorted and merge three arrays with differrent length', () => {
        const collection_1: number[] = [2,4];
        const collection_2: number[] = [9,8,7];
        const collection_3: number[] = [5,10,15,20];
        const expectedResult: number[] = [2,4,5,7,8,9,10,15,20];

        const actualResult = merge(collection_1, collection_2, collection_3);

        expect(actualResult).toEqual(expectedResult);
    });

    it('should be sorted and merge three arrays with some negative element', () => {
        const collection_1: number[] = [0,1,2];
        const collection_2: number[] = [-1,-2,-3];
        const collection_3: number[] = [3,4,5];
        const expectedResult: number[] = [-3,-2,-1,0,1,2,3,4,5];

        const actualResult = merge(collection_1, collection_2, collection_3);

        expect(actualResult).toEqual(expectedResult);
    });

    it('should be sorted and merge three arrays with some duplicate element', () => {
        const collection_1: number[] = [0,1,2];
        const collection_2: number[] = [4,3,2];
        const collection_3: number[] = [-4,0,4];
        const expectedResult: number[] = [-4,0,0,1,2,2,3,4,4];

        const actualResult = merge(collection_1, collection_2, collection_3);

        expect(actualResult).toEqual(expectedResult);
    });
})