const html = `
<html>

<head>
    <title>My Page - Home Page</title>
    <link rel="stylesheet" href="/static/site.css">
</head>

<body>
    <div>
    <h1>My Page</h1>
    <p>Welcome to My Page!</p>
    <p>Loaded from template</p>
</div>
</body>

</html>`;

module.exports = (req, res) => {
    res.write(html);
    res.end();
};