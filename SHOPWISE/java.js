const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

function showProductDetails(name, description, price, images) {

    document.getElementById('selected-product-name').innerText = 'Product: ' + name;
    document.getElementById('selected-product-description').innerText = 'Description: ' + description;
    document.getElementById('selected-product-price').innerText = 'Price: ' + price;

    // Display the first image of the product
    document.getElementById('selected-product-image').src = images[0];

    document.getElementById('Buy').addEventListener('click', function () {
        alert('Product ' + name + ' thank you for purchasing our product');

    });
}
function openDonationPopup() {
    var donationAmount = prompt("Enter the amount to donate:");
    if (donationAmount !== null && !isNaN(donationAmount) && donationAmount.trim() !== "") {
        // If a valid donation amount is entered, show the thank-you pop-up
        showThankYouPopup();
    } else {
        // Handle invalid input or cancel button
        alert("Invalid donation amount. Please enter a valid number.");
    }
}

// Function to show the thank-you pop-up
function showThankYouPopup() {
    alert("Thank you for donating!");
}


