class Usuario {
    constructor(pNombre, pUsername, pPassword) {
        this.nombre = pNombre;
        this.username = pUsername;
        this._password = pPassword;
    }

    set password(pPassword) {
        this._password = pPassword;
    }

    imprimir() {
        let resultado = `<h1>Nombre: ${this.nombre}</h1><br><p> Username: ${this.username}</p>`;
        return resultado;
    }

}

module.exports = Usuario;