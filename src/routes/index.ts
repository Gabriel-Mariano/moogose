import express from 'express';
import user from '../models/User';

const routes = express.Router();

routes.post('/create', async (req,res)=> {
    const { name, email, password } = req.body;

    const result = await user.create({
        name,
        email,
        password
    });

    result.save();

    res.status(201).json({
        message:'Usuário criado com sucesso',
        data:result
    })
})

export default routes;