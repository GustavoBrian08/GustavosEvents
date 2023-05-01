class EventModel {

    constructor(model) {

        if(model.titulo && model.descricao && model.endereco && model.data_hora) {
            this._data = {
                id: model.id,
                titulo: model.titulo,
                descricao: model.descricao,
                endereco: model.endereco,
                data_hora: model.data_hora
            }
        } else {
            console.error("Erro: O Objeto não tem todos os parâmetros necessários!");
            this._data = null;
        }
    }

    get data() {
        return this._data;
    }
}

module.exports = EventModel;