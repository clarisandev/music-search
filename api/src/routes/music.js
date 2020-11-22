const server = require("express").Router();
const axios = require('axios');

server.get('/', (req, res, next) => {
    const { search } = req.query
    axios.get(`https://api.deezer.com/search?q=${search}&index=0&limit=2&output=json`)
    .then(response => {
        const data = response.data.data.map(res  => {
            return {
                id: res.id,
                title: res.title,
                artist: res.artist.name,
                album: res.album.title,
                image: res.album.cover_small
            }
        })
        res.send(data)
    }).catch(() => {
        res.sendStatus(404)
    })
})

module.exports = server;
