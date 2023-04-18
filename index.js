const express = require('express')
const app = express()
const { createPost, getAllPosts } = require('./posts')
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.listen(3000, () => {
    console.log('Servidor conectado')
})

app.get('/posts', async (req, res) => {
    const result = await getAllPosts()
    res.json(result)
})


app.post('/posts', async (req, res) => {
    const { titulo, url, descripcion } = req.body
    await createPost(titulo, url, descripcion)
    res.json()
})