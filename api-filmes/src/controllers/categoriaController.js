import categoria from "../models/Categoria.js";

class CategoriaController{

    static async buscarTodas(req,res){
        try{
            const TodasAsCategorias = await categoria.buscarTodas();
            res.status(200).json(TodasAsCategorias);
        }catch(erro){
            res.status(500).json({message:`${erro} - Falha na requisição!`});
        }
    }
        static async inserirCategoria(req, res){
            try{
                const {nome} = req.body;
                if(!nome){
                    return res.status(400).json({message:"O nome da categoria precisa ser preenchido!"})
                }
                await categoria.inserirCategoria(req.body);
                res.status(201).json({message: "Categoria adicionada com sucesso!"});
            }catch(erro){
                res.status(500).json({message: `${erro} - Falha na requisição!`});
            }
        }
}
export default CategoriaController;