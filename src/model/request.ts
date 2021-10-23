import Items from './item'

class Request {
    item: Items
    qty: number 

    constructor(item: Items, qty: number){
        this.item = item
        this.qty = qty
    }
}

export default Request
