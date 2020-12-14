import {Pool} from 'pg';
import config from '../config';

const pool = new Pool({
    user: config.stage.user,
    host: config.stage.host,
    database: config.stage.database,
    port: config.stage.port
});



pool.connect(function (err) {
    if (err) throw err;
    else console.log('db!!!')
});

export default pool;
