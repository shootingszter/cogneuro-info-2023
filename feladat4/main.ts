// Típusdefiníció a termékekhez
type Product = {
    name: string;
    price: number;
};

// Termékek tömbje
let products: Product[] = [];

// Termék hozzáadása
function addProduct() {
    // Termék nevének és árának beolvasása az input mezőkből
    const productNameInput = document.getElementById('productName') as HTMLInputElement;
    const productPriceInput = document.getElementById('productPrice') as HTMLInputElement;

    const productName = productNameInput.value;
    const productPrice = parseFloat(productPriceInput.value);

    // Ebben a lépésben ellenőrzöm, hogy lett-e megadva név és hogy az ár szám-e
    if (productName && !isNaN(productPrice)) {

        // Ha minden rendben van akkor adja hozzá a tömbhöz a terméket
        const product: Product = {
            name: productName,
            price: productPrice
        };

        products.push(product);

        // Az eredmények frissítése minden új termék hozzáadásakor
        updateResults();
    }
    // Input mezők ürítése
    productNameInput.value = '';
    productPriceInput.value = '';
}

// Eredmények frissítése
function updateResults() {
    const cheapestProduct = findCheapestProduct(); // Legolcsóbb termék keresése
    const averagePrice = calculateAveragePrice(); // Átlagár számítása
    const priceVariance = calculatePriceVariance(); // Szórás

    // Az eredmények megjelenítése a HTML-ben
    const cheapestProductNameElement = document.getElementById('cheapestProductName');
    if (cheapestProduct) {
        cheapestProductNameElement.textContent = `A legolcsóbb termék neve: ${cheapestProduct.name}`;
    } else {
        cheapestProductNameElement.textContent = 'Nincs elérhető termék.';
    }

    document.getElementById('averagePrice').textContent = `Átlagár: ${averagePrice}`;
    document.getElementById('priceVariance').textContent = `Árak szórása: ${priceVariance}`;
}

// Legolcsóbb termék keresése
function findCheapestProduct(): Product | undefined {
    if (products.length === 0) {
        return undefined;
    }

    return products.reduce((min, current) => (min.price < current.price ? min : current));
}

// Átlagár kiszámítása
function calculateAveragePrice(): number {
    if (products.length === 0) {
        return 0;
    }

    const totalPrices = products.reduce((sum, product) => sum + product.price, 0);
    return totalPrices / products.length;
}

// Árak szórásának kiszámítása
function calculatePriceVariance(): number {
    if (products.length <= 1) {
        return 0;
    }

    const averagePrice = calculateAveragePrice();
    const squaredDifferencesSum = products.reduce((sum, product) => sum + Math.pow(product.price - averagePrice, 2), 0);

    return Math.sqrt(squaredDifferencesSum / (products.length - 1));
}
