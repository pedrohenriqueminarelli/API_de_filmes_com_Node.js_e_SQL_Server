import filmes from '../models/Filme.js'

class FilmeController{
    static async buscarTodos(req,res){
        try{
            const TodosOsFilmes = await filmes.buscarTodos();
            res.status(200).json(TodosOsFilmes);
        }catch(erro){
            res.status(500).json({message:`${erro} - Falha na requisição`});
        }
    }
    static async inserirFilme(req, res){
            try{
                const {titulo, categoria_id, diretor } = req.body;
                if(!titulo || !categoria_id || !diretor){
                    return res.status(400).json({message:"Título, categoria e diretor precisam ser preenchidos!"});
                }
                await filmes.inserirFilme(req.body);
                res.status(201).json({message:"Filme inserido com sucesso!"});
            }catch(erro){
                res.status(500).json({message:`${erro} - Falha na requisição!`});
            }
    } 
    static async pegarFilmePorId(req, res){
        try{
            const ID = req.params.id;
            const filme = await filmes.pegarFilmePorId(ID);
            if(!filme){
                return res.status(404).json({message:"Filme não encontrado!"});
            }
            res.status(200).json(filme);
        }catch(erro){
            res.status(500).json({message:`${erro} - Falha na requisição!`});  
        }
    }
    static async deletarFilmePorId(req, res){
        try{ 
            const apagado = await filmes.deletarFilmePorId(req.params.id);
            if(apagado === 0){
                return res.status(404).json({message:"Filme não encontrado!"});
            }
            res.status(200).json({message:"Filme apagado com sucesso!"});
        }catch(erro){
            res.status(500).json({message:`${erro} - Falha na requisição!`});
        }
    }
    static async atualizarDadosDoFilme(req, res){
        try{
            const {titulo, categoria_id, diretor} = req.body;
            if(!titulo || !categoria_id || !diretor){
                return res.status(400).json({message:"Os dados de título, categoria e diretor são obrigatórios!"})
            }
            const atualizados = await filmes.atualizarDadosDoFilme(req.body, req.params.id);
            if(atualizados === 0 ){
                return res.status(404).json({message:"Filme não encontrado!"})
            }
            res.status(200).json({message:"Dados atualizados com sucesso!"});
        }catch(erro){
            res.status(500).json({message:`${erro} - Falha na requisição!`});
        }
    }
}

export default FilmeController;