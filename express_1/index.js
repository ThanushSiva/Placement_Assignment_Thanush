require("dotenv").config()
const express = require("express")
const router = require("./routes/router")
const app = express()

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use("/", router)

app.listen(process.env.PORT, () => {
  console.log(`Listening in port ${process.env.PORT}`)
})