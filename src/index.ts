import Koa from 'koa'
import Router from 'koa-router'
import pool from './db/users'
const app = new Koa();
const router = new Router();
const PORT = process.env.PORT || 8080;

app.use(router.routes());

router.get('/', async ctx => {
    await pool.query(`INSERT INTO anime (name, genre, type, episodes, rating, viewers) VALUES ('name', 'genre', 'type', 1, 1, 1)`);

    ctx.body = 'hello docker';
    let query = await pool.query(`SELECT * FROM anime`)
    ctx.body = query.rows[0];
    ctx.status = 200;
});


app.listen(PORT, () => {
    console.log(`Koa started on PORT ${PORT}`);
});

