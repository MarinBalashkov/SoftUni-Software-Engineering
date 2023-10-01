module.exports = {
    async details(req, res) {
        try {
            const cube =  await req.storage.getById(req.params.id);
            if (cube == undefined) {
                res.redirect('404');
            }

            res.render('details', cube);
        } catch (error) {
            console.error(error.message);
        }
    }
};
