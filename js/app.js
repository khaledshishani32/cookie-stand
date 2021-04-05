

"use strict";




let hoursWork = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// let totalOneHour = [];
// let totalAvg=[];


let arr = [];  // add push in consterrct

function random(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
}



function Location(name, avg, min, max) {

    this.name = name;
    this.avg = avg;
    this.min = min;
    this.max = max;
    this.cookiesOneHour =[];
    this.custmerOneHour =[];
    this.totalCookies=0;
    arr.push(this);

}





Location.prototype.getRandonmForEatchHour = function () {



    for (let i = 0; i < hoursWork.length; i++) {


        this.custmerOneHour.push(random(this.min, this.max));

    }

    console.log(this.custmerOneHour);

}


Location.prototype.getCookiesForEatchOne = function () {



    for (let i = 0; i < hoursWork.length; i++) {

        this.cookiesOneHour.push(Math.floor(this.custmerOneHour[i] * this.avg));
        this.totalCookies += this.cookiesOneHour[i];



    }

    console.log(this.cookiesOneHour);

}




Location.prototype.render = function () {


    let parent = document.getElementById('cookiesSales');
    console.log(parent);

    let nameElement = document.createElement('h3');



    parent.appendChild(nameElement);

    nameElement.textContent = this.name;


    let ulElement = document.createElement('ul');

    parent.appendChild(ulElement);

    for (let i = 0; i < hoursWork.length; i++) {


        let liElement = document.createElement('li');

        ulElement.appendChild(liElement);


        liElement.textContent = `${hoursWork[i]}: ${this.cookiesOneHour[i]} cookies`
    }


    let totalLiElement = document.createElement('li');

    ulElement.appendChild(totalLiElement);


    totalLiElement.textContent = `Total: ${this.totalCookies} cookies`




}


let paris = new Location("paris", 20, 38, 2.3);
paris.getRandonmForEatchHour();
paris.getCookiesForEatchOne();
paris.render();








/*
let seattle = {

        name: "seattle",
        avg: 6.3 ,
        cookiesOneHour :[],
        custmerOneHour:[],
        min : 23 ,
        max :65,
        totalCookies:0,
        getRandonmForEatchHour: function () {



            for (let i = 0; i < hoursWork.length; i++) {


                this.custmerOneHour.push(random(this.min , this.max));

            }

            console.log(this.custmerOneHour);

        },

        getCookiesForEatchOne:function(){



            for(let i = 0 ; i < hoursWork.length ; i++){

               this.cookiesOneHour.push( Math.floor(this.custmerOneHour[i] *  this.avg)) ;
               this.totalCookies+=this.cookiesOneHour[i];



            }

            console.log(this.cookiesOneHour);

        },

        render:function(){


            let parent=document.getElementById('cookiesSales');
            console.log(parent);

            let nameElement = document.createElement('h3');



            parent.appendChild(nameElement);

            nameElement.textContent = this.name;


            let ulElement=document.createElement('ul');

            parent.appendChild(ulElement);

            for(let i = 0 ; i<hoursWork.length ; i++){


                let liElement=document.createElement('li');

                ulElement.appendChild(liElement);


                liElement.textContent=`${hoursWork[i]}: ${this.cookiesOneHour[i]} cookies`
            }


          let totalLiElement = document.createElement('li');

          ulElement.appendChild(totalLiElement);


          totalLiElement.textContent=`Total: ${this.totalCookies} cookies`




        }








}*/
/*
seattle.getRandonmForEatchHour();

seattle.getCookiesForEatchOne();

console.log(seattle);

seattle.render();*/






