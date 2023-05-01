class UserModel {

    constructor(model) {

        if(model.email && model.senha && model.nome && model.foto && model.descricao){
            this._data = {
                email: model.email,
                senha: model.senha,
                nome: model.nome,
                foto: model.foto,
                descricao: model.descricao
            };
        } else {
            console.log('Usuario não tem todos os parâmetros necessários!');
            this._data = null;
        }
    }

    get data() {
        return this._data;
    }
}

module.exports = UserModel;