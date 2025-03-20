// Array of ramen objects, each containing an ID, name, restaurant, image URL, rating, and comment
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 7, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Me", image: "images/kojiro.jpg", rating: 5, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen House", image: "images/gyukotsu.jpg", rating: 4, comment: "Very Tasty" },
    { id: 4, name: "Shio Ramen", restaurant: "Noodle Nirvana", image: "images/nirvana.jpg", rating: 4, comment: "Very Yummy" }
];

// Function to display all ramen images in the menu
function displayRamens() {                                                                  
    // Get the ramen menu container element
    let ramenMenu = document.getElementById("ramen-menu");

    // Loop through the ramens array to display each ramen
    ramens.forEach(function(ramen) { // forEach method is used to access the array in this case the images
        // Create an image element for the ramen
        const img = document.createElement("img"); // This creates the image tag     
        img.src = ramen.image;  // Set the image source                            
        img.alt = ramen.name;   // Set the alternative text
        img.width = 80;         // Set the width of the image
        img.height = 80;        // Set the height of the image

        // Add a click event listener to show ramen details when clicked
        img.addEventListener("click", function() {
            handleClick(ramen); // Properly closed function call
        });

        // Append the image to the ramen menu container
        ramenMenu.appendChild(img);
    });
}

displayRamens(); // Call the function to display all existing ramen images


// Function to display ramen details when a ramen image is clickedll
function handleClick(ramen) {
    // Set the detailed ramen image
    document.getElementById("ramen-detail-image").src = ramen.image;
    // Set the ramen name
    document.getElementById("ramen-name").textContent = ramen.name;
    // Set the restaurant name
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    // Set the ramen rating
    document.getElementById("ramen-rating").textContent = ramen.rating;
    // Set the user's comment about the ramen
    document.getElementById("ramen-comment").textContent = ramen.comment;
}

// Function to add a new ramen when the form is submitted
function addSubmitListener() {
    // Get the form element
    const form = document.getElementById("new-ramen-form");
    // Get the ramen menu container
    const ramenMenu = document.getElementById("ramen-menu");

    // Add an event listener to handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior (page reload)

        // Get values from form inputs
        const name = document.getElementById("name").value;         // Get ramen name from input field
        const restaurant = document.getElementById("restaurant").value; // Get restaurant name from input field
        const image = document.getElementById("image").value;       // Get image URL from input field
        const rating = document.getElementById("rating").value;     // Get rating from input field
        const comment = document.getElementById("comment").value;   // Get comment from input field

        // Create a new ramen object with the form values
        const newRamen = {
            id: ramens.length + 1,  // Assign an ID based on array length + 1
            name,                   // Set name from form input
            restaurant,              // Set restaurant from form input
            image,                   // Set image URL from form input
            rating,                   // Set rating from form input
            comment                   // Set comment from form input
        };

        // Add the new ramen to the ramens array
        ramens.push(newRamen);

        // Create an image element for the new ramen
        const newRamenImage = document.createElement("img");
        newRamenImage.src = image; // Set the image source
        newRamenImage.alt = name;  // Set alternative text
        newRamenImage.width = 80;  // Set image width
        newRamenImage.height = 80; // Set image height

        // Add a click event listener to display ramen details when clicked
        newRamenImage.addEventListener("click", () => handleClick(newRamen));

        // Append the new ramen image to the ramen menu
        ramenMenu.appendChild(newRamenImage);

        // Clear the form fields after submission
        form.reset();
    });
}

// Initialize functions

addSubmitListener(); // Call the function to enable form submission handling




