const express = require("express")
const app = express()

app.get("/", (req, res) => {
    console.log("user hit the resource")
    res.status(200).send("<h1>Home Page</h1>")
})

app.get("/about", (req, res) => {
    res.status(200).send("<h1>About Page</h1>")
})

app.all("*", (req, res) => {
    res.status(404).send(`<h1>Error, cannot get "${req.url}" page</h1>`)
})

app.listen(5000, () => {
    console.log("server is listening on port 5000...")
})

// app.get -> read data
// app.post -> insert data
// app.put -> update data
// app.delete -> delete data
// app.all -> works with all of them if response can't be found
// app.use -> used for middleware
// app.listen -> watch the port