const newRouter = require('./newsRouter');
const coursesRouter = require('./coursesRouter');
const indexRouter = require('./indexRouter');
const meRouter = require('./meRouter');
function router(app) {
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/news', newRouter);
    app.use('/', indexRouter);
}
module.exports = router;
