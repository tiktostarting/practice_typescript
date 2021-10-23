import Request from '../model/request'

interface itemService{
    calcTotalHarga(reqs: Request[]): number
    calcTotalDisc(reqs: Request[], totalHarga: number): number 
}

export default itemService