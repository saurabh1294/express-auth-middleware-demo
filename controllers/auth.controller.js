module.exports = {
    authenticate: function (req, res) {
        res.status(201).send();
    },

    getAll: function (req, res) {
        res.json({data: 'auth endpoint'});
    }
};
