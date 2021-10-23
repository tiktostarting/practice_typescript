import Request from './model/request'
import Items from './model/item'
import itemService from './service/item.service'
import itemServiceImpl from './service/item.service.impl'

const app = (reqs: Request[]) : void => {
    

    let itemService: itemService = new itemServiceImpl()
    let totalHarga = itemService.calcTotalHarga(reqs)
    let totalDisc = itemService.calcTotalDisc(reqs, totalHarga)

    console.log(`========================`)
    for(let i = 0; i < reqs.length; i++){
        console.log(`   ${i+1}. ${reqs[i].item.nama} : ${reqs[i].item.harga}`)
    }

    console.log(`========================`)
    console.log(`   Harga  : ${totalHarga}`)
    console.log(`   Diskon : ${totalDisc}`)
    console.log(`========================`)
}

app([ 
    new Request(new Items("Java", 10000), 10),
    new Request(new Items("Java", 10000), 10),
])
