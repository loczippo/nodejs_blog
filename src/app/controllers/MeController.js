const courseModel = require('../models/courseModel');
const { mutipleMongooseToObject } = require('../../until/mongoose');

class MeControllers {
    // [GET] /me/stored/courses
    storeCourses(req, res, next) {
        courseModel
            .find({})
            .then((courses) =>
                res.render('./me/stored-course', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}
module.exports = new MeControllers();
