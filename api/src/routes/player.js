const server = require("express").Router();
const axios = require('axios');
const redis = require('redis');

const REDIS_PORT = process.env.PORT || 6379;
const client = redis.createClient(REDIS_PORT);

const cache = (req, res, next) => {
    const { key } = req.query;
    client.get('key', (err, data) => {
          if (err) throw 'error';
          if (data !== null) {
                res.send(data);
          } else {
                next();
          }
    });
};


server.get('/', cache, (req, res, next) => {
    const { track_id } = req.query
    axios.get(`https://api.deezer.com/track/${track_id}&output=json`).then(response => {
        const data = {
            id: response.data.id,
            title_short: response.data.title_short,
            artistId: response.data.artist.id,
            artist: response.data.artist.name,
            album: response.data.album.title
        }
        client.setex('playerInfo', 3600, JSON.stringify(data));
        res.send(data)
    }).catch(() => {
        res.sendStatus(404)
    })
})

module.exports = server