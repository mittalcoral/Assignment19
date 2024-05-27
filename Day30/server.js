let express=require('express')
let app=express()
let fs=require('node:fs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

let posts=fs.readFileSync('post.json', 'utf-8')
posts=JSON.parse(posts)

app.get('/', (req,res)=>{
    res.json(posts)
})

app.post('/post',(req, res)=>{

})


app.delete('/post/:id/:user',(req,res)=>{
let {id}=req.params
let newPosts=posts.filter((value, index)=>value.id!=id)
fs.writeFileSync('post.json', JSON.stringify(newPosts))
res.json({status:'success', msg:'post deleted'})
})

app.put('/post/:id/:user', (req, res)=>{
    let {id}=req.params
    let index=post.filter((v, i)=>id==v.id)
    posts.index.splice(v, 1,'5')
    fs.writeFileSync('post.json', JSON.stringify(newPosts))
    res.json({status:'success', msg:'post updated'})
})

app.listen(3000,'',()=>{
console.log(`This server is using port ${3000} `)
})