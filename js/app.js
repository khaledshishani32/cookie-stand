

"use strict";




let hoursWork = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



let LocationsArr = [];  

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
    LocationsArr.push(this);


}





Location.prototype.getRandonmForEatchHour = function () {



    for (let i = 0; i < hoursWork.length; i++) {


        this.custmerOneHour.push(random(this.min, this.max));

    }

    //console.log(this.custmerOneHour);

}

Location.prototype.getCookiesForEatchOne = function () {



    for (let i = 0; i < hoursWork.length; i++) {

        this.cookiesOneHour.push(Math.floor(this.custmerOneHour[i] * this.avg));
        this.totalCookies += this.cookiesOneHour[i];



    }

    console.log(this.cookiesOneHour);

}

Location.prototype.render = function () {


    
   
    
   
           
      

     for(let j = 0 ; j<LocationsArr.length ; j++){
             
        let middelRows= document.createElement('tr');
        table.appendChild(middelRows);
           
          
        for(let i = 0 ; i<hoursWork.length  ; i++){

               
            
            let tdElement =document.createElement('td');
    
            middelRows.appendChild(tdElement);
    
            tdElement.textContent=LocationsArr[j].cookiesOneHour[i];

      }



     }

       
    
   


    // let totalLiElement = document.createElement('li');

    // ulElement.appendChild(totalLiElement);


    // totalLiElement.textContent = `Total: ${this.totalCookies} cookies`




}


let parent = document.getElementById('cookiesSales');
    

            let table = document.createElement('table');
            parent.appendChild(table);


            let headerTable= document.createElement('tr');
            table.appendChild(headerTable);

            let headings = [ '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
            
            for(let i = 0 ; i<= headings.length  ; i++){


                let thElement =document.createElement('th');

                headerTable.appendChild(thElement);

                thElement.textContent=headings[i];
            }



  
 


    
//     Location.prototype.render = function () {

//    for(let i = 0 ; i < LocationsArr.length ; i++){

//    let locationRaw=document.createElement('tr');

//    table.appendChild(locationRaw);


//    let locatonData = document.createElement("td");

//    locationRaw.appendChild(locatonData);
//    locatonData.textContent= LocationsArr[i].name; 




  
//    }

// }

//console.log(LocationsArr.cookiesOneHour);



 let Seattle = new Location("Seattle", 20, 38, 2.3);
 Seattle.getRandonmForEatchHour();
 Seattle.getCookiesForEatchOne();
 Seattle.render();

 //console.log(paris.cookiesOneHour);


  let Tokyo = new Location("Tokyo",3, 24, 1.2);
  Tokyo.getRandonmForEatchHour();
  Tokyo.getCookiesForEatchOne();
  Tokyo.render();

 
 let Dubai = new Location("Dubai", 11 , 38, 3.7);
 Dubai.getRandonmForEatchHour();
 Dubai.getCookiesForEatchOne();
 Dubai.render();



let paris = new Location("paris", 20, 38, 2.3);
 paris.getRandonmForEatchHour();
 paris.getCookiesForEatchOne();
 paris.render();


 let Lima = new Location("Lima", 2 ,16, 4.6);
 Lima.getRandonmForEatchHour();
 Lima.getCookiesForEatchOne();
 Lima.render();


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






