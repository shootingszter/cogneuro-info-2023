// A feladat elkészítéséhez két függvényre van szükség, amik a bemenő adatokkal kiszámítják a 
// megfelelő módon a kért területeket.
function paralelogrammaTeruletMagassaggal(oldal: number, magassag: number): number {
    return oldal * magassag;
}

function paralelogrammaTeruletKetOldallalEsSzoggel(oldalA: number, oldalB: number, szog: number): number {
    const szinuszSzog = Math.sin(szog * (Math.PI / 180)); // Szöget radiánba alakítjuk
    return oldalA * oldalB * szinuszSzog;
}

// A használathoz értéket kell adni a függvényben szereplő változóknak, majd meg kell hívni a
// függvényeket. Hogy szép legyen az output, a konzolba szöveget is kiiratok az eredményeken kívül.
const oldal = 5;
const magassag = 8;
const terulet1 = paralelogrammaTeruletMagassaggal(oldal, magassag);
console.log(`A paralelogramma területe a megadott magassággal: ${terulet1}`);

const oldalA = 7;
const oldalB = 9;
const szog = 45;
const terulet2 = paralelogrammaTeruletKetOldallalEsSzoggel(oldalA, oldalB, szog);
console.log(`A paralelogramma területe a megadott két oldallal és szöggel: ${terulet2}`);

// Ez a lépés azért szükséges, hogy a js file megfelelően generálódjon le.
export {};