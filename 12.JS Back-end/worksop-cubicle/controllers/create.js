module.exports = {
    create(req, res) {
        const cube = {
            name: req.query.name || '',
            description: req.query.description || '',
            imageUrl: req.query.imageUrl || '',
            difficulty: req.query.difficulty || ''
        };

        const ctx = {
            title: 'Create cube',
            cube
        }

        res.render('create', ctx);
    },
    async post(req, res) {
        let cube = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            difficulty: Number(req.body.difficulty)
        };


        try {
            if (!req.body.name || !req.body.description || !req.body.imageUrl || !Number(req.body.difficulty)) {
                throw new Error('All fields are required!');
            }

            await req.storage.create(cube);
            res.redirect('/');
        } catch (err) {

            const ctx = {
                title: 'Create Cube',
                cube
            };
            
            if (err.name == 'ValidationError') {
                ctx.error = err.message;
            }

            res.render('create', ctx);
        }
    }
};