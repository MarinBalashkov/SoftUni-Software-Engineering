module.exports = {
    async home(req, res) {
        const cubes = await req.storage.getAll(req.query);
        console.log(cubes);
        const ctx = {
            title: 'Home Page',
            cubes,
            search: req.query.search || '',
            from: req.query.from || '',
            to: req.query.to || ''
        };

        res.render('index', ctx);
    }
};