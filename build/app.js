"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("./model/request"));
var item_1 = __importDefault(require("./model/item"));
var item_service_impl_1 = __importDefault(require("./service/item.service.impl"));
var app = function (reqs) {
    var itemService = new item_service_impl_1.default();
    var totalHarga = itemService.calcTotalHarga(reqs);
    var totalDisc = itemService.calcTotalDisc(reqs, totalHarga);
    console.log("========================");
    for (var i = 0; i < reqs.length; i++) {
        console.log("   " + (i + 1) + ". " + reqs[i].item.nama + " : " + reqs[i].item.harga);
    }
    console.log("========================");
    console.log("   Harga  : " + totalHarga);
    console.log("   Diskon : " + totalDisc);
    console.log("========================");
};
// buy([{nama : "java", qty : 2},])
// app(new Request([{item : {nama : "java", harga : 10000}, qty : 2},]))
app([
    new request_1.default(new item_1.default("Java", 10000), 10),
    new request_1.default(new item_1.default("Java", 10000), 10),
]);
//((item.nama, item.jumlah), kuantitas)
