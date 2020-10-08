const express = require('express')
const json = require('body-parser').json()
const { dogs, cats } = require('../store')

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router
  .get('/', (req, res) => {
    // Return all pets currently up for adoption.

    //service call to get all data
    let pets = Pets.get()
    return res.status(200).send(pets);
  })

router
  .get('api/cats', (req, res) => {

  })

router
  .get('/dogs', (req, res) => {
    res.status(200).send(dogs)
  })

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
})

module.exports = router
