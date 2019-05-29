// importar mongo db
var mongo = require('mongodb');
var connMongoDB = function () {
    console.log('entrou na função de conexão');
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            '127.0.0.1', //string contendo o endereço de nosso banco de dados
            '27017', //porta de conexão
            {}
        ),
        {

        }
    );
    return db;
}

module.exports = function () {

return connMongoDB;
}