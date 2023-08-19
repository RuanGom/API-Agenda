import { Router } from 'express';
import { listarAgenda, adicionarAgenda, listarFavoritos, listarNomes, apagarLista, listarData, alterarAgenda } from '../repository/agendaRepository.js';

let endpoints = Router();

endpoints.post('/contato', async (req, resp) => {
    let agenda = req.body;
    let dados = await adicionarAgenda(agenda);
    resp.send(dados);
})

endpoints.get('/agenda/contato', async (req, resp) => {
    let dados = await listarAgenda();
    resp.send(dados);
})

endpoints.get('/agenda/contato/favoritos', async (req, resp) => {
    let dados = await listarFavoritos();
    resp.send(dados);
})

endpoints.get('/agenda/contato/nomes', async (req, resp) => {
    let nm = req.query.nm
    let dados = await listarNomes(nm);
    resp.send(dados);
})

endpoints.get('/agenda/contato/data', async (req, resp) => {
    let dt = req.query.dt
    let dados = await listarData(dt);
    resp.send(dados);
})

endpoints.delete('/agenda/apagar', async (req, resp) => {
    let id = req.query.id
    let dados = await apagarLista(id);
    resp.send('Agenda apagada!');
})

endpoints.put('/contato', async (req,resp) =>{
    let id = req.query.id;
    let nm = req.query.nome;

    let dados = await alterarAgenda(nm, id);
    resp.send('Contato Alterado!!');
})

export default endpoints