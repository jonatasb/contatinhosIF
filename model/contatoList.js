class ContatoList {
	constructor () {
		this.data = [];
	}

	create (contato) {
		contato.code = this.data.length;
		this.data.push(contato);
	}

	retrive (code) {
		return this.data.find((contato) => {
			return contato.code == code;
		});
	}

	remove (code) {}
}