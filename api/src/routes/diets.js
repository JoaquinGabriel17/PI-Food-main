const dietsRouter = require('express').Router()
const getAllDiets = require('../controllers/getAllDiets')

dietsRouter.get('/', async(req, res) => {
    try {
        const allDiets = await getAllDiets()

        if(allDiets.error) throw new Error(allDiets.error)

        return res.status(200).json(allDiets)
    } catch (error) {
        return res.status(400).send(error.message)
    }
})



module.exports = dietsRouter