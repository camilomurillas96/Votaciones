class Negativo extends Votacion{
    static contadorVotos = 0;

    constructor(nombre){
        super(nombre);
        this._id = ++Negativo.contadorVotos;
    }
    get id(){
        return this._id;
    }
}