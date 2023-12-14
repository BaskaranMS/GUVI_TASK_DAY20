//function to fetch data from the Open Food Facts API
function fetchProductData() {
    return new Promise((resolve, reject) => {
        fetch('https://world.openfoodfacts.org/api/v2/product/737628064502.json')
            .then(response => response.json())
            .then(data => resolve(data.product))
            .catch(error => reject(error));
    });
}

// Function to display product information
function displayProductInformation(product) {
    const container = document.getElementById('productContainer');

    const card = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${product.product_name}</h5>
                <p class="card-text">Brand: ${product.brands}</p>
                <p class="card-text">Category: ${product.categories}</p>
                <p class="card-text">Ingredients: ${product.ingredients_text}</p>
                <a href="${product.url}" class="btn btn-primary" target="_blank">Learn More</a>
            </div>
        </div>
    `;

    container.innerHTML = card;
}

// Fetch data and display product information when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchProductData()
        .then(data => displayProductInformation(data))
        .catch(error => console.error('Error fetching data:', error));
});
