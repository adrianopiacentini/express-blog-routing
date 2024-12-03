const express = require("express")
const router = express.Router()
const postsList = require("../data/posts.js")

router.get('/', (req, res) => {
    res.json (postsList)
})
// index

router.get('/:id', (req, res) =>{
    const postId = req.params.id
    res.json(`Mostra il post con ID numero ${postId}`)
})
//show

router.post('/', (req, res) => {
    res.json('Crea un nuovo post')
})
//create

router.put('/:id', (req, res) => {
    const postId = req.params.id
    res.json (`Modifica l'intero contenuto del post con ID numero ${postId}`)
})
//update

router.delete('/:id', (req, res) => {
    const postId = req.params.id 
    res.json (`Elimina il post con ID numero ${postId}`)
})
//destroy 

module.exports = router