---------------------------------------------------------------
router.get('/', (req, res) => {
    res.status(200);
    res.send("This is the Get request for goals api")
    res.json({ message: 'This is a json message' })
})

    => The .send() is displayed as it is above and the .json() is ignored as only one of them can be the response 
----------------------------------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", goals);
app.use(errorHandler)

    => the custom middlewares in use should always be placed below the routes which are being used and others in express above it
-----------------------------------------------------------------
