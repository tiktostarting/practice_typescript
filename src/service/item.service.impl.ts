import itemService from './item.service'
import Request from '../model/request'


class itemServiceImpl implements itemService{

    calcTotalHarga(reqs: Request[]): number {
        let harga = 0 
        let hargaArr : number[] = []
        let qtyArr : number[] = []

        for(let i = 0; i < reqs.length; i++){
            hargaArr.push(reqs[i].item.harga)
            qtyArr.push(reqs[i].qty)
            harga += reqs[i].item.harga * reqs[i].qty
        }
        return harga
    }

    calcTotalDisc(reqs: Request[], totalHarga: number): number{
        let discn = 0
        let namaArr : string[] = [] 
        let harga = 0 
        let hargaArr : number[] = []
        let qtyArr : number[] = []

        for(let i = 0; i < reqs.length; i++){
            namaArr.push(reqs[i].item.nama)
            hargaArr.push(reqs[i].item.harga)
            qtyArr.push(reqs[i].qty)
            harga += reqs[i].item.harga * reqs[i].qty
        }

        for(let i = 0; i < reqs.length; i++){
            if(qtyArr[i] > 1){
                discn += 0.02
                if(namaArr[i] == "java" || namaArr[i] == "groovy" || namaArr[i] == "kotlin"){
                    discn += 0.05
                }
            
                if(namaArr[i] == "javascript" && qtyArr[i] >= 10){
                    discn += 0.2
                }
            }
        }

        if(namaArr.some(nA => nA == "java") && namaArr.some(nA => nA == "javascript")){
            discn += 0.1
        }
    
        if(namaArr.some(nA => nA == "groovy") && namaArr.some(nA => nA == "java")){
            discn += 0.1
        }
        harga = totalHarga - (totalHarga * discn)
        return harga
    }

}

export default itemServiceImpl