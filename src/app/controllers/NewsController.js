class NewsControllers {
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('news page 1');
    }
}
module.exports = new NewsControllers();
