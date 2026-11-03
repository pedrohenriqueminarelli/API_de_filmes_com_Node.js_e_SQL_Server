import conectaBD from "../config/bdConnect.js";
class Categoria{
    constructor(nome){
        this.nome= nome;
    }
    static async buscarTodas(){
        try{
            const conexao = await conectaBD();
            const result = await conexao.query("SELECT * FROM dbFilmes.categorias")
            return result.recordset;
        }catch(erro){
            throw new Error(`Erro ao conectar ao BD ${erro}`);
        }
    }

    static async inserirCategoria(categoria){
        try{
            const conexao= await conectaBD();
            const result= await conexao.query`INSERT INTO dbFilmes.categorias (nome) VALUES(${categoria.nome})`
            return result.rowsAffected[0];
        }catch(erro){
            throw new Error(`Erro ao conectar ao BD ${erro}`);
        }
    }
}
export default Categoria;