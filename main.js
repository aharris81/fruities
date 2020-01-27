var fruit1 = {
title: "banana",
description: "long yellow fruit with a peel",
image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2309&q=80"
};
    
function banana() {
var container = document.querySelector("#container");
var title = document.createElement("h2");
var description = document.createElement("p");
var bananaImage = document.createElement("img");
    
title.innerHTML = fruit1.title;
description.innerHTML = fruit1.description;
bananaImage.src = fruit1.image;
    
title.className = "bananaTitle";
description.className = "bananaDescription";
bananaImage.className = "bananaImage";
    
container.appendChild(title);
container.appendChild(bananaImage);
container.appendChild(description);
}

var fruit2 = {
title: "grapefruit",
description: "a spherical, segmented pink center with a yellow-orange peel",
image: "https://images.unsplash.com/photo-1528826194825-a71b700fe80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2002&q=80"
};

function grapefruit() {
var container2 = document.querySelector("#container2");
var title2 = document.createElement("h2");
var description2 = document.createElement("p");
var grapefruitImage = document.createElement("img");

title2.innerHTML = fruit2.title;
description2.innerHTML = fruit2.description;
grapefruitImage.src = fruit2.image;

title2.className = "grapefruitTitle";
description2.className = "grapefruitDescription";
grapefruitImage.className = "grapefruitImage";

container2.appendChild(title2);
container2.appendChild(grapefruitImage);
container2.appendChild(description2);
}

var fruit3 = {
title: "dragonfruit",
description: "spikey purpley pink peel with a spotted inside",
image: "https://images.unsplash.com/photo-1560070094-e1f2ddec4337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
};
    
function dragonfruit() {
var container3 = document.querySelector("#container3");
var title3 = document.createElement("h2");
var description3 = document.createElement("p");
var dragonfruitImage = document.createElement("img");
    
title3.innerHTML = fruit3.title;
description3.innerHTML = fruit3.description;
dragonfruitImage.src = fruit3.image;
    
title3.className = "dragonfruitTitle";
description3.className = "dragonfruitDescription";
dragonfruitImage.className = "dragonfruitImage";
    
container3.appendChild(title3);
container3.appendChild(dragonfruitImage);
container3.appendChild(description3);
}

var fruit4 = {
title: "avacado",
description: "pear shaped thing guac is made from (yes, its a fruit)",
image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"
};
        
function avacado() {
var container4 = document.querySelector("#container4");
var title4 = document.createElement("h2");
var description4 = document.createElement("p");
var avacadoImage = document.createElement("img");
        
title4.innerHTML = fruit4.title;
description4.innerHTML = fruit4.description;
avacadoImage.src = fruit4.image;
        
title4.className = "avacadoTitle";
description4.className = "avacadoDescription";
avacadoImage.className = "avacadoImage";
        
container4.appendChild(title4);
container4.appendChild(avacadoImage);
container4.appendChild(description4);
}

var fruit5 = {
title: "mango",
description: "everyones favorite fruit",
image: "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
};
        
function mango() {
var container5 = document.querySelector("#container5");
var title5 = document.createElement("h2");
var description5 = document.createElement("p");
var mangoImage = document.createElement("img");
        
title5.innerHTML = fruit5.title;
description5.innerHTML = fruit5.description;
mangoImage.src = fruit5.image;
        
title5.className = "mangoTitle";
description5.className = "mangoDescription";
mangoImage.className = "mangoImage";
        
container5.appendChild(title5);
container5.appendChild(mangoImage);
container5.appendChild(description5);

// tried to toggel these ways: (didn't work)

/* if (fruit5.style.display === "") {
    fruit5.style.display = "none";
} else if (fruit5.style.display === "none") {
    fruit5.style.display = "";
} */


/* if (description5.style.display === "") {
    description5.style.display = "none";
} else if (description5.style.display === "none") {
    description5.style.display = "";
}

if (mangoImage.style.display === "") {
    mangoImage.style.display = "none";
} else if (mangoImage.style.display === "none") {
    mangoImage.style.display = "";
}

if (title5.style.display === "") {
    title5.style.display = "none";
} else if (title5.style.display === "none") {
    title5.style.display = "";
} */
}
