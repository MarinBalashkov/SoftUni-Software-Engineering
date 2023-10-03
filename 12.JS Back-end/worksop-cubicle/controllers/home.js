module.exports = {
    async home(req, res) {
        const ctx = {
            title: 'Home Page',
            cubes: await req.storage.getAll(), 
        }
        console.log(req.storage);
        res.render('index', ctx);
    }
};