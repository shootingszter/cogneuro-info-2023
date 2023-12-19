function randomStrings(strings: string[]): string[] {
    // Szükség van egy üres tömbre, amiben majd lehet tárolni az eredményt
    const result: string[] = [];

    // Addig fusson a ciklus, amíg nincs 3 elem az eredmény tömbben
    while (result.length < 3) {
        // Ahhoz hogy random legyen le kell gyártani random indexet
        const randomIndex = Math.floor(Math.random() * strings.length);
        const randomString = strings[randomIndex];

        // Legyen ellenőrizve, hogy nincs-e duplikáció, ehhez először csinálok egy változót
        let isDuplicate = false;

        // Végig lépkedünk az eredményen, ha már volt ez a sztring akkor az legyen megjelölve
        for (const str of result) {
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
const inputStrings: string[] = ["egy", "kettő", "három", "négy", "öt", "hat", "hét"];
const selectedStrings: string[] = randomStrings(inputStrings);
console.log("Véletlenszerűen kiválasztott sztringek:", selectedStrings);

export{};