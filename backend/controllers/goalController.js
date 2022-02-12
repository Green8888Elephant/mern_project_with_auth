const asyncHandler = require('express-async-handler')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'Get goals'})
})

// @desc Set goals
// @route POST /api/goals
// @access Private
// We need async, because when we use DataBase we should load all changes all the time
const setGoals = asyncHandler( async (req, res) => {
    if (!req.body.text) {
        // res.status(400).json({message: 'Please add a text field'})
        //Below with express error handler
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Set goal'})
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
// We need async, because when we use DataBase we should load all changes all the time
const updateGoals = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc Delete goals
// @route DELETE /api/goals
// @access Private
// We need async, because when we use DataBase we should load all changes all the time and use Promises?
const deleteGoals = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Delete  goal ${req.params.id}`})
})


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}