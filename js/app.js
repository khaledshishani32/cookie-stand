

"use strict";




let hoursWork = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



let store = [];

function randomNumber(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
}



function Shop(name, min, max, avg) {

    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookiesOneHour = [];
    this.custmerOneHour = [];
    this.totalCookies = 0;
    store.push(this);


}



Shop.prototype.calCustEachOneHour = function () {

    return randomNumber(this.min, this.max);


}

Shop.prototype.calCookiesForEachHour = function () {



    for (let i = 0; i < hoursWork.length; i++) {

        this.cookiesOneHour.push(Math.floor(this.calCustEachOneHour() * this.avg));
        this.totalCookies += this.cookiesOneHour[i];



    }

    //console.log(this.cookiesOneHour);

}


const seattle = new Shop("Seattle", 20, 38, 2.3);
const tokyo = new Shop("Tokyo", 3, 24, 1.2);
const dubai = new Shop("Dubai", 11, 38, 3.7);
const paris = new Shop("paris", 20, 38, 2.3);
const lima = new Shop("Lima", 2, 16, 4.6);




let parent = document.getElementById('cookiesSales');

let table = document.createElement('table');
parent.appendChild(table);


function createHeader() {


        let headRow =document.createElement('tr');
        table.appendChild(headRow);


        let firstHeadRow=document.createElement('th');
        headRow.appendChild(firstHeadRow);
        firstHeadRow.textContent="Name";

        for(let i =0 ; i< hoursWork.length ; i++){

            let hoursHeadRow = document.createElement('th');
            headRow.appendChild(hoursHeadRow);
            hoursHeadRow.textContent=hoursWork[i];
                      
        }
         
        let lastCellOnTopHeadRow =document.createElement('th');
        headRow.appendChild(lastCellOnTopHeadRow);
        lastCellOnTopHeadRow.textContent='Daily Location total';


}


Shop.prototype.render = function (){
   
    let storeRow = document.createElement('tr');
    table.appendChild(storeRow);

    let shopName = document.createElement('td');
    storeRow.appendChild(shopName);
    shopName.textContent =this.name;


    for(let i = 0 ; i < hoursWork.length ; i++){

      let allDataRows = document.createElement('td');
      storeRow.appendChild(allDataRows);

      allDataRows.textContent=this.cookiesOneHour[i];


    }

    let finalCellTotal = document.createElement('td');
    storeRow.appendChild(finalCellTotal);
    finalCellTotal.textContent=this.totalCookies;



}



function creatFooter(){
 
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);
    
    let firstCell = document.createElement('th');
    footerRow.appendChild(firstCell);

    firstCell.textContent="Totals";


    let totalForEachHour ;
    let TotalOfTotal = 0;

    for(let i = 0 ; i<hoursWork.length ; i++){

      totalForEachHour = 0 ;
        for(let j = 0 ; j <store.length ; j++){
            
            totalForEachHour+=store[j].cookiesOneHour[i];
            TotalOfTotal+=store[j].cookiesOneHour[i];
        }

        let lastCell = document.createElement('td');
        footerRow.appendChild(lastCell);


        lastCell.textContent=totalForEachHour;
    }
 

    let lastColOnTable = document.createElement('td');
    footerRow.appendChild(lastColOnTable);

    lastColOnTable.textContent=TotalOfTotal;

}


//get the values from sales form 




 let shopForm=document.getElementById('shop-form');

 console.log(shopForm);

  shopForm.addEventListener('submit' , submission);


  function submission(event){

    event.preventDefault();

    console.log(event) ;


    let name=event.target.nameShop.value;
    console.log(name);

    let minimum=event.target.min.value;
    console.log(minimum);


    let maximum=event.target.max.value;
    console.log(maximum);

    
    let average=event.target.avg.value;
    console.log(average);

    let addNewShop = new Shop(name , minimum , maximum , average);
    console.log(addNewShop);

    let btn = document.querySelector('.button');
    btn.style.background ='red';
    
    document.querySelector('#shop-form').style.background='#112d4e';
    //  addNewShop.calCookiesForEachHour();
    
     
    //  addNewShop.render();
     
     table.textContent =" " ;
    
    createHeader();
    for(let i = 0 ; i<store.length ;i++){
        store[i].calCookiesForEachHour();
        store[i].render();
    }
  
   creatFooter();
    
            

  }



 createHeader();
  for(let i = 0 ; i<store.length ;i++){
      store[i].calCookiesForEachHour();
      store[i].render();
  }

 creatFooter();

 
