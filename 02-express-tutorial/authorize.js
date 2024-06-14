const authorize = (req, res, next) => {
    const { user } = req.query
    if (user === "john") {
        req.user = { name: "john", id: 3 }
        return next()
    }
    res.status(401).send('<h1>UnAuthorized</h1>')
}

module.exports = authorize