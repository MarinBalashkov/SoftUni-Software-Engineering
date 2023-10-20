module.exports = function (err, req, res, next) {
    console.log(err.message);
    console.log(err.stack);
    res.status(500);
    res.send('Server error!');

}