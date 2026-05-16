import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import request from 'supertest';
import app from '../app';
import pool from '../config/db';

jest.mock('../config/db', () => ({
    __esModule: true,
    default: {
        query: jest.fn()
    }
}));

describe('Fluxo de Depósito com Mocks', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('deve realizar um depósito com sucesso', async () => {
        // O mock simula o banco devolvendo a linha com a estrutura real da tabela
        (pool.query as any).mockResolvedValueOnce({
            rows: [{ id: 1, name: 'Forasteira', balance: 1000.00 }],
            command: '',
            rowCount: 1,
            oid: 0,
            fields: []
        });

        const response = await request(app)
            .post('/user/1/deposit') 
            .send({
                amount: 100.00 
            });

        expect(response.status).toBe(200);
        expect(response.body.newBalance).toBe(1000.00); 
        expect(pool.query).toHaveBeenCalledTimes(1);
    });

    it('deve retornar erro 400 porque barra valor negativo', async () => {
        const response = await request(app)
            .post('/user/1/deposit') 
            .send({
                amount: -50.00 
            });

        expect(response.status).toBe(400);
        expect(pool.query).toHaveBeenCalledTimes(0); 
    });
});