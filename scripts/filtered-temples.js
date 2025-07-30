
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Atlanta Georgia",
        location: "Atlanta, Georgia",
        dedicated: "1983, June, 1-4",
        area: 3205,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19-21",
        area: 4255,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
    },
    {
        templeName: "Durban South Africa",
        location: "Durban, South Africa",
        dedicated: "2020, February, 16",
        area: 1845,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936-main.jpg"
    }
];

// Add event listener to the menu button for filtering
document.getElementById("menu").addEventListener("click", function () {
    const nav = document.querySelector('.navigation');
    nav.classList.toggle('open');
    this.classList.toggle('open');
});

const container = document.querySelector('#templeCards');


const oldTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    return year < 1900;
});
console.log(oldTemples);


const newTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    return year >= 2000;
});
console.log(newTemples);


const areaMoreThan900000 = temples.filter((temple) => temple.area > 900000);
console.log(areaMoreThan900000);



const areaLessThan10000 = temples.filter((temple) => temple.area < 10000);
console.log(areaLessThan10000);

// 4️⃣ loop through the array of temples
// and create a card for each temple
function createTempleCards(temples) {
    // 4️⃣ create a container for the cards
    // and set its id to 'templeCards'



    // 4️⃣ clear the container before adding new cards
    container.innerHTML = '';

    temples.forEach((result) => {
    // 5️⃣ create a card element
    // and set its class and id 
    const card = document.createElement('div');
    card.classList.add('card');
    card.id = "container";
    // 5️⃣ set the inner HTML of the card
        // with the temple's details
     

        // Filtering temples based on various criteria


    card.innerHTML = `    
        <div class="card">            

            <div class="card-body">

                <h5>${result.templeName}</h5>
                <p>Location: ${result.location}</p>
                <p>Dedicated: ${result.dedicated}</p>
                <p>Area: ${result.area} sq. ft.</p>
             </div>
             <div class="cardImage">
                <img src="${result.imageUrl}" class="cardImage" loading="lazy" alt="${result.templeName} Temple">
            </div>

        </div>
    `;
    // 6️⃣ append the card to the container
        container.appendChild(card);

    });
}

// Call the filterTemples function to apply the filters
createTempleCards(temples) 
