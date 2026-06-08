//Array that stores all the accommodation options and details
const roomDetails = {
    standard:{
        type: "Standard Rooms",
        subHeading: "Hotel Comfort In The Drakensberg Mountains",
        image: "../images/rooms/standard rooms.jpg",
        paragraph: "Experience the beauty and adventure of the Drakensberg mountains combined with the comfort and convenience of one of South Africa's favourite resort-hotels. Room amenities include unlimited WiFi, an en-suite bathroom, television with DStv, air-conditioning, a mini-fridge, and a choice of either one or two double beds. Whether you're travelling solo, as a couple, or enjoying a family mini break in the mountains, our Standard Rooms are an excellent choice.",
        amenities: [
            "TV",
            "Air Conditioning",
            "WiFi",
            "Parking",
            "Mini Bar"
        ],
        features: [
            "Beds: 2",
            "Occupancy: 2"
        ]
    },
    standardPremium:{
        type: "Standard Premium Rooms",
        subHeading: "Hotel Comforts & Garden Access",
        image: "../images/rooms/standard premium rooms.jpg",
        paragraph: "You can step straight into the gardens and make the most of the Champagne Valley location from our Standard Premium Rooms. These popular rooms have doors that open onto the gardens, two double beds that are great for groups and family travel, and an en-suite bathroom with shower. The comfy décor, tea and coffee making facilities, television with DStv, air-conditioning, mini-fridge and unlimited WiFi adds to the comfort of your stay. ",
        amenities: [
            "TV",
            "Air Conditioning",
            "WiFi",
            "Parking",
            "Mini Bar"
        ],
        features:[
            "Beds: 2",
            "Occupancy: 2 Adults and 2 Children"
        ]

    },
    excecutive:{
        type: "Executive Rooms",
        subHeading: "King Size Comfort In The Berg",
        image: "../images/rooms/executive rooms.jpg",
        paragraph: "Located a short drive from the small town of Winterton, our accommodation includes four spacious and comfortable Executive Rooms. Sleep soundly in the king size bed, relax in the room's mini lounge area with DStv and uncapped WiFi. Guests love the en-suite bathroom with bath and shower, air-conditioning, and other comforts to make you feel at home.",
        amenities: [
            "Accessibility Features",
            "TV",
            "Air Conditioning",
            "WiFi",
            "Parking",
            "Mini Bar"
        ],
        features:[
            "Beds: 1",
            "Occupancy: 2"
        ]
    },
    executivePremium: {
        type: "Executive Premium Rooms",
        subHeading: "Mountain Views & Home Comforts",
        image: "../images/rooms/executive premium room.jpg",
        paragraph: "Step into our gardens and soak in the views of the beautiful Central Drakensberg from the Executive Premium Rooms located on our hotel's ground floor. With a king size bed, unlimited WiFi, a mini lounge with flat-screen DStv equipped television, air-conditioning, a bar fridge, and more, it's full of home comforts for you to enjoy during your stay in the Berg. The room is en-suite and has both a bath and separate shower for your convenience and relaxation.",
        amenities: [
            "Accessibility Features",
            "TV",
            "Air Conditioning",
            "WiFi",
            "Parking",
            "Mini Bar"
        ],
        features:[
            "Beds: 1",
            "Occupancy: 2"
        ]

    }
};

//Sets the default index to 0 and displays the first room by default
let roomIndex = 0;
createUI(Object.keys(roomDetails)[roomIndex]);

//Saves the forward and back buttons in variables
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

//Adds event listeners to the buttons to chnage the index based on what button was pressed
backBtn.addEventListener("click", function() {
    roomIndex--;
    if (roomIndex < 0) {
        roomIndex = Object.keys(roomDetails).length - 1;
    }
    createUI(Object.keys(roomDetails)[roomIndex]);
});

nextBtn.addEventListener("click", function() {
    roomIndex++;
    if (roomIndex >= Object.keys(roomDetails).length) {
        roomIndex = 0;
    }
    createUI(Object.keys(roomDetails)[roomIndex]);
});

//Adds the detials from the array to the html elements
function createUI(roomKey){
    const room = roomDetails[roomKey];

    //Error handeling for when the index is not found
    if (!room) {
        console.error("Room not found!");
        return;
    }

    document.getElementById("roomType").textContent = room.type;
    document.getElementById("descriptionParagraph").textContent = room.paragraph;

    document.getElementById("roomAmenities").innerHTML = room.amenities.map(amenity => `<li>${amenity}</li>`).join("");
    document.getElementById("roomFeatures").innerHTML = room.features.map(feature => `<li>${feature}</li>`).join("");

    document.getElementById("roomImg").style.backgroundImage = "url('" + room.image + "')";
    
}