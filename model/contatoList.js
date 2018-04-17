class ContatoList {
	constructor () {
		this.data = [];
	}

	create (contato) {
		contato.code = this.data.length;
		this.data.push(contato);
	}

	retrieve (code) {
		return this.data.find((contato) => {
			return contato.code == code;
		});
	}

	remove (code) {
		this.data.splice(code, 1);
		let changed = this.data;
		this.data = [];
		for (var i = 0; i < changed.length; i++) {
			this.create(changed[i]);
		}
		return true;
	}
}