// Termékek tömbje
var products = [];
// Termék hozzáadása
function addProduct() {
    // Termék nevének és árának beolvasása az input mezőkből
    var productNameInput = document.getElementById('productName');
    var productPriceInput = document.getElementById('productPrice');
    var productName = productNameInput.value;
    var productPrice = parseFloat(productPriceInput.value);
    // Ebben a lépésben ellenőrzöm, hogy lett-e megadva név és hogy az ár szám-e
    if (productName && !isNaN(productPrice)) {
        // Ha minden rendben van akkor adja hozzá a tömbhöz a terméket
        var product = {
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
    var cheapestProduct = findCheapestProduct(); // Legolcsóbb termék keresése
    var averagePrice = calculateAveragePrice(); // Átlagár számítása
    var priceVariance = calculatePriceVariance(); // Szórás
    // Az eredmények megjelenítése a HTML-ben
    var cheapestProductNameElement = document.getElementById('cheapestProductName');
    if (cheapestProduct) {
        cheapestProductNameElement.textContent = "A legolcs\u00F3bb term\u00E9k neve: ".concat(cheapestProduct.name);
    }
    else {
        cheapestProductNameElement.textContent = 'Nincs elérhető termék.';
    }
    document.getElementById('averagePrice').textContent = "\u00C1tlag\u00E1r: ".concat(averagePrice);
    document.getElementById('priceVariance').textContent = "\u00C1rak sz\u00F3r\u00E1sa: ".concat(priceVariance);
}
// Legolcsóbb termék keresése
function findCheapestProduct() {
    if (products.length === 0) {
        return undefined;
    }
    return products.reduce(function (min, current) { return (min.price < current.price ? min : current); });
}
// Átlagár kiszámítása
function calculateAveragePrice() {
    if (products.length === 0) {
        return 0;
    }
    var totalPrices = products.reduce(function (sum, product) { return sum + product.price; }, 0);
    return totalPrices / products.length;
}
// Árak szórásának kiszámítása
function calculatePriceVariance() {
    if (products.length <= 1) {
        return 0;
    }
    var averagePrice = calculateAveragePrice();
    var squaredDifferencesSum = products.reduce(function (sum, product) { return sum + Math.pow(product.price - averagePrice, 2); }, 0);
    return Math.sqrt(squaredDifferencesSum / (products.length - 1));
}
