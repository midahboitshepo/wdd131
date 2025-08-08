
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const products = [
    {
        productName: "Watermelon",
        variety: "Sweet Crimson",
        price: 80,
        imageUrl:"./images/melon.jpeg"
    },
    
    {
        productName: "Indegineous Chicken",
        variety: "Tswana",
        price: 150,
        imageUrl: "./images/chicken.jpeg"
        
    },

     {
        productName: "Beans",
        variety: "Sugar Beans",
        price: 500,
        imageUrl: "./images/beans.jpeg"

    },
     
    {
        productName: "Lamb",
        variety: "Dopper",
        price: 2000,
        imageUrl: "./images/lamb.jpeg"

    },

    {
        productName: "Live Tswana Chicken",
        variety: "Tswana",
        price: 500,
        imageUrl: "./images/tswana.jpeg"

    },

  
    {
        productName: "Beans",
        variety: "Sugar Beans",
        price: 500,
        imageUrl: "./images/beans.jpeg"

    },

    {
        productName: "Beans",
        variety: "Sugar Beans",
        price: 500,
        imageUrl: "./images/beans.jpeg"

    },

     {
        productName: "Beans",
        variety: "Sugar Beans",
        price: 500,
        imageUrl: "./images/beans.jpeg"

    },
  
    {
        productName: "Beans",
        variety: "Sugar Beans",
        price: 500,
        imageUrl: "./images/beans.jpeg"

    },

    {
        productName: "Beans",
        variety: "Sugar Beans",
        price: 500,
        imageUrl: "./images/beans.jpeg"

    },

    {
        productName: "Beans",
        variety: "Sugar Beans",
        price: 500,
        imageUrl: "./images/beans.jpeg"

    },

    {
        productName: "Beans",
        variety: "Sugar Beans",
        price: 500,
        imageUrl: "./images/beans.jpeg"

    },

    {
        productName: "Beans",
        variety: "Sugar Beans",
        price: 500,
        imageUrl: "./images/beans.jpeg"

    },

    {
        productName: "Beans",
        variety: "Sugar Beans",
        price: 500,
        imageUrl: "./images/beans.jpeg"

    },

    {
        productName: "Beans",
        variety: "Sugar Beans",
        price: 500,
        imageUrl: "./images/beans.jpeg"

    }
];

// Add event listener to the menu button for filtering
document.getElementById("menu").addEventListener("click", function () {
    const nav = document.querySelector('.navigation');
    nav.classList.toggle('open');
    this.classList.toggle('open');
});

const container = document.querySelector('#productCards');

// 4️⃣ loop through the array of products
// and create a card for each product
function createProductCards(products) {
    // 4️⃣ create a container for the cards
    // and set its id to 'templeCards'



    // 4️⃣ clear the container before adding new cards
    container.innerHTML = '';

    products.forEach((result) => {
        // 5️⃣ create a card element
        // and set its class and id 
        const card = document.createElement('div');
        card.classList.add('card');
        card.id = "container";
        // 5️⃣ set the inner HTML of the card
  
        card.innerHTML = `    
        <div class="card">          

            <div class="card-body">
                <h5>${result.productName}</h5>
                <p>Product: ${result.productName}</p>
                <p>Variety: ${result.variety}</p>
                <p>Price: BWP${result.price}</p>
             </div>
             <div class="cardImage">
                <img src="${result.imageUrl}" class="cardImage" loading="lazy" alt="${result.productName}" >
            </div>

        </div>
    `;
        // 6️⃣ append the card to the container
        container.appendChild(card);

    });
}

// Call the filterTemples function to apply the filters
createProductCards(products) 
