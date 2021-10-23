"use strict";
exports.__esModule = true;
var request_1 = require("./model/request");
var item_1 = require("./model/item");
var item_service_impl_1 = require("./service/item.service.impl");
var app = function (reqs) {
    var itemService = new item_service_impl_1["default"]();
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
app([
    new request_1["default"](new item_1["default"]("Java", 10000), 10),
    new request_1["default"](new item_1["default"]("Java", 10000), 10),
]);
