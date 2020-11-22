const { Router } = require('express')
const music = require('./music.js');
const router = Router()

router.use('/music', music);

module.exports = router