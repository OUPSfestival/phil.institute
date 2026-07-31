const cards = [


{
image:"images/Card01.png",
title:"",
text:""
},


{
image:"images/Card02.png",
title:"",
text:""
},


{
image:"images/Card03.png",
title:"",
text:""
},


{
image:"images/Card04.png",
title:"",
text:""
},


{
image:"images/Card05.png",
title:"",
text:""
},


{
image:"images/Card06.png",
title:"",
text:""
},

{
image:"images/Card07.png",
title:"",
text:""
},


{
image:"images/Card08.png",
title:"",
text:""
},


{
image:"images/Card09.png",
title:"",
text:""
},

{
    image:"images/Card10.png",
    title:"BROKEN WINGS",
    narrative:"I will fly anyway, whatever you will say.",
    text:`
   If you have found or chosen this object, it might be that you have experienced some difficulties recently, it felt like it was hard to recover from them, like something inside you was broken and it was difficult to move forward.

But you don’t need wings to fly.

You can fly in many different ways. Sometimes, when the pain takes over, it becomes difficult to see other possibilities. Our view becomes smaller, and we forget that there are still many directions we can go.

That is why the angel is turned around. The angel is full of pain and sorrow, and it needs to turn around to gain new energy at the threshold of change.

It is time to turn around and see what is behind you. It is time to open your view and notice what is still possible.

You will fly.
Wherever you want to fly.

And please, don’t be afraid to cry.
    `,
    
    credits:"object by Manuel Bischof"

},


{
image:"images/Card11.png",
title:"",
text:""
},


{
image:"images/Card12.png",
title:"",
text:""
},


{
title:"ABOUT",
narrative:"An Institute for Tutut by Manuel Phil. Bischof",
text:`An Institute for Tutut is a fictional, yet somehow real, project inspired by the symbolic world of Tarot and the visual thinking of Aby Warburg.

Over the years, I have made objects that touched something in me. Explaining exactly what that is has always been difficult. They often appeared before I understood why they mattered.

As a human being, I keep making meaning from the things I encounter and create. Over time, each object and each card has gathered its own stories, memories, and associations. This archive is my way of holding those connections together.

I don't see these objects as fixed symbols or answers. Instead, I invite you to explore them, follow your own associations, and let them speak to you in your own way.`,
credits:`<a href="https://www.instagram.com/phil.institute" target="_blank">social media</a>`
},

];






let currentCard;



const cardImage=document.getElementById("cardImage");

const singleCard=document.getElementById("singleCard");

const archiveGrid=document.getElementById("archiveGrid");

const archiveButton=document.getElementById("archiveButton");

const left = document.getElementById("left");

const description=document.getElementById("description");

const title=document.getElementById("title");

const narrative=document.getElementById("narrative");

const text=document.getElementById("text");

const credits=document.getElementById("credits");

// MOBILE

const mobileCard = document.getElementById("mobileCard");
const mobileImage = document.getElementById("mobileImage");

const mobileTitle = document.getElementById("mobileTitle");
const mobileNarrative = document.getElementById("mobileNarrative");
const mobileText = document.getElementById("mobileText");
const mobileCredits = document.getElementById("mobileCredits");

const mobileArchiveGrid = document.getElementById("mobileArchiveGrid");






// RANDOM FIRST CARD


function randomCard(){


let number=Math.floor(Math.random()*cards.length);


currentCard=cards[number];


cardImage.src=currentCard.image;


}


randomCard();
cardImage.onclick = function(){

    title.innerHTML = currentCard.title || "";
    narrative.innerHTML = currentCard.narrative || "";
    text.innerHTML = currentCard.text || "";

    if(currentCard.credits){
        credits.innerHTML = currentCard.credits;
    } else {
        credits.innerHTML = "";
    }

};



function updateMobileCard(card){

    mobileImage.src = card.image || "";

    mobileTitle.innerHTML = card.title || "";

    mobileNarrative.innerHTML = card.narrative || "";

    mobileText.innerHTML = card.text || "";

    if(card.credits){
        mobileCredits.innerHTML = card.credits;
    } else {
        mobileCredits.innerHTML = "";
    }

}


updateMobileCard(currentCard);













// CREATE ARCHIVE ORDER
// keep current card as second item

let archiveCards = cards.filter(card => card !== currentCard);

archiveCards.sort(() => Math.random() - 0.5);

archiveCards.splice(4, 0, currentCard);



// CREATE ARCHIVE GRID


archiveCards.forEach((card, index)=>{


let img=document.createElement("img");


img.src=card.image;


img.className="archiveImage";

if(index !== 1){

     img.style.visibility="hidden";

}




img.onclick=function(){

    currentCard=card;

    updateMobileCard(currentCard);

    cardImage.style.display = "block";
    cardImage.src=card.image;

    archiveGrid.style.display="none";
    singleCard.style.display="flex";

    cardImage.classList.add("selected");

    title.innerHTML=card.title;
    narrative.innerHTML=card.narrative;
    text.innerHTML=card.text;

    if (card.credits) {
    credits.innerHTML = card.credits;
    } else {
    credits.innerHTML = "";
    }

};



archiveGrid.appendChild(img);



});







// OPEN ARCHIVE


archiveButton.onclick=function(){

    singleCard.style.display = "none";
    archiveGrid.style.display="grid";


    document.querySelectorAll(".archiveImage").forEach(img=>{

        img.style.visibility="visible";

    });


    const secondRowCard = document.querySelectorAll(".archiveImage")[3];

    const target =
        secondRowCard.offsetTop - 200;

    left.scrollTop = target;




};

setTimeout(function() {
    document.getElementById("leftLabel").classList.add("show");
}, 10000);


const flash = document.getElementById("flash");
const leftLabel = document.getElementById("leftLabel");

leftLabel.onclick = function(){

    flash.style.opacity = "0.7";

    setTimeout(() => flash.style.opacity = "0", 40);

    setTimeout(() => flash.style.opacity = "0.7", 90);

    setTimeout(() => flash.style.opacity = "0", 130);

    setTimeout(() => flash.style.opacity = "0.7", 180);

    setTimeout(() => flash.style.opacity = "0", 220);

};

const rightLabel = document.getElementById("rightLabel");

rightLabel.onclick = function(){

    currentCard = cards.find(card => card.title === "ABOUT");

    updateMobileCard(currentCard);

    archiveGrid.style.display = "none";
    singleCard.style.display = "flex";

    // hide image area
    cardImage.style.display = "none";

    title.innerHTML = currentCard.title;
    narrative.innerHTML = currentCard.narrative;
    text.innerHTML = currentCard.text;

    if (currentCard.credits) {
    credits.innerHTML = currentCard.credits;
    } else {
    credits.innerHTML = "";
    }

};


// MOBILE FLIP

if(mobileCard){

    mobileCard.onclick = function(){

        mobileCard.classList.toggle("flipped");

    };

}


// MOBILE MENU


const mobileMenuButton = document.getElementById("mobileMenuButton");

const mobileMenu = document.getElementById("mobileMenu");


mobileMenuButton.onclick = function(){

    mobileMenu.classList.toggle("open");

};



// RELOAD / SHUFFLE

const mobileShuffle = document.getElementById("mobileShuffle");


mobileShuffle.onclick = function(){

    location.reload();

};


// MOBILE MENU LINKS

const mobileArchive = document.getElementById("mobileArchive");
const mobileAbout = document.getElementById("mobileAbout");


// archive

mobileArchive.onclick = function(){

    mobileMenu.classList.remove("open");

    mobileCard.style.display="none";

    mobileArchiveGrid.style.display="grid";


    mobileArchiveGrid.innerHTML="";


    cards.forEach(card=>{

        let img=document.createElement("img");

        img.src=card.image;

        img.onclick=function(){

            currentCard=card;

            updateMobileCard(currentCard);

            mobileArchiveGrid.style.display="none";

            mobileCard.style.display="block";

        };


        mobileArchiveGrid.appendChild(img);

    });

};



// about

mobileAbout.onclick = function(){

    mobileMenu.classList.remove("open");

    currentCard = cards.find(card => card.title === "ABOUT");

    updateMobileCard(currentCard);

    mobileCard.classList.add("flipped");

};