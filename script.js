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
    `
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








// RANDOM FIRST CARD


function randomCard(){


let number=Math.floor(Math.random()*cards.length);


currentCard=cards[number];


cardImage.src=currentCard.image;


}


randomCard();















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

    cardImage.src=card.image;

    archiveGrid.style.display="none";

    singleCard.style.display="flex";

    cardImage.classList.add("selected");

    title.innerHTML=card.title;

    narrative.innerHTML=card.narrative;

    text.innerHTML=card.text;

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



