var contatos = new ContatoList();
var controller = new ContatoController(contatos);

//pior gambiarra do mundo
controller.model = contatos;

var view = new ContatoView(controller, contatos);
