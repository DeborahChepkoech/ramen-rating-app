const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "./images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Gyukotsu Ramen", restaurant: "Menya", image: "./images/gyukotsu.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Kojiro Ramen", restaurant: "Ramen-ya", image: "./images/kojiro.jpg" },
    { id: 4, name: "Naruto Ramen", restaurant: "Raffys", image: "./images/naruto.jpg", rating: 6, comment: "Wow!" },
    { id: 5, name: "Nirvana Ramen", restaurant: "Nirvs", image: "./images/nirvana.jpg", rating: 3, comment: "Nice!" },

 ];
 document.addEventListener("DOMContentLoaded", main);



function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = ""; 

    ramens.forEach((ramen) => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.style.width = "100px"; 
        img.style.height = "100px";
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}


function handleClick(ramen) {
    console.log("Clicked ramen:", ramen);
    if (!ramen) {
        console.error("Error: ramen data is undefined!");
        return; 
    }

    document.getElementById("detail-image").src = ramen.image;
    document.getElementById("detail-name").textContent = ramen.name;
    document.getElementById("detail-restaurant").textContent = ramen.restaurant;
    document.getElementById("detail-rating").textContent = ramen.rating || "No rating available"; 
    document.getElementById("detail-comment").textContent = ramen.comment || "No comment available";
}






function addSubmitListener() {
    document.getElementById("new-ramen-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const newRamen = {
            name: document.getElementById("name").value,
            restaurant: document.getElementById("restaurant").value,
            image: document.getElementById("image").value,
            rating: document.getElementById("rating").value,
            comment: document.getElementById("comment").value
        };

        
        ramens.push(newRamen);
        displayRamens(); 
        
        this.reset();
    });
}


function main() {
    displayRamens();
    addSubmitListener();
}
