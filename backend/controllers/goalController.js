// @desc    getGoals
// @route   GET:    /api/goals
// @access  private
const getGoals = (req, res) => {
    res.status(200);
    res.json({ message: "This is the message of the get request" })
}

// @desc    newGoals
// @route   POST:   /api/newgoals
// @access  private
const newGoals = (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Error: Text field Empty")
    }
    res.status(200);
    res.json({ message: "This is the message of the create request" })
}

// @desc    updateGoals
// @route   PUT:   /api/newgoals/:goalID
// @access  private
const updateGoals = (req, res) => {
    res.status(200);
    res.json({ message: "This is the message of the update request" })
}

// @desc    deleteGoals
// @route   DELETE:   /api/newgoals/:goalID
// @access  private
const deleteGoals = (req, res) => {
    res.status(200);
    res.json({ message: "This is the message of the delete request" })
}

module.exports = { getGoals, newGoals, updateGoals, deleteGoals }