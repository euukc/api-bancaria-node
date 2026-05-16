import { Pool } from 'pg'

const pool = new Pool({
    host: 'db-financeiro',
    user: 'forasteirafps',
    password: 'error404',
    database: 'banco_digital',
    port: 5432

});

export default pool;
