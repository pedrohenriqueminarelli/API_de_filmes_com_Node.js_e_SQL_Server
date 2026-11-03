import 'dotenv/config';
import mssql from 'mssql';

const stringSQL = process.env.CONNECTION_STRING;
let pool;
async function conectaBD(){
    try{
        if(!pool){
            pool =  await mssql.connect(stringSQL);
        }
        return pool;
    }
    catch(erro){
        console.log(`Erro no acesso ao BD - ${erro}`)
    }
}

export default conectaBD;