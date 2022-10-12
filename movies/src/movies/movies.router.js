const router = require('express').Router()

// prefijo:  /movies
router.get('/') //? /movies/
router.post('/') //? /movies/

router.get('/:id') //? /movies/:id
router.delete('/:id') //? /movies/:id
router.patch('/:id') //? /movies/:id
router.put('/:id') //? /movies/:id

module.exports = router
