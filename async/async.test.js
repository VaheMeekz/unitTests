const Async = require("./async")


describe("Async echo: ",()=>{
        test("should returned value",async ()=>{
            const response = await Async.echo("data")
        })
})