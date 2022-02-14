const express = require('express')
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController')
const {protect} = require('../middleware/authMiddleware')

router.get('/',protect, getGoals)
router.post('/',protect, setGoal)

//Same as above
// router.route('/').get(getGoals).post(setGoal)


router.put('/:id',protect, updateGoal)
router.delete('/:id',protect, deleteGoal)

//Same as above
// router.route('/:id').delete(updateGoal).post(updateGoal)
module.exports = router