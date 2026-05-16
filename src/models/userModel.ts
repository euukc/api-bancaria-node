// No MVC, o Model é o único que "fala SQL.


import pool from '../config/db'

export interface User {
    id: number;
    name: string;
    balance: number;
}


export async function getUserById(id: number): Promise<User | null> {
    const result = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);

    if (result.rows.length === 0) {
        return null;
    }

    return result.rows[0];
}

export async function updateBalance(id: number, amount: number): Promise<number | null> {

    const query = 'UPDATE usuarios SET balance = balance + $1 WHERE id = $2 RETURNING balance'  //Os placeholders ($1, $2) são caixas vazias usadas para casar com a ordem dos itens da array na hora de enviar os dados para a execução da query.


    const result = await pool.query(query, [amount, id])

    if (result.rowCount === 0) {
        return null
    }

    return result.rows[0].balance;


}