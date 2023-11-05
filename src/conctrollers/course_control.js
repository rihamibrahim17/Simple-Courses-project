let {courses} = require("../Data/courses")

const getAllCourses =(req,res)=>{
    res.json(courses)

}

const getCourse = (req,res)=>{
    //console.log(req.params)
    const courseId = req.params.courseid
    const course = courses.find((course)=> course.id ==courseId)
    if(!course){
        return res.status(404).send("there is no id like this")
    }
    res.json(course)
}

const creatNewCourse =(req,res)=>{
    console.log(req.body)
    
    courses.push({id:courses.length+1,...req.body})
    if(!req.body.name){
        res.status(400).send("no more data")
    }
    if(!req.body.price){
        res.status(400).send("no more data")

    }
    res.json(courses)
}

const deleteCourse = (req,res)=>{
    const courseId = req.params.id
    //const course = courses.find((course)=>course.id == courseId)
    courses = courses.filter((course)=>course.id != courseId)
    res.json(courses)

}

const updateCourse = (req,res)=>{
    const courseId = req.params.id
    let course = courses.find((course)=>course.id==courseId)

    course = {...course , ...req.body}
    res.status(200).json(course)
}

module.exports={
    getAllCourses,
    getCourse,
    creatNewCourse,
    deleteCourse,
    updateCourse
}