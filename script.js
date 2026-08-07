const cards = [


{
image:"images/Card_01.png",
title:"SUBJECT 01",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_02.png",
title:"SUBJECT 02",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_03.png",
title:"SUBJECT 03",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_04.png",
title:"SUBJECT 04",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_05.png",
title:"SUBJECT 05",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_06.png",
title:"SUBJECT 06",
narrative:"",
text:"",   
credits:""
},

{
image:"images/Card_07.png",
title:"SUBJECT 07",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_08.png",
title:"SUBJECT 08",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_09.png",
title:"OBJECT 09",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_10.png",
title:"SUBJECT 10",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_11.png",
title:"SUBJECT 11",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_12.png",
title:"SUBJECT 12",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_13.png",
title:"SUBJECT 13",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_14.png",
title:"SUBJECT 14",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_15.png",
title:"SUBJECT 15",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_16.png",
title:"SUBJECT 16",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_17.png",
title:"SUBJECT 17",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_18.png",
title:"SUBJECT 18",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_19.png",
title:"SUBJECT 19",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_20.png",
title:"SUBJECT 20",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_21.png",
title:"SUBJECT 21",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_22.png",
title:"SUBJECT 22",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_23.png",
title:"SUBJECT 23",
narrative:"The apparent fragility isn't weakness— it is sensitivity",
text:`The subject believes they are hanging by a thread, but the thread is the source of their stability.
What seems fragile is the very force that creates balance. There is no fall because there is no separation. The upper spiral carries consciousness; the lower spiral carries the unconscious. The bridge joins them, and the bell waits for the moment when silence becomes sound.`,   
credits:""
},



{
image:"images/Card_24.png",
title:"SUBJECT 24",
narrative:"The weak feeling isn't lack of power.",
text:`The Queen has entered the stage where power no longer announces itself.
She experiences emptiness because she is no longer attached to the old image of strength. Her sword has disappeared because it has moved from her hand into her essence. What looks like weakness is the quiet space before action.`,   
credits:""
},



{
image:"images/Card_25.png",
title:"SUBJECT 25",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_26.png",
title:"SUBJECT 26",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_27.png",
title:"SUBJECT 27",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_28.png",
title:"SUBJECT 28",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_29.png",
title:"SUBJECT 29",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_30.png",
title:"SUBJECT 30",
narrative:"I will fly anyway, whatever you will say.",
text:`But you don't need wings to fly.

You can fly in many different ways. Sometimes, when the pain takes over, it becomes difficult to see other possibilities. Our view becomes smaller, and we forget that there are still many directions we can go.

That is why the angel is turned around. The angel is full of pain and sorrow, and it needs to turn around to gain new energy at the threshold of change.

It is time to see what is behind you. It is time to open your mind to see.

You will fly,
Wherever you want to fly,
And cry.`,
    
credits:""
},


{
image:"images/Card_31.png",
title:"SUBJECT 31",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_32.png",
title:"SUBJECT 32",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_33.png",
title:"SUBJECT 33",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_34.png",
title:"SUBJECT 34",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_35.png",
title:"SUBJECT 35",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_36.png",
title:"SUBJECT 36",
narrative:"",
text:"",   
credits:""
},






{
title:"phil.institute",
narrative:"Digital version of the hidden cards of Brussels.",
text:`→ Observe where the card has landed.

→ See which direction the card is looking.

→ How is the relation from the Card to the Image?

→ Click on the card, read an interpretation.



Context:
Over the years, I have made objects that touched something in me. Explaining exactly what that is has always been difficult. They often appeared before I understood why they mattered.
I don't see these objects as fixed symbols or answers. Instead, I invite you to explore them, follow your own associations, and let them speak to you in your own way.

This project inspired by the symbolic world of Tarot and the visual thinking of Aby Warburg.`,
credits:`<a href="https://www.instagram.com/phil.institute" target="_blank">Social Med</a>`
},

];






let currentCard;
let previousCard = null;

let infoOpen = false;
let archiveOpen = false;
let descriptionOpen = false;


const cardImage=document.getElementById("cardImage");

const singleCard=document.getElementById("singleCard");

const archiveGrid=document.getElementById("archiveGrid");

const left = document.getElementById("left");

const description=document.getElementById("description");

const title=document.getElementById("title");

const narrative=document.getElementById("narrative");

const text=document.getElementById("text");

const credits=document.getElementById("credits");

const archiveLine = document.getElementById("archiveLine");

const info = document.getElementById("info");

const archiveLink = document.getElementById("archiveLink");

// MOBILE

const mobileCard = document.getElementById("mobileCard");
const mobileImage = document.getElementById("mobileImage");

const mobileTitle = document.getElementById("mobileTitle");
const mobileNarrative = document.getElementById("mobileNarrative");
const mobileText = document.getElementById("mobileText");
const mobileCredits = document.getElementById("mobileCredits");

const mobileArchiveGrid = document.getElementById("mobileArchiveGrid");






// RANDOM FIRST CARD

function updateDescription() {

    title.innerHTML = currentCard.title || "";
    narrative.innerHTML = currentCard.narrative || "";
    text.innerHTML = currentCard.text || "";
    credits.innerHTML = currentCard.credits || "";

}

function randomCard(){


    let oracleChoice = Oracle.read(cards);


    currentCard = cards[oracleChoice];


    cardImage.src = currentCard.image;


    let x = Math.random() * 60 + 20;
    let y = Math.random() * 50 + 25;

    let rotation = Math.random() * 360;

    let scale = Math.random() * 0.25 + 0.9;



    cardImage.style.left = x + "%";
    cardImage.style.top = y + "%";


    cardImage.style.transform =
    `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`;


}


randomCard();
cardImage.onclick = function(){

    if(right.style.display === "flex"){

        right.style.display = "none";
        hideArchiveLine();

    } else {

        right.style.display = "flex";
        showArchiveLine();
        updateDescription();

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

function showArchiveLine(){
    archiveLine.style.display = "block";
}


function hideArchiveLine(){
    archiveLine.style.display = "none";
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

    img.className="archiveImage";


    // RANDOM EMPTY SPACES (30%)

    if(Math.random() < 0.3){

        img.style.visibility="hidden";

        archiveGrid.appendChild(img);

        return;

    }


    img.src=card.image;


   img.onclick=function(){

    currentCard = card;

    archiveGrid.style.display = "none";
    singleCard.style.display = "flex";
    
    archiveOpen = false;
    archiveLink.classList.remove("active");

    cardImage.style.display = "block";

    cardImage.src = card.image;


    // random placement
    let x = Math.random() * 80 + 10;
    let y = Math.random() * 70 + 10;
    let rotation = Math.random() * 360;


    cardImage.style.left = x + "%";
    cardImage.style.top = y + "%";

    cardImage.style.transform =
        `translate(-50%, -50%) rotate(${rotation}deg)`;


    cardImage.classList.remove("firstCard");


    // hide text first
    right.style.display = "none";

    hideArchiveLine();


    // second click on card opens text
  let descriptionOpen = false;


};


    archiveGrid.appendChild(img);


});







// OPEN ARCHIVE



info.style.opacity = "1";


info.onclick = function(){

  if(infoOpen){

    // close information

    currentCard = previousCard;

    hideArchiveLine();

    right.style.display = "none";

    cardImage.style.display = "block";

    info.classList.remove("active");

    infoOpen = false;


    } else {


        // open information

        showArchiveLine();

        previousCard = currentCard;
        currentCard = cards.find(card => card.title === "phil.institute");


        archiveGrid.style.display = "none";

        singleCard.style.display = "flex";

        right.style.display = "flex";


        cardImage.style.display = "none";


        title.innerHTML = currentCard.title;

        narrative.innerHTML = currentCard.narrative;

        text.innerHTML = currentCard.text;

        credits.innerHTML = currentCard.credits || "";


        info.classList.add("active");

        infoOpen = true;

    }

};







archiveLink.onclick = function(){

    if(archiveOpen){

        // close archive

        archiveGrid.style.display = "none";
        singleCard.style.display = "flex";

        archiveLink.classList.remove("active");

        archiveOpen = false;


    } else {


        // open archive

        info.classList.remove("active");

        singleCard.style.display = "none";

        archiveGrid.style.display = "grid";

        hideArchiveLine();

        right.style.display = "none";



        document.querySelectorAll(".archiveImage").forEach(img => {

            img.style.visibility = "visible";

        });


        archiveLink.classList.add("active");

        archiveOpen = true;

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


    let mobileArchiveCards = [...cards];

mobileArchiveCards.sort(() => Math.random() - 0.5);


mobileArchiveCards.forEach(card=>{

    let img=document.createElement("img");


    // same empty space system as desktop

    if(Math.random() < 0.3){

        img.style.visibility="hidden";

        mobileArchiveGrid.appendChild(img);

        return;

    }


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



// info

mobileAbout.onclick = function(){

    mobileMenu.classList.remove("open");

    previousCard = currentCard;

    currentCard = cards.find(card => card.title === "phil.institute");

    updateMobileCard(currentCard);

    mobileCard.classList.add("flipped");

};
