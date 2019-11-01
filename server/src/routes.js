module.exports = (app) => {
    app.post('/login',(req,res) =>{
    res.send({
        message: `Hello ${req.body.email}! You are logged in :)`
    })
})
}
