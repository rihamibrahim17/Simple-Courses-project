const express = require("express")
const router = express.Router()
const controller = require("../conctrollers/course_control")

//ge all courses
router.route("/").get( controller.getAllCourses)
.post( controller.creatNewCourse)

//get course
router.get("/:courseid",controller.getCourse)



//update course
router.route("/:id").patch(controller.updateCourse)
.delete( controller.deleteCourse)

module.exports = router
