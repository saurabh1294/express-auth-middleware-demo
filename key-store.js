const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const shortid = require('shortid');
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;


module.exports = function (req, res, next) {
    // write file handling logic here
    console.log('generated uniq ID', shortid());
    switch(req.method) {
        case 'GET':
            console.log('GET: /auth endpoint here', req.url);
            
            if (req.url === '/') {
                console.log('I am here too');
                next();
            }

            if (req.url === '/auth') {
                const apiKey = shortid();
                console.log('appending data to file', apiKey+LINE_ENDING, VALID_KEYS_PATH);
                fs.appendFile(VALID_KEYS_PATH, apiKey+LINE_ENDING, function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                    res.write(apiKey);
                });
                next();
            }
            break;
    }
    next();
};

