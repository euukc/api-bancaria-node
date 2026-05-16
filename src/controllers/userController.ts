// A ponte entre o mundo externo e lógica. Aepnas chama o Service


import { Request, Response } from 'express';
import * as UserService from "../services/userService";

export const getUser = async (req: Request, res: Response) => {
    try {

        const idString = req.params.id;

        const id = Number(idString);

        if (isNaN(id)) {
            return res.status(400).json({ message: "O ID fornecido não é um número válido." });
        }

        const user = await UserService.buscarPerfilUsuario(id);
        console.log("Usuario:", user)
      
        return res.status(200).json(user);
    } catch (error: any) {
        return res.status(404).json({ message: error.message });
    }
};


export const handleDeposit = async (req: Request, res: Response) => {
    try {
        const idString = req.params.id;
        const id = Number(idString);       

        const amountString = req.body.amount;
        const amount = Number(amountString);



        if (isNaN(id)) {
            return res.status(400).json({ message: "O ID fornecido não é um número válido." });
        }

        
        if (isNaN(amount)) {
            return res.status(400).json({ message: "Por favor, insira um valor numérico válido." });
        }

        const newBalance = await UserService.executeDeposit(id, amount);


        return res.status(200).json({ 
            message: "Depósito realizado com sucesso!",
            newBalance: newBalance 
        });

    } catch (error: any) {
      
        return res.status(400).json({ message: error.message });
    }
};