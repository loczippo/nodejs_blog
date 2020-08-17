const courseModel = require('../models/courseModel');
const { mutipleMongooseToObject } = require('../../until/mongoose');

class IndexControllers {
    index(req, res, next) {
        // courseModel.find({}, function(err, courses) {
        //     if(!err) {
        //         res.json(courses);
        //     }
        //     else {
        //         next(err);
        //     }
        // })

        courseModel
            .find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);

        //res.render('home');
    }
    search(req, res) {
        res.send('search-page');
    }
}
module.exports = new IndexControllers();
