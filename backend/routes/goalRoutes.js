const express = require('express')
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController')

router.get('/', getGoals)
router.post('/', setGoal)

//Same as above
// router.route('/').get(getGoals).post(setGoal)

router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)

//Same as above
// router.route('/:id').delete(updateGoal).post(updateGoal)
module.exports = router