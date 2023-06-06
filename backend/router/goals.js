const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200);
    res.json({ message: 'This is a json message' })
})
router.post('/', (req, res) => {
    res.status(201);
    res.send("This is the post request for goals api")
})
router.put('/:goalID', (req, res) => {
    res.send("This is the put request for goals api")
})
router.delete('/:goalID', (req, res) => {
    res.send("This is the delete request for goals api")
})

module.exports = router