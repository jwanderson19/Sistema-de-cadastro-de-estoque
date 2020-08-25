class Product {

    constructor(name,qnt,value){
        this._productName = name
        this._productQnt = qnt
        this._productValue = value
    }

    set productName(value){
        this._productName = value
    }

    get productName(){
        return this._productName
    }

    set productQnt(value){
        this._productQnt = value
    }

    get productQnt(){
        return this._productQnt
    }

    set productValue(value){
        this._productValue =  value
    }

    get productValue(){
        return this._productValue
    }


}