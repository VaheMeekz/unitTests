const Lodash = require('./sync')

describe("Lodash: ", () => {

    const _ = new Lodash()


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