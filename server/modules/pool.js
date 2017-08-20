var pg = require('pg');

var config = {
    database: 'weekend-challenge-4',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis : 4000
};

module.exports=pg.Pool(config);