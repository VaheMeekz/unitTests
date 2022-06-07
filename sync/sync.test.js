const Lodash = require('./sync')
let _ = new Lodash()
describe("Lodash: ", () => {


    afterAll(()=>{
        _ = new Lodash()
    })
    test("should be defined", () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    })

    test("should be remove false values from array", () => {
        const array = [1, 2, null, 4, false, 6, '', 8, true, 10]
        const result = [1,2,4,6,8,true,10]
        expect(_.compact(array)).toEqual(result)
    })

    test("should NOT contain falsy values",()=>{
        const array = [1, 2, null, 4, false, 6, '', 8, true, 10]
        const result = [1,2,4,6,8,true,10]
        expect(_.compact(array)).not.toContain(null)
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain("")
    })
})

describe("Lodash group by: ",()=>{
    test("should be defined", () => {
        expect(_.groupBy).toBeDefined()
        expect(_.groupBy).not.toBeUndefined()
    })

    test("should by array items by Math.floor",()=>{
        // const array = [2.2,2.4,4.2,3.1]
        // const result = {
        //     2:[2.2,2.4],
        //     4:[4.2],
        //     3:[3.1]
        // }
        const array = ["one","two","three"]
        const result = {
            5:["three"],
            3:["one","two"]
        }
        expect(_.groupBy(array,'length')).toEqual(result)
    })
})