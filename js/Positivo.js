class Positivo extends Votacion{
    static contadorVotos = 0;

    constructor(nombre){
        super(nombre);
        this._id = ++Positivo.contadorVotos;
    }
    get id(){
        return this._id;
    }
}