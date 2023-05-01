const connect = async () => {
    if(global.connection && global.connection.state !== 'disconnected') { return global.connection; }

    const mysql = require('mysql2/promise');
    const port = 3306;
    require('dotenv').config();
    
    try {
        const connection = await mysql.createConnection(`mysql://${process.env.USER_DB}:${process.env.PASS_DB}@localhost:${port}/gustavo_events`)

        console.log('\nConexão ao Banco de Dados bem sucedida!\n');
        
        return connection;

    } catch(error){ console.log(`\nErro: ${error.message}.\n`) };
}

module.exports = connect;