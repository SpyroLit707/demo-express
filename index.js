const express=require("express")
const app=express()

app.get("/",(req,res)=>
{
     res.send('<h1 style="color:purple;text-align:center"> hello </h1> ')
     
     
})
app.get("/about",(req,res)=>
{
     res.send('<h1 style="color:black;text-align:center">About Page </h1> ')
})
app.get("/contact",(req,res)=>
{
     res.send('<h1 style="color:black;text-align:center">Contact </h1> ')
})
app.use((req,res)=>
{
     res.send('<h1 style="color:black;text-align:center">404 page not found</h1> ')
})


app.listen(4500,()=>console.log("express server is running on 4500")
)

