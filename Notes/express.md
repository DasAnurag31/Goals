---------------------------------------------------------------
router.get('/', (req, res) => {
    res.status(200);
    res.send("This is the Get request for goals api")
    res.json({ message: 'This is a json message' })
})

=> The .send() is displayed as it is above and the .json() is ignored as only one of them can be the response 
----------------------------------------------------------------
