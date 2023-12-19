"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomStrings(strings) {
    // Szükség van egy üres tömbre, amiben majd lehet tárolni az eredményt
    var result = [];
    // Addig fusson a ciklus, amíg nincs 3 elem az eredmény tömbben
    while (result.length < 3) {
        // Ahhoz hogy random legyen le kell gyártani random indexet
        var randomIndex = Math.floor(Math.random() * strings.length);
        var randomString = strings[randomIndex];
        // Legyen ellenőrizve, hogy nincs-e duplikáció, ehhez először csinálok egy változót
        var isDuplicate = false;
        // Végig lépkedünk az eredményen, ha már volt ez a sztring akkor az legyen megjelölve
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var str = result_1[_i];
            if (str === randomString) {
                isDuplicate = true;
                break;
            }
        }
        // Ha nem volt duplikáció, akkor hozzá lehet adni az outputhoz
        if (!isDuplicate) {
            result.push(randomString);
        }
    }
    return result;
}
// Megadjuk az input listát és meghívjuk a függvényt
var inputStrings = ["egy", "kettő", "három", "négy", "öt", "hat", "hét"];
var selectedStrings = randomStrings(inputStrings);
console.log("Véletlenszerűen kiválasztott sztringek:", selectedStrings);
