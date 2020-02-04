
function mouseMove() {
    var x = event.pageX;
    var y = event.pageY;
    var cursor = document.querySelector("#cursor");
   cursor.style.left = x-15 + "px";
   cursor.style.top = y-15 + "px";
}
function clickColor() {
    var cursor = document.querySelector("#cursor"); 
    cursor.style.backgroundColor = "black";
}

function releaseColor() {
    var cursor = document.querySelector("#cursor");
    cursor.style.backgroundColor = "rgb(63, 63, 63)";
}

var fruit1 = {
title: "banana",
description: "long yellow fruit with a peel",
//image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2309&q=80"
};
    
var counter1 = 0;

function banana() {
    console.log("banana")
var container = document.querySelector("#container");
var title = document.createElement("h2");
var description = document.createElement("p");
var bananaImage = document.createElement("img");

if (counter1 < 1) {
title.innerHTML = fruit1.title;
description.innerHTML = fruit1.description;
//bananaImage.src = fruit1.image;
    
title.className = "bananaTitle";
description.className = "bananaDescription";
bananaImage.className = "bananaImage";
    
container.appendChild(title);
//container.appendChild(bananaImage);
container.appendChild(description);
}
counter1 +=1;
}

var counter2 = 0;
var fruit2 = {
title: "grapefruit",
description: "a spherical, segmented pink center with a yellow-orange peel",
//image: "https://images.unsplash.com/photo-1528826194825-a71b700fe80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2002&q=80"
};

function grapefruit() {
    console.log("grapefruit");
var container2 = document.querySelector("#container2");
var title2 = document.createElement("h2");
var description2 = document.createElement("p");
var grapefruitImage = document.createElement("img");

if (counter2 < 1) {
title2.innerHTML = fruit2.title;
description2.innerHTML = fruit2.description;
//grapefruitImage.src = fruit2.image;

title2.className = "grapefruitTitle";
description2.className = "grapefruitDescription";
grapefruitImage.className = "grapefruitImage";

container2.appendChild(title2);
//container2.appendChild(grapefruitImage);
container2.appendChild(description2);
}
counter2 +=1;
}

var counter3 = 0;
var fruit3 = {
title: "dragonfruit",
description: "spikey purpley pink peel with a spotted inside",
//image: "https://images.unsplash.com/photo-1560070094-e1f2ddec4337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
};
    
function dragonfruit() {
    console.log("dragondruit")
var container3 = document.querySelector("#container3");
var title3 = document.createElement("h2");
var description3 = document.createElement("p");
var dragonfruitImage = document.createElement("img");

if (counter3 < 1) {
title3.innerHTML = fruit3.title;
description3.innerHTML = fruit3.description;
//dragonfruitImage.src = fruit3.image;
    
title3.className = "dragonfruitTitle";
description3.className = "dragonfruitDescription";
//dragonfruitImage.className = "dragonfruitImage";
    
container3.appendChild(title3);
//container3.appendChild(dragonfruitImage);
container3.appendChild(description3);
}
counter3 += 1;
}

var counter4 = 0;
var fruit4 = {
title: "avacado",
description: "pear shaped thing guac is made from (yes, its a fruit)",
//image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"
};
        
function avocado() {
    console.log("avacado");
var container4 = document.querySelector("#container4");
var title4 = document.createElement("h2");
var description4 = document.createElement("p");
var avocadoImage = document.createElement("img");

if (counter4 < 1) {
title4.innerHTML = fruit4.title;
description4.innerHTML = fruit4.description;
//avocadoImage.src = fruit4.image;
        
title4.className = "avocadoTitle";
description4.className = "avocadoDescription";
avocadoImage.className = "avocadoImage";
        
container4.appendChild(title4);
//container4.appendChild(avocadoImage);
container4.appendChild(description4);
}
counter4 += 1;
};

var fruit5 = {
title: "mango",
description: "everyones favorite fruit",
//image: "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
}

var counter5 = 0;

function mango() {
    console.log("mango");
var container5 = document.querySelector("#container5");
var title5 = document.createElement("h2");
var description5 = document.createElement("p");
var mangoImage = document.createElement("img");

if (counter5 < 1) {
title5.innerHTML = fruit5.title;
description5.innerHTML = fruit5.description;
//mangoImage.src = fruit5.image;
        
title5.className = "mangoTitle";
description5.className = "mangoDescription";
mangoImage.className = "mangoImage";
        
container5.appendChild(title5);
container5.appendChild(mangoImage);
container5.appendChild(description5);
}
counter5 += 1; 
};

// tried to toggel these ways: (didn't work)

/* if (fruit5.style.display === "") {
    fruit5.style.display = "none";
} else if (fruit5.style.display === "none") {
    fruit5.style.display = "";
} 

if (description5.style.display === "") {
    description5.style.display = "none";
} else if (description5.style.display === "none") {
    description5.style.display = "";
}

if (title5.style.display === "") {
    title5.style.display = "none";
} else if (title5.style.display === "none") {
    title5.style.display = "";
} 
*/

 var fruit6 = {
    image: "./assets/fruit salad.png"
    };

var counter6 = 0;

function myFunction() {
    var container6 = document.querySelector("#container6");
    var fruitSaladImage = document.createElement("img");
    
    if (counter6 < 1) {
    fruitSaladImage.src = fruit6.image;
        
    image.className = "fruitSaladImage";
            
    container4.appendChild(fruitSaladImage);
    }
    counter6 += 1;
    }
    

