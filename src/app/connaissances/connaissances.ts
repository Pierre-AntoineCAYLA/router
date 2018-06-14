export class connaissance{

    private _nom: string;
    private _description :string;

    constructor(nom:string,description:string){
        this._nom=nom;
        this._description=description
    }

    get nom(){return this._nom}
    set nom(nom:string){this._nom=nom}
    get description(){return this._description}
    set descritpion(description){this._description=description}
}