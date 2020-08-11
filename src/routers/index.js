
const newRouter = require('./newsRouter');
const indexRouter = require('./indexRouter');
function router(app) {
    app.use('/news', newRouter);
    app.use('/', indexRouter);
    
}
module.exports = router;