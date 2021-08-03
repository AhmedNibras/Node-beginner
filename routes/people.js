const express = require('express');
const router = express.Router();

let { people } = require('../datas')

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson 
    } = require('../controller/people')

router.get('/', getPeople)

router.post('/', createPerson)


router.post('/postman', createPersonPostman )

router.put('/:id', updatePerson)

router.delete('/:id', deletePerson)

module.exports = router