

"use strict";




let hoursWork = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm','4pm','5pm','6pm','7pm'];

// let totalOneHour = [];
// let totalAvg=[];

 function random(min , max){

    return Math.floor(Math.random() * (max - min) + min);
 }



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


         


        
        

}

seattle.getRandonmForEatchHour();

seattle.getCookiesForEatchOne();

console.log(seattle);

seattle.render();








let Tokyo = {

    name: "Tokyo",
    avg: 1.2 ,
    cookiesOneHour :[],
    custmerOneHour:[],
    min : 3 ,
    max :24,
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


     


    
    

}



Tokyo.getRandonmForEatchHour();

Tokyo.getCookiesForEatchOne();

console.log(Tokyo);
Tokyo.render();








let Dubai = {

    name: "Dubai",
    avg: 3.7 ,
    cookiesOneHour :[],
    custmerOneHour:[],
    min : 11 ,
    max :38,
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


     


    
    

}



Dubai.getRandonmForEatchHour();

Dubai.getCookiesForEatchOne();

console.log(Dubai);
Dubai.render();







let Paris = {

    name: "Paris",
    avg: 2.3 ,
    cookiesOneHour :[],
    custmerOneHour:[],
    min : 20 ,
    max :38,
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


     


    
    

}



Paris.getRandonmForEatchHour();

Paris.getCookiesForEatchOne();

console.log(Dubai);
Paris.render();





let Lima = {

    name: "Lima",
    avg: 4.6 ,
    cookiesOneHour :[],
    custmerOneHour:[],
    min : 2 ,
    max :16,
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


     


    
    

}



Lima.getRandonmForEatchHour();

Lima.getCookiesForEatchOne();

console.log(Dubai);
Lima.render();
