const {sum,nativeNull} = require("./intro")


describe("Sum: ", () => {
    test('should return sum of two values', ()=>{
        expect(sum(1,3)).toEqual(4)
        expect(sum(1,3)).toBe(4)
    })

    test('should be greater then one of child',()=>{
        let a=5;
        let b=4;
        expect(sum(a,b)).toBeGreaterThan(a)
        expect(sum(a,b)).toBeGreaterThan(b)
        expect(sum(a,b)).toBeGreaterThanOrEqual(a)
        expect(sum(a,b)).toBeGreaterThanOrEqual(b)
        expect(sum(a,b)).toBeLessThan(a*b)
    })

    test("should sum 2 float values correctly",()=>{
        expect(sum(0.1,.2)).toBeCloseTo(0.3)
    })
})

describe("Native null function: ", () => {
    test("should be returned false value",()=>{
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
    })

    test("should be false",()=>{
        expect(nativeNull()).toBeFalsy()
    })
})


