const { Router } = require('express');
const player = require('./player.js');
const search = require('./search.js');
const artist = require('./artist.js')
const router = Router()

router.use('/search', search);
router.use('/player', player);
router.use('/artist', artist);

module.exports = router