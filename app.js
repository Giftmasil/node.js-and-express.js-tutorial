const {createReadStream} = require("fs")

// highWaterMark is the amount of data that can be stored in the buffer before it is processed
const stream = createReadStream("./node.js first lessons/content/big.txt", {highWaterMark: 90000})

stream.on("data", (result) => {
    console.log(result)
})

stream.on("error", (err) => {
    console.log(err)
})
