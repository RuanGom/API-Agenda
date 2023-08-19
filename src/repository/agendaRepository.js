import conexao from './connection.js';

export async function listarAgenda(){
    let sql = "select * from tb_agenda;"

    let resp = await conexao.query(sql);
    let dados = resp [0]
    return dados
}

export async function listarFavoritos(){
    let sql = "select * from tb_agenda where bt_favorito = 1;"

    let resp = await conexao.query(sql);
    let dados = resp [0]
    return dados
}

export async function listarNomes(nm){
    let sql = "select * from tb_agenda where nm_contato = ?;"

    let resp = await conexao.query(sql, [nm]);
    let dados = resp [0]
    return dados
}


export async function adicionarAgenda(agenda){
    let sql = "insert into tb_agenda(nm_contato, ds_telefone,ds_email,bt_favorito,dt_cadastro) values (?,?,?,?,?)"

    let resp = await conexao.query(sql, [agenda.ctt,agenda.telefone,agenda.email,agenda.fvt,agenda.cadastro]);
    let [dados] = resp

    agenda.id = dados.inserirID
    return dados;
}

export async function apagarLista(id){
    let sql = "delete from tb_agenda where id_agenda = ?;"

    let resp = await conexao.query(sql, [id]);
    let dados = resp [0]
    return dados
}


export async function listarData(dt1,dt2){
    let sql = "select * from tb_agenda where dt_cadastro between ? and ?;"

    let resp = await conexao.query(sql, [dt1,dt2]);
    let dados = resp [0]
    return dados
}

export async function alterarAgenda(nm,id){
    let sql = 'UPDATE tb_agenda SET nm_contato = ? WHERE id_agenda = ?';
    let resp = await conexao.query(sql, [nm, id]);

    let dados = resp[0];
    return dados;
}
