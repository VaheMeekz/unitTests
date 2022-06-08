const Async = require("./async")


describe("Async echo: ", () => {
    test("should returned value", async () => {
        const response = await Async.echo("data")
        expect(response).toBe('data')
    })

    test("should returned value", async () => {
        return Async.echo("data").then(data => {
            expect(data).toBe('data')
        })
    })

    test("should returned value", async () => {
        return Async.echo().catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
    })
})