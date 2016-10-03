var $ = function (id) {
    return document.getElementById(id);
};

// declaring variables
var i = 0;
var thumbOne = 14;
var thumbTwo = 0;
var thumbThree = 1;
var thumbFour = 2;
var thumbFive = 3;
var image = new Image();
var image2 = new Image();


// declaring arrays
var images = ["thumbs/thumb01.jpg", "thumbs/thumb02.jpg", "thumbs/thumb03.jpg", "thumbs/thumb04.jpg", "thumbs/thumb05.jpg",
              "thumbs/thumb06.jpg", "thumbs/thumb07.jpg", "thumbs/thumb08.jpg", "thumbs/thumb09.jpg", "thumbs/thumb10.jpg",
              "thumbs/thumb11.jpg", "thumbs/thumb12.jpg", "thumbs/thumb13.jpg", "thumbs/thumb14.jpg", "thumbs/thumb15.jpg"];

var largeImages = ["images/image01.jpg", "images/image02.jpg", "images/image03.jpg", "images/image04.jpg", "images/image05.jpg",
                   "images/image06.jpg", "images/image07.jpg", "images/image08.jpg", "images/image09.jpg", "images/image10.jpg",
                   "images/image11.jpg", "images/image12.jpg", "images/image13.jpg", "images/image14.jpg",
                   "images/image15.jpg"];

var title = ["Spectators", "Farm Fields", "Submarines", "ATVs", "Long open roads", "Statues", "Steep descents", "Big Chicken",
             "Sunrise", "Rivers", "Shady Bike Paths", "Limited coverage", "Accidental Tattoos", "Parks", "Historic Land Marks"];

var descripton = ["Cows are prevalent in Wisconsin.", "Lots of different crops can be seen.",
                  "People in rural areas must be waiting for a crazy flood.",
                  "People will use just a about any mode of transportation to get around.",
                  "Some times the scenery doesn't change for some time.",
                  "Look out for interesting statues.",
                  "Downhill is fine most of the time, but when you hit over 35 mile per hour, things get a bit unstable.",
                  "This chicken is about 5 feet tall. Who doesn't like a big chicken?",
                  "Sunrise can be a beautiful, as long as you have had a cup of coffee.",
                  "There is something that attracts us to large bodies of water.",
                  "Tree covered trails provide a cool ride in the heat of the day.",
                  "Cellular data coverage is not everywhere. ",
                  "The 52 tooth road tiger can jump out and bite you.",
                  "Parks can be a great place to stop for rest and some water.",
                  "Sometimes you can find a history lesson. Here Lincoln and Douglas have a presidential debate."];


var count = images.length; // number of items in the array

// loading images
function preload() {
    "use strict";
    for (i = 0; i < count; i++) {
        image.src = images[i];
        image2.src = largeImages[i];
        images.push(image);
        largeImages.push(image2);
    }
}



//changing thumbs to the right
function changeThumbRight() {
    "use strict";

    thumbOne++;
    if (thumbOne === count) {
        thumbOne = 0;
    }
    $("buttonOne").src = images[thumbOne];

    thumbTwo++;
    if (thumbTwo === count) {
        thumbTwo = 0;
    }
    $("buttonTwo").src = images[thumbTwo];

    thumbThree++;
    if (thumbThree === count) {
        thumbThree = 0;
    }
    $("buttonThree").src = images[thumbThree];

    thumbFour++;
    if (thumbFour === count) {
        thumbFour = 0;
    }
    $("buttonFour").src = images[thumbFour];

    thumbFive++;
    if (thumbFive === count) {
        thumbFive = 0;
    }
    $("buttonFive").src = images[thumbFive];
}

// changing thumbs to the left
function changeThumbLeft() {
    "use strict";
    thumbOne--;
    if (thumbOne < 0) {
        thumbOne = 14;
    }
    $("buttonOne").src = images[thumbOne];

    thumbTwo--;
    if (thumbTwo < 0) {
        thumbTwo = 14;
    }
    $("buttonTwo").src = images[thumbTwo];

    thumbThree--;
    if (thumbThree < 0) {
        thumbThree = 14;
    }
    $("buttonThree").src = images[thumbThree];

    thumbFour--;
    if (thumbFour < 0) {
        thumbFour = 14;
    }
    $("buttonFour").src = images[thumbFour];

    thumbFive--;
    if (thumbFive < 0) {
        thumbFive = 14;
    }
    $("buttonFive").src = images[thumbFive];
}

// button control
function buttonNumOne() {
    "use strict";
    $("large").src = largeImages[thumbOne];
    $("title").innerHTML = title[thumbOne];
    $("detail").innerHTML = descripton[thumbOne];
}
function buttonNumTwo() {
    "use strict";
    $("large").src = largeImages[thumbTwo];
    $("title").innerHTML = title[thumbTwo];
    $("detail").innerHTML = descripton[thumbTwo];
}
function buttonNumThree() {
    "use strict";
    $("large").src = largeImages[thumbThree];
    $("title").innerHTML = title[thumbThree];
    $("detail").innerHTML = descripton[thumbThree];
}
function buttonNumFour() {
    "use strict";
    $("large").src = largeImages[thumbFour];
    $("title").innerHTML = title[thumbFour];
    $("detail").innerHTML = descripton[thumbFour];
}
function buttonNumFive() {
    "use strict";
    $("large").src = largeImages[thumbFive];
    $("title").innerHTML = title[thumbFive];
    $("detail").innerHTML = descripton[thumbFive];
}



function onload() {
    "use strict";
    preload();
}