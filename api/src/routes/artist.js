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



server.get('/top5', cache, (req, res, next) => {
    const { artist_id } = req.query
    axios.get(`https://api.deezer.com/artist/${artist_id}/top`).then(response => {
        const data = response.data.data.map(el => {
            return {
                id: el.id,
                title: el.title,
                duration: el.duration
            }
        })
        client.setex('top5', 3600, JSON.stringify(data));
        res.send(data)
    }).catch(() => {
        res.sendStatus(404)
    })
})

server.get('/albums', cache, (req, res, next) => {
    const { id } = req.query
    axios.get(`https://api.deezer.com/artist/${id}/albums`).then(response => {
        const data = response.data.data.map(album => {
            return {
                title : album.title,
                id : album.id,
                image : album.cover
            }
        })
        client.setex('albumsArtist', 3600, JSON.stringify(data));
        res.send(data)
    }).catch(() => {
        res.sendStatus(404)
    })
})
 
server.get('/tracks', cache, (req, res, next) => {
    const { id } = req.query;
    axios.get(`https://api.deezer.com/album/${id}`).then(response => {
        const artist= response.data.artist.name;
        const album_id = response.data.id
        const album_name = response.data.title;
        const album_cover= response.data.cover_medium;
        const data = response.data.tracks.data.map(album => {
             return {
                 id: album.id,
                 title: album.title,
                 duration: album.duration
             }
         })
         client.setex('albumTracks', 3600, JSON.stringify({
            album_id: album_id,
            album_name: album_name,
            album_artist: artist,
            album_cover: album_cover,
            tracks: data
        }));
         res.send({
            id: album_id,
            name: album_name,
            artist: artist,
            cover: album_cover,
            tracks: data
        })
    }).catch(() => {
        res.sendStatus(404)
    })
})

module.exports = server;