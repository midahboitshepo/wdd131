

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function productSelect() {
    const productSelect = document.getElementById("productSelect");
    productSelect.innerHTML = ''; // Clear existing options
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select a product";
    productSelect.appendChild(defaultOption);
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = `${product.name} (Avg. Rating: ${product.averagerating})`;
        productSelect.appendChild(option);
    });
}
document.addEventListener("DOMContentLoaded", productSelect);

function numberOfVisits() {
    // 1️⃣ Initialize display element variable
    const visitsDisplay = document.querySelector(".visits");
    // 2️⃣ Get the number of visits from localStorage or set to 0
    let visits = parseInt(localStorage.getItem("visits")) || 0;
    // 3️⃣ Increment the visits count
    visits++;
    // 4️⃣ Update the display element with the new count
    visitsDisplay.textContent = `Number of visits: ${visits}`;
    // 5️⃣ Store the updated count back in localStorage
    localStorage.setItem("visits", visits);
}

//function to display review.html page
function displayReviewPage() {
    const reviewForm = document.getElementById("reviewForm");
    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
        numberOfVisits(); // Call the function to update visits count
        window.location.href = "review.html"; // Redirect to review page
    });
}
document.addEventListener("DOMContentLoaded", displayReviewPage);












