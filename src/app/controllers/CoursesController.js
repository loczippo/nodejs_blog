const courseModel = require('../models/courseModel');
const { mongooseToObject } = require('../../until/mongoose');

class CoursesControllers {
    // [GET] /courses/:slug
    show(req, res, next) {
        courseModel
            .findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('./courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('./courses/create');
    }
    // [POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `http://img.youtube.com/vi/${req.body.videoID}/mqdefault.jpg`;
        const course = new courseModel(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        courseModel
            .findById(req.params.id)
            .then((course) =>
                res.render('./courses/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        courseModel
            .updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    // [DELETE] /courses/:id
    delete(req, res, next) {
        courseModel
            .deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}
module.exports = new CoursesControllers();
