// Option 1: As a statically declared enviroment variable
const process = require('node:process');

process.env.NODE_OPTIONS = '--insecure-http-parser';

// Option 2: Statically declared at server/request creation
const http = require('node:http');

http.createServer({
    insecureHTTPParser: true
}, (req, res) => {
    res.end('hello world\n');
});

// Option 3: As a cli parameter
// This is dynamic and thus uncoverable
