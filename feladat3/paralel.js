"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function paralelogrammaTeruletMagassaggal(oldal, magassag) {
    return oldal * magassag;
}
function paralelogrammaTeruletKetOldallalEsSzoggel(oldalA, oldalB, szog) {
    var szinuszSzog = Math.sin(szog * (Math.PI / 180)); // Szöget radiánba alakítjuk
    return oldalA * oldalB * szinuszSzog;
}
// Példa használat:
var oldal = 5;
var magassag = 8;
var terulet1 = paralelogrammaTeruletMagassaggal(oldal, magassag);
console.log("A paralelogramma ter\u00FClete a megadott magass\u00E1ggal: ".concat(terulet1));
var oldalA = 7;
var oldalB = 9;
var szog = 45; // Például 45 fokos szög
var terulet2 = paralelogrammaTeruletKetOldallalEsSzoggel(oldalA, oldalB, szog);
console.log("A paralelogramma ter\u00FClete a megadott k\u00E9t oldallal \u00E9s sz\u00F6ggel: ".concat(terulet2));
