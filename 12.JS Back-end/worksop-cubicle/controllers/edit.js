module.exports = {
    async edit(req, res) {
        const cube = await req.storage.getById(req.params.id);
        cube[`select${cube.difficulty}`] = true;

        if (!cube) {
            res.redirect('404');
        } else {
            const ctx = {
                title: 'Edit Cube',
                cube
            };
            res.render('edit', ctx);
        }
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

            await req.storage.update(req.params.id, cube);
            res.redirect('/');
        } catch (err) {
            console.log(err.message);
            cube[`select${cube.difficulty}`] = true;

            const ctx = {
                title: 'Create Cube',
                cube
            };

            res.render('edit', ctx);
        }
    }
};