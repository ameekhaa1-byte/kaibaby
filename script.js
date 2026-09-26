/* =================================
   KAIBABY - STORE JAVASCRIPT
================================= */

let cart = [];
let wishlist = [];


/* =================================
   CART
================================= */

const cartCount = document.getElementById("cartCount");

function updateCartCount() {
    cartCount.textContent = cart.length;
}


/* Add products to cart */

document.querySelectorAll(".add-btn").forEach((button) => {

    button.addEventListener("click", () => {

        const productCard = button.closest(".product-card");

        const productName =
            productCard.querySelector("h3").textContent;

        const productPrice =
            productCard.querySelector(".price").textContent;

        const product = {
            name: productName,
            price: productPrice
        };

        cart.push(product);

        updateCartCount();

        button.textContent = "✓ Added";

        setTimeout(() => {
            button.textContent = "Add to Cart";
        }, 1200);

    });

});


/* =================================
   WISHLIST
================================= */

document.querySelectorAll(".wishlist").forEach((button) => {

    button.addEventListener("click", () => {

        const productCard = button.closest(".product-card");

        const productName =
            productCard.querySelector("h3").textContent;

        if (wishlist.includes(productName)) {

            wishlist = wishlist.filter(
                item => item !== productName
            );

            button.textContent = "♡";

        } else {

            wishlist.push(productName);

            button.textContent = "♥";

        }

    });

});


/* =================================
   SHOP NOW BUTTONS
================================= */

document.querySelectorAll(".shop-btn").forEach((button) => {

    button.addEventListener("click", () => {

        document.querySelector(".products-section")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* =================================
   CATEGORY CLICK
================================= */

document.querySelectorAll(".category").forEach((category) => {

    category.addEventListener("click", () => {

        const categoryName =
            category.querySelector("p").textContent;

        alert(
            "KAIBABY\n\nOpening " +
            categoryName +
            " collection..."
        );

    });

});


/* =================================
   VIEW ALL BUTTONS
================================= */

document.querySelectorAll(".view-btn").forEach((button) => {

    button.addEventListener("click", () => {

        document.querySelector(".products-section")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* =================================
   HEADER ICONS
================================= */

const headerButtons =
    document.querySelectorAll(".header-actions .icon-btn");

headerButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        if (index === 0) {

            const search =
                prompt("What are you looking for?");

            if (search) {
                alert(
                    'Searching KAIBABY for "' +
                    search +
                    '"'
                );
            }

        }

        if (index === 1) {

            alert(
                "Your Wishlist\n\n" +
                (wishlist.length
                    ? wishlist.join("\n")
                    : "Your wishlist is empty.")
            );

        }

    });

});


/* =================================
   CART BUTTON
================================= */

document.querySelector(".cart-btn")
    .addEventListener("click", () => {

        if (cart.length === 0) {

            alert(
                "Your KAIBABY cart is empty 🛒"
            );

            return;
        }

        let cartMessage =
            "🛒 KAIBABY CART\n\n";

        cart.forEach((item, index) => {

            cartMessage +=
                (index + 1) +
                ". " +
                item.name +
                " - " +
                item.price +
                "\n";

        });

        cartMessage +=
            "\nTotal items: " +
            cart.length;

        alert(cartMessage);

    });


/* =================================
   BOTTOM NAVIGATION
================================= */

document.querySelectorAll(".nav-item")
    .forEach((item) => {

        item.addEventListener("click", () => {

            document.querySelectorAll(".nav-item")
                .forEach(nav => {
                    nav.classList.remove("active");
                });

            item.classList.add("active");

            const label =
                item.querySelector("small").textContent;

            if (label === "Home") {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }

            else if (label === "Search") {

                const search =
                    prompt("Search KAIBABY products:");

                if (search) {
                    alert(
                        'Searching for "' +
                        search +
                        '"'
                    );
                }

            }

            else if (label === "Wishlist") {

                alert(
                    "❤️ MY WISHLIST\n\n" +
                    (wishlist.length
                        ? wishlist.join("\n")
                        : "No products added yet.")
                );

            }

            else if (label === "Cart") {

                if (cart.length === 0) {

                    alert(
                        "🛒 Your cart is empty."
                    );

                } else {

                    alert(
                        "🛒 You have " +
                        cart.length +
                        " item(s) in your cart."
                    );

                }

            }

            else if (label === "Account") {

                alert(
                    "👤 KAIBABY ACCOUNT\n\n" +
                    "Account features coming soon."
                );

            }

        });

    });


/* =================================
   INITIALIZE
================================= */

updateCartCount();

console.log(
    "KAIBABY Store loaded successfully ❤️"
);
