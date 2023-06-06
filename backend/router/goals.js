const express = require('express');
const { getGoals, newGoals, updateGoals, deleteGoals } = require('../controllers/goalController')
const router = express.Router();

router.route('/').get(getGoals).post(newGoals);
router.route('/:id').put(updateGoals).delete(deleteGoals);

module.exports = router