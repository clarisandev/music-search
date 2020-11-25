const server = require("express").Router();
const axios = require('axios');
const redis = require('redis');
var qs = require('qs');

const REDIS_PORT = process.env.PORT || 6379;
const client = redis.createClient(REDIS_PORT);

const cache = (req, res, next) => {
    const { key } = req.query;
    const keyString = qs.stringify(key)
    client.get(keyString, (err, data) => {
          if (err) throw 'error';
          if (data !== null) {
                res.send(data);
          } else {
                next();
          }
    });
};


server.get('/', cache, (req, res, next) => {
    const { search } = req.query
    axios.get(`https://api.deezer.com/search?q=${search}&index=0&limit=10&output=json`)
    .then(response => {
        const data = response.data.data.map(res  => {
            return {
                id: res.id,
                title_short: res.title_short,
                artist: res.artist.name,
                album: res.album.title,
                image: res.album.cover_medium
            }
        })
        client.set('search', JSON.stringify(data), function(err, reply) {
            console.log(reply);
          });
        res.send(data)
    }).catch(() => {
        res.sendStatus(404)
    })
})

module.exports = server;
