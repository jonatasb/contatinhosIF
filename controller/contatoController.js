class ContatoController {
	contructor (model) {
		this.model = model;
	}

	createContato (nome, telefone, status) {
		if (nome == '' || telefone == '' || status == null) {
			return false;
		}
		let contato = new Contato(nome, telefone, status);
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