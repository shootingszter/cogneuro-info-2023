function paralelogrammaTeruletMagassaggal(oldal: number, magassag: number): number {
    return oldal * magassag;
}

function paralelogrammaTeruletKetOldallalEsSzoggel(oldalA: number, oldalB: number, szog: number): number {
    const szinuszSzog = Math.sin(szog * (Math.PI / 180)); // Szöget radiánba alakítjuk
    return oldalA * oldalB * szinuszSzog;
}

// Példa használat:
const oldal = 5;
const magassag = 8;
const terulet1 = paralelogrammaTeruletMagassaggal(oldal, magassag);
console.log(`A paralelogramma területe a megadott magassággal: ${terulet1}`);

const oldalA = 7;
const oldalB = 9;
const szog = 45; // Például 45 fokos szög
const terulet2 = paralelogrammaTeruletKetOldallalEsSzoggel(oldalA, oldalB, szog);
console.log(`A paralelogramma területe a megadott két oldallal és szöggel: ${terulet2}`);

export {};