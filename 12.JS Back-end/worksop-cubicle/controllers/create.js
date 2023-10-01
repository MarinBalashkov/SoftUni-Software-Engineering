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
        let cube = {};

        try {
            cube = {
                name: req.body.name,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                difficulty: Number(req.body.difficulty)
            };


            if (!req.body.name || !req.body.description || !req.body.imageUrl || !Number(req.body.difficulty)) {
                throw new Error('All fields are required!');
            }


            await req.storage.create(cube);
            res.redirect('/');
        } catch (err) {
            console.log(err.message);
            cube[`select${cube.difficulty}`] = true;

            const ctx = {
                title: 'Create Cube',
                cube
            };

            res.render('create', ctx);
        }
    }
};