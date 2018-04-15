class ContatoView {
	constructor (controller, model) {
		this.addButton = document.querySelector('#contatobutton');
		this.contatoNome = document.querySelector('#nome');
		this.contatoTelefone = document.querySelector('#telefone');
//		this.contatoStatus = document.querySelectorAll('.status');
		this.contatosList = document.querySelector('#contatosList');
		this.model = model;
		this.controller = controller;
		this.addButton.onclick = this.createContato.bind(this);
	}

	createContato () {
		let nome = this.contatoNome.value;
		let telefone = this.contatoTelefone.value;
		if (this.controller.createContato(nome, telefone /*, this.contatoStatus*/) == false) {
			alert('Alguma informação está em falta');
		}
		this.show();
	}

	removeContato (code) {
		if (this.controller.removeContato(code) == false) {
			alert('Contato não existe');
		}
		this.show();
	}

	show () {
		this.contatosList.innerHTML = '';
		for (var i = 0; i < this.model.data.length; i ++) {
			let contato = this.model.data[i];
			this.contatosList.innerHTML += '<div class="contatosListItemContainer">'+
					'<div class="contatosListItem">'+
					'	<p> Nome: '+contato.nome+'</p>'+
					'	<p>Telefone: '+contato.telefone+'</p>'+
//					'	<p>Status: '+contato.Status+'</p>'+
					'</div>'+
					'<div class="contatoAction">'+
					'	<button type="button" data-id="'+contato.code+'" name="removeButton">Remover contato</button>'+
					'</div>'+
				'</div>'
		}
	}
}