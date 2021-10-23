"use strict";
exports.__esModule = true;
var itemServiceImpl = /** @class */ (function () {
    function itemServiceImpl() {
    }
    itemServiceImpl.prototype.calcTotalHarga = function (reqs) {
        var harga = 0;
        var hargaArr = [];
        var qtyArr = [];
        for (var i = 0; i < reqs.length; i++) {
            hargaArr.push(reqs[i].item.harga);
            qtyArr.push(reqs[i].qty);
            harga += reqs[i].item.harga * reqs[i].qty;
        }
        return harga;
    };
    itemServiceImpl.prototype.calcTotalDisc = function (reqs, totalHarga) {
        var discn = 0;
        var namaArr = [];
        var harga = 0;
        var hargaArr = [];
        var qtyArr = [];
        for (var i = 0; i < reqs.length; i++) {
            namaArr.push(reqs[i].item.nama);
            hargaArr.push(reqs[i].item.harga);
            qtyArr.push(reqs[i].qty);
            harga += reqs[i].item.harga * reqs[i].qty;
        }
        for (var i = 0; i < reqs.length; i++) {
            if (qtyArr[i] > 1) {
                discn += 0.02;
                if (namaArr[i] == "java" || namaArr[i] == "groovy" || namaArr[i] == "kotlin") {
                    discn += 0.05;
                }
                if (namaArr[i] == "javascript" && qtyArr[i] >= 10) {
                    discn += 0.2;
                }
            }
        }
        if (namaArr.some(function (nA) { return nA == "java"; }) && namaArr.some(function (nA) { return nA == "javascript"; })) {
            discn += 0.1;
        }
        if (namaArr.some(function (nA) { return nA == "groovy"; }) && namaArr.some(function (nA) { return nA == "java"; })) {
            discn += 0.1;
        }
        harga = totalHarga - (totalHarga * discn);
        return harga;
    };
    return itemServiceImpl;
}());
exports["default"] = itemServiceImpl;
