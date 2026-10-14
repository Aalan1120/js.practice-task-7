let apiUrl = "https://fakestoreapi.com/products/";
let productContainer = document.getElementById("product-container");
let loading = document.getElementById("loading");
let errorMessage = document.getElementById("error");
fetch(apiUrl)
    .then(function(response) {
        if (!response.ok) {
            throw new Error("Failed to fetch products. Status: " + response.status);
        }
        return response.json();
    })
    .then(function(products) {
        productContainer.innerHTML = "";
        products.forEach(function(product) {
            let card = document.createElement("div");
            card.className = "product-card";
            let image = document.createElement("img");
            image.src = product.image;
            image.alt = product.title;
            image.className = "product-image";
            let title = document.createElement("h2");
            title.textContent = product.title.slice(0, 60);
            let category = document.createElement("p");
            category.className = "product-category";
            category.textContent = product.category;
            let description = document.createElement("p");
            description.className = "product-description";
            description.textContent = product.description.slice(0, 120);
            let price = document.createElement("p");
            price.className = "product-price";
            price.textContent = "$" + product.price.toFixed(2);
            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(category);
            card.appendChild(description);
            card.appendChild(price);
            productContainer.appendChild(card);
        });
    })
    .catch(function(error) {
        errorMessage.textContent = "Error: " + error.message;
        errorMessage.style.color = "red";
    })
    .finally(function() {
        loading.style.display = "none";
        console.log("API called");
    });
