const cards = [


{
image:"images/Card_01.png",
title:"OBJECT 01",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_02.png",
title:"OBJECT 02",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_03.png",
title:"OBJECT 03",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_04.png",
title:"OBJECT 04",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_05.png",
title:"OBJECT 05",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_06.png",
title:"OBJECT 06",
narrative:"",
text:"",   
credits:""
},

{
image:"images/Card_07.png",
title:"OBJECT 07",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_08.png",
title:"OBJECT 08",
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
title:"OBJECT 10",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_11.png",
title:"OBJECT 11",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_12.png",
title:"OBJECT 12",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_13.png",
title:"OBJECT 13",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_14.png",
title:"OBJECT 14",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_15.png",
title:"OBJECT 15",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_16.png",
title:"",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_17.png",
title:"OBJECT 17",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_18.png",
title:"OBJECT 18",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_19.png",
title:"",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_20.png",
title:"OBJECT 20",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_21.png",
title:"OBJECT 21",
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
title:"OBJECT 23",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_24.png",
title:"OBJECT 24",
narrative:"The Power is here, even if you don't feel it",
text:`What if you feel silenced and empty, without any power?
This Queen is silenced, but not powerless. Her body isn't really visible, but her foundation is wide.
She can reach many energizing sources.
Her mind is sharp.
She has a dangerous scorpion tail, it is better not to mess with her.

Nobody can see her sword because she isn't holding it. The sword has an invisible, flexible bond and can be reached at any time.

The feeling of weakness isn't a lack of power.`,   
credits:""
},


{
image:"images/Card_25.png",
title:"OBJECT 25",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_26.png",
title:"OBJECT 26",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_27.png",
title:"",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_28.png",
title:"",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_29.png",
title:"OBJECT 29",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_30.png",
    title:"OBJECT 30",
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
    
credits:""
},


{
image:"images/Card_31.png",
title:"OBJECT 31",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_32.png",
title:"OBJECT 32",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_33.png",
title:"OBJECT 33",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_34.png",
title:"OBJECT 34",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_35.png",
title:"OBJECT 35",
narrative:"",
text:"",   
credits:""
},


{
image:"images/Card_36.png",
title:"OBJECT 36",
narrative:"",
text:"",   
credits:""
},



{
title:"phil.institute",
narrative:"",

text:`
→ Observe where the card has landed.

→ See which direction the card is looking.

→ How is the relation from the Card to the Image?

→ Click on the card, read an interpretation.




This project inspired by the symbolic world of Tarot and the visual thinking of Aby Warburg.

Over the years, I have made objects that touched something in me. Explaining exactly what that is has always been difficult. They often appeared before I understood why they mattered.
As a human being, I keep making meaning from the things I encounter and create. Over time, each object and each card has gathered its own stories, memories, and associations. This archive is my way of holding those connections together.
I don't see these objects as fixed symbols or answers. Instead, I invite you to explore them, follow your own associations, and let them speak to you in your own way.`,
credits:`<a href="https://www.instagram.com/phil.institute" target="_blank">social media</a>`
},

];






let currentCard;

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

    showArchiveLine();


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


cardImage.onclick = function () {

    if (right.style.display === "flex") {

        // hide text
        right.style.display = "none";
        hideArchiveLine();

    } else {

        // show text
        right.style.display = "flex";
        showArchiveLine();

        title.innerHTML = currentCard.title || "";
        narrative.innerHTML = currentCard.narrative || "";
        text.innerHTML = currentCard.text || "";
        credits.innerHTML = currentCard.credits || "";

    }

};

};


    archiveGrid.appendChild(img);


});







// OPEN ARCHIVE



info.style.opacity = "1";


info.onclick = function(){

    if(infoOpen){

        // close information

        hideArchiveLine();


        right.style.display = "none";

        cardImage.style.display = "block";

        info.classList.remove("active");

        infoOpen = false;


    } else {


        // open information

        showArchiveLine();

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
