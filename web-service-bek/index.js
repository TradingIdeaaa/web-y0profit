const fastify = require('fastify')({ logger: true });
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

fastify.get('/api/crypto/:symbol', async (request, reply) => {
  const { symbol } = request.params;
  try {
    const res = await pool.query('SELECT price FROM prices WHERE symbol = $1', [symbol]);
    if (res.rows.length === 0) {
      return reply.code(404).send({ error: 'Symbol not found' });
    }
    return { symbol, price: res.rows[0].price };
  } catch (err) {
    reply.code(500).send({ error: 'Database error' });
  }
});

const start = async () => {
  try {
    await fastify.listen({ port: 8000, host: '0.0.0.0' });
    console.log('Server running on http://localhost:8000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();