const express = require("express")
const coursesRoute = require("./route/course-route")
const app = express()
port = 4001

app.use(express.json())
app.use("/api/courses" , coursesRoute)



app.listen(port ,()=>{
    console.log("iam listening to port")
})