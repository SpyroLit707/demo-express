const express=require("express")
const app=express()
app.use(express.json())
let products=[]
app.get("/products",(req,res)=>
{
   res.send(products)

})

app.post("/products",(req,res)=>
{
   if(req.body)
   products.push(req.body)
   res.send("<h1>The product is saved succesfully </h1>")

})
app.put("/products",(req,res)=>
{
   res.send("<h1>The product is updated succesfully</h1>")

})
app.delete("/products",(req,res)=>
{
   res.send("<h1>The product is deleted succesfully</h1>")

})
app.listen(3800,()=>console.log("express server is running on 3800"))