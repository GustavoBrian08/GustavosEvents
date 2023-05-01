const connect = require('../db/db_connection');

class EventRepository {

    static async _createTable() {
        try {
            const conn = await connect();
            const sql = "CREATE TABLE evento (id INT PRIMARY KEY AUTO_INCREMENT, titulo VARCHAR(100) NOT NULL, descricao VARCHAR(200), endereco VARCHAR(200) NOT NULL, data_hora DATETIME)";

            console.log('Tabela EVENTO criada com sucesso!');
            return await conn.query(sql);
        } catch(error) { console.log(`Erro: ${error.message}.`) }
    }

    static async _response(conn, id) {
        const response = "SELECT * FROM evento WHERE id = ?";
        const [ rows ] = await conn.query(response, [id]);

        return rows;
    }

    static async getData() {
        try {
            const EventModel = require('../models/eventModel');

            const conn = await connect();
            const sql = "SELECT * FROM evento";

            const [ rows ] = await conn.query(sql);

            const models = [];

            rows.forEach(element => {
                const model = new EventModel(element);
                models.push(model.data);
            });

            return models;
        } catch (error) {
            console.log(`Erro na requisição SQL: ${error.message}`);
        }
    }

    static async postData(model) {

        try{
            const conn = await connect();
            const sql = "INSERT INTO EVENTO(titulo, descricao, endereco, data_hora) VALUES (?, ?, ?, ?)";
            const values = [model.titulo, model.descricao, model.endereco, model.data_hora];

            const [ ResultSetHeader ] = await conn.query(sql, values);
            
            return await this._response(conn, ResultSetHeader.insertId);

        } catch(error) {
            console.log(`Erro na camada de repository: ${error.message}`);
        }
    }

    static async updateData(id, model) {

        try{
            const conn = await connect();
            
            const sql = "UPDATE evento SET titulo = ?, descricao = ?, endereco = ?, data_hora = DATE_ADD(STR_TO_DATE(?,'%Y-%m-%d %H:%i:%s'), INTERVAL -3 HOUR) WHERE id = ?";
            const values = [model.titulo, model.descricao, model.endereco, model.data_hora, id];
            
            await conn.query(sql, values);
            
            const res = await this._response(conn, id);
            
            return res;
        } catch(error) {
            console.log(`Erro ao atualizar no Banco de Dados: ${error.message}`);
            return error;
        }
    }

    static async deleteData(id) {
        
        try{
            const conn = await connect();
            
            const res = await this._response(conn, id);
            
            const sql = "DELETE FROM evento WHERE id = ?";
            await conn.query(sql, [id]);

            if(res.length == 0) return [null];
            
            return res;
        } catch(error) {
            console.log(`Erro ao deletar no Banco de Dados: ${error.message}`);
            return error;
        }
    }
}

module.exports = EventRepository;