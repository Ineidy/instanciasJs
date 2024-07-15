export class connect{
    name
    static instanceConnect;
    constructor({name: n} =  { name : "INEIDY"}){
        if(connect.instanceConnect){
            return connect.instanceConnect;
        }
        this.name = n
        connect.instanceConnect = this;
        return connect.instanceConnect;
    }
}