// =====================================
// LIVING ORACLE
// =====================================

const Oracle = {

    particles: [],
    count: 111

};


// =====================================
// CREATE PARTICLES
// =====================================

Oracle.init = function(){

    for(let i = 0; i < Oracle.count; i++){

        Oracle.particles.push({

            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,

            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5

        });

    }

};



// =====================================
// MOVE PARTICLES
// =====================================

Oracle.update = function(){

    for(let p of Oracle.particles){

        p.x += p.vx;
        p.y += p.vy;


        if(p.x < 0)
            p.x = window.innerWidth;

        if(p.x > window.innerWidth)
            p.x = 0;


        if(p.y < 0)
            p.y = window.innerHeight;

        if(p.y > window.innerHeight)
            p.y = 0;

    }


    requestAnimationFrame(Oracle.update);

};




// =====================================
// ASK ORACLE
// =====================================

Oracle.read = function(cards){


    let scores = [];


    for(let i = 0; i < cards.length; i++){


        let score = 0;


        // create invisible position for every card

        let cardX = (i + 1) * 37 % window.innerWidth;
        let cardY = (i + 1) * 83 % window.innerHeight;



        for(let particle of Oracle.particles){


            let dx = particle.x - cardX;
            let dy = particle.y - cardY;


            let distance = Math.sqrt(
                dx * dx + dy * dy
            );


            score += 1 / (distance + 1);


        }


        scores.push(score);


    }



    let winner = 0;


    for(let i = 1; i < scores.length; i++){


        if(scores[i] > scores[winner]){

            winner = i;

        }

    }



    return winner;


};




// START ORACLE

Oracle.init();
Oracle.update();
