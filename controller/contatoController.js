class ContatoController {
	contructor (model) {
		this.model = model;
	}

	createContato (nome, telefone) {
		if (nome == '' || telefone == '') {
			return false;
		}
		let contato = new Contato(nome, telefone);
		this.model.create(contato);
		return true;
	}

	removeContato (code) {
		let contato = this.model.retrieve(code);
		if (contato == undefined) {
			return false;
		}
		this.model.remove(code);
		return true;
	}
}