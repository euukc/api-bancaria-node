// Valida as condições de negócio antes de tocar no banco


import * as UserModel from '../models/userModel';


export async function buscarPerfilUsuario(id: number){
    const usuario = await UserModel.getUserById(id);

    
    if (!usuario){
        throw new Error ('Cliente não cadastrado ainda!');
    }

    return usuario;
}


export async function executeDeposit(id: number, amount: number){
    
    if (amount <= 0){
        throw new Error('O valor do deposito deve ser maior que zero')
    }

    const newBalance = await UserModel.updateBalance(id, amount)

    if (newBalance === null) {
        throw new Error("Usuário não encontrado para realizar o depósito.");
    }

    //retorna o saldo atualizado
    return newBalance;
}