const express=require("express")
const app=express()

app.get("/",(req,res)=>
{
     res.send('<h1 style="color:purple;text-align:center">Welcome</h1> ')
     
     
})
app.get("/product/:id",(req,res)=>
{
    let proid=req.params.id
    res.send(`<h1>Details of product with id ${proid}</h1>`)
     
     })
     //http://localhost:4500/search?name=redmi&cate=mobile
     app.get("/search",(req,res)=>
     {
         if(req.query.name && req.query.cate)
        
         res.send(`<h1>Details of product with name ${req.query.name} and category ${req.query.cate}</h1>`)
         else
         res.send('<h1> search require both name & category')
          
          })
     
app.listen(4500,()=>console.log("express server is running on 4500"))