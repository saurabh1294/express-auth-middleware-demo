const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';

module.exports = function (req, res, next) {
    console.log('middleware URL is', req.url);
    let url = req.url;
    
    switch(req.method) {
        case 'POST':
            if (req.url === '/tasks') {
                res.status(200).send('POST route /tasks is protected');
            }
            break;

        case 'GET':
            if (req.url === '/tasks') {
                res.status(200).send('Protected route  GET: /tasks');
            }

            if (req.url === '/tasks/:id') {
                res.status(200).send('Protected route  GET: /tasks/:id');
            }

            if (req.url === '/auth') {
                res.status(200).send('Authentication successful');
            }

            if (req.url === '/') {
                res.status(200).send('Home page');
                next();
            }
            break;

        default:
            console.log('Method not supported');
    }

    next();
};
