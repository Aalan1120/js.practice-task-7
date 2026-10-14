let productContainer = document.getElementById("product-container");
let errorMessage = document.getElementById("error-message");

fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            let card = document.createElement("div");
            card.classList.add("product-card");
            let image = document.createElement("img");
            image.src = product.image;
            image.alt = product.title;
            image.classList.add("product-image");
            let title = document.createElement("h2");
            title.classList.add("product-title");
            title.textContent = product.title.slice(0, 60);
            let category = document.createElement("p");
            category.classList.add("product-category");
            category.textContent = product.category;
            let description = document.createElement("p");
            description.classList.add("product-description");
            description.textContent = product.description.slice(0, 120);
            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(category);
            card.appendChild(description);
            productContainer.appendChild(card);
        });
    })
    .catch(error => {
        errorMessage.textContent = "Error: " + error.message;
        errorMessage.style.color = "red";
        console.error("Error fetching products:", error);
    })
    .finally(() => {
        console.log("API called");
    });
