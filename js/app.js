

"use strict";




let hoursWork = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7];

let totalOneHour = [];
let totalAvg=[];

let seattle = {

        name: "seattle",

        getRandonmForEatchHour: function (min, max) {


            

            for (let i = 0; i < hoursWork.length; i++) {

                let resultSingleRandom = Math.floor(Math.random() * (max - min)) + min;
                totalOneHour.push(resultSingleRandom);

            }

            console.log(totalOneHour);

        },

        getAvgForEatchOne:function(totalOneHour){

            
            let avg = 6.3;
            for(let i = 0 ; i < totalOneHour.length ; i++){
               
                let resultSingleAvg =  Math.floor(totalOneHour[i] *  avg) ;
                totalAvg.push(resultSingleAvg);
            }

            console.log(totalAvg);

        },

         getTotalCookies:function(totalAvg){
             
              let totalCookies = 0;
                for(let i = 0 ; i < totalAvg.length ;i++){

                 let cookies = totalAvg[i];

                 totalCookies+= cookies;

                 }

                 console.log(totalCookies);
         },

         


        
        

}

seattle.getRandonmForEatchHour(23,65);

seattle.getAvgForEatchOne(totalOneHour);

seattle.getTotalCookies(totalAvg);









 let parent=document.getElementById('cookiesSales');
 console.log(parent);


 let articleElement = document.createElement('article');
 parent.appendChild(articleElement);


 let h2Element=document.createElement('h2');
 articleElement.appendChild(h2Element);

 h2Element.textContent='Pat\s Salmon Cookies : Sales Data';



 let paraElenent = document.createElement('p');
 articleElement.appendChild(paraElenent);
 paraElenent.textContent=seattle.name;



 // create ul
 let ulElement=document.createElement('ul');

 // append
 articleElement.appendChild(ulElement);


 for(let i =0;i<hoursWork.length ;i++){
     // create li
     let liElement=document.createElement('li');

     // appending li
     ulElement.appendChild(liElement);

     // text content
     liElement.textContent=`${hoursWork[i]}am: ${totalAvg[i]} cookies`;

     // if(i === hoursWork.length +1)
     // liElement.textContent=`Total:${totalCookies}cookies`;      
    
 }






