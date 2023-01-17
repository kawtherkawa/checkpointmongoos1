// 1 require epress
const express=require("express")
// 2 instance of express
const app= express()
//4 require dotenv config
require("dotenv").config()
//8 middleware bodyparser (la methode post)
app.use(express.json())
//3 create port 
const PORT=process.env.PORT
// 6 connect base 
connectDB=require("./config/connectDB")
connectDB();

/*app.use((req,res)=>{
    res.send("helooo c kqw==")
})*/

//7 create router
app.use("/api/contact",require("./routes/contact"))
//5 create server
/*app.listen(PORT,error=>{
    error?console.log('Failed to connect') 
    :  console.log(`Server is running on port ${PORT} `)
})*/

app.use("/api/user",require("./routes/user"))
app.listen(PORT , error => {
    error ? console.error(`Fail To connect , ${error} `) 
  : console.log(`LocalServer is running on port ${PORT}` ) 
})