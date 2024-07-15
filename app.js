export class panas{
    name
    static instancia;
    constructor({name: n} =  { name : "TULIO"}){
        if(panas.instancia){
            return panas.instancia;
        }
        this.name = n
        panas.instancia = this;
        return panas.instancia;
    }
    destructor(){
        panas.instancia = undefined
    }
}