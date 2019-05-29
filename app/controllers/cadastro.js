module.exports.cadastro = function(application, req, res){
    res.render('cadastro', {validacao:{},dadosForm:{}});
}
module.exports.cadastrar = function(application, req, res){
   var dadosForm = req.body;
   req.assert('nome', 'nome não pode ser vazio').notEmpty();
   req.assert('usuario', 'Usuario não pode ser vazio').notEmpty();
   req.assert('senha', 'Senha não pode ser vazio').notEmpty();
   req.assert('casa', 'Casa não pode ser vazio').notEmpty();
   var erros = req.validationErrors();
   if (erros) {
       res.render('cadastro', {validacao: erros, dadosForm: dadosForm});
   }
   var connection = application.config.dbConnection;
   console.log(connection);
   var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

   UsuariosDAO.inserirUsuario(dadosForm);
   res.send('Podemos continuar');
}