const express = require('express')
const router = express.Router()
const { UserModel } = require('../db/schema')


// Get User Info
router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find({})
    res.json(users)
  } catch (err) {
    res.send(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
      console.log('route hit' + req.params.id)
    const user = await UserModel.findById(req.params.id)
    res.json(user)
  } catch (err) {
    res.send(err)
  }
})


module.exports = router