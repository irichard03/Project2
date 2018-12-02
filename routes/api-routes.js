module.exports = function (router) {

    // For anything else, render the html page
    router.use(function (req, res) {
        res.sendFile(path.join(__dirname, "../../client/build/index.html"));
    });
}