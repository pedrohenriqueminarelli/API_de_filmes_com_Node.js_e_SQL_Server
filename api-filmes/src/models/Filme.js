import conectaBD from '../config/bdConnect.js';
class Filme{
    constructor(titulo, categoria_id, diretor, ano_lancamento, duracao_minutos){
        this.titulo=titulo;
        this.categoria_id=categoria_id;
        this.diretor=diretor;
        this.ano_lancamento=ano_lancamento;
        this.duracao_minutos=duracao_minutos;
    }

    static async buscarTodos(){
        try{
            const conexao = await conectaBD();
            const result = await conexao.query("SELECT f.id, f.titulo , f.categoria_id, f.diretor, f.ano_lancamento, f.duracao_minutos, c.nome as categoria FROM dbFilmes.filmes as f INNER JOIN dbFilmes.categorias as c ON f.categoria_id = c.id")
            return result.recordset;
        }catch(erro){
            throw new Error(`Erro na consulta ao BD - ${erro}`);
        }
    }
    static async inserirFilme(NovoFilme){
        try{
            const conexao = await conectaBD();
            const result = await conexao.query`INSERT INTO dbfilmes.filmes (titulo, categoria_id, diretor, ano_lancamento, duracao_minutos) VALUES (${NovoFilme.titulo}, ${NovoFilme.categoria_id}, ${NovoFilme.diretor}, ${NovoFilme.ano_lancamento}, ${NovoFilme.duracao_minutos})`;
            return result;
        }catch(erro){
            throw new Error(`Erro na consulta ao BD ${erro}`);
        }
    }
    static async pegarFilmePorId(id){
        try{
            const conexao = await conectaBD();
            const result = await conexao.query`SELECT * FROM dbFilmes.filmes as f where f.id=${id} `
            return result.recordset[0];
        }catch(erro){
            throw new Error(`Erro na consulta ao BD ${erro}`);
        }
    }
    static async deletarFilmePorId(id){
        try{
            const conexao = await conectaBD();
            const result = await conexao.query`DELETE FROM dbFilmes.filmes WHERE id=${id} `
            return result.rowsAffected[0];
        }catch(erro){
            throw new Error(`Erro na consulta ao BD ${erro}`);
        }
    }
    static async atualizarDadosDoFilme(NovosDados,id){
        try{
            const conexao = await conectaBD();
            const result = await conexao.query`UPDATE dbFilmes.Filmes SET titulo=${NovosDados.titulo},
            categoria_id=${NovosDados.categoria_id},
            diretor=${NovosDados.diretor},
            ano_lancamento=${NovosDados.ano_lancamento},
            duracao_minutos=${NovosDados.duracao_minutos} WHERE ID=${id}`
            return result.rowsAffected[0]
        }catch(erro){
            throw new Error(`Erro na consulta ao BD - ${erro}`);
        }
    }
}

export default Filme;