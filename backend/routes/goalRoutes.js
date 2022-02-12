const express = require('express')
const router = express.Router()
const {getGoals, setGoals, updateGoals, deleteGoals} = require('../controllers/goalController')

router.get('/', getGoals)
router.post('/', setGoals)

//Same as above
// router.route('/').get(getGoals).post(setGoals)

router.put('/:id', updateGoals)
router.delete('/:id', deleteGoals)

//Same as above
router.route('/:id').delete(updateGoals).post(updateGoals)
module.exports = router