'use strict'


var hours = ["6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM"]

var seattleStore = {
    name: "seattle",
     MinCust: 23,
     MaxCust: 65,
     Average: 6.3,
    hourlyCustomers:[],
    hourlyCookies:[],
    storeId : 'seattleStore-ul',
    createHours : createHours,
    renderToPage : renderToPage, 
}
    function renderToPage(){
        var seattleList = document.getElementById(this.storeId); // getElementById takes an argument of the id as a string
    // 2. new element
    var newListItem = document.createElement('h3');
    // 2.5 content
    newListItem.textContent = this.name;
    // 3. put it on page
    seattleList.appendChild(newListItem);
    // ==============
    // 2. new element
    for(var i = 0; i < 14; i++ ){
    var newListItem = document.createElement('li');
    // 2.5 content
    newListItem.textContent = hours[i] + ' cookies' + ' ' + this.hourlyCookies[i];
    // 3. put it on page
    seattleList.appendChild(newListItem);
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
            function createHours() {
                console.log(this.MinCust);
                for(var i = 0; i < 14; i++ ){
                    var getCust = Math.floor(getRandomArbitrary(this.MinCust, this.MaxCust));
                    console.log(getCust);
                    this.hourlyCookies.push(Math.floor(this.Average * getCust));
                }
            }

// function totalTheCookies(){
//     var total = 0
//     return total
// }
// seattleStore.prototype.createHours = createHours;

// seattleStore.prototype.renderToPage = renderToPage;

seattleStore.createHours()
seattleStore.renderToPage()

// var tokyoStore = {
//     name: "Tokyo",
//      tokyoMinCust: 23,
//      tokyoMaxCust: 65,
//      tokyoAverage: 6.3,
//     hourlyCustomers:[],
//     hourlyCookies:[],
// }


// console.log(getRandomArbitrary(tokyoStore.tokyoMinCust, tokyoStore.tokyoMaxCust));
var tokyoStore = {
    name: "tokyo",
     MinCust: 3,
     MaxCust: 24,
     Average: 1.2,
    hourlyCustomers:[],
    hourlyCookies:[],
    storeId : 'tokyoStore-ul',
    createHours : createHours,
    renderToPage : renderToPage, 
}

tokyoStore.createHours()
tokyoStore.renderToPage()


// console.log(getRandomArbitrary(dubaiStore.dubaiMinCust, dubaiStore.dubaiMaxCust));

var dubaiStore = {
    name: "dubai",
     MinCust: 11,
     MaxCust: 38,
     Average: 3.7,
    hourlyCustomers:[],
    hourlyCookies:[],
    storeId : 'dubaiStore-ul',
    createHours : createHours,
    renderToPage : renderToPage, 
}

dubaiStore.createHours()
dubaiStore.renderToPage()

// console.log(getRandomArbitrary(parisStore.parisMinCust, parisStore.parisMaxCust));

var parisStore = {
    name: "paris",
     MinCust: 20,
     MaxCust: 38,
     Average: 2.3,
    hourlyCustomers:[],
    hourlyCookies:[],
    storeId : 'parisStore-ul',
    createHours : createHours,
    renderToPage : renderToPage, 
}

parisStore.createHours()
parisStore.renderToPage()



// console.log(getRandomArbitrary(limaStore.limaMinCust, limaStore.limaMaxCust));

var limaStore = {
    name: "lima",
     MinCust: 2,
     MaxCust: 16,
     Average: 4.6,
    hourlyCustomers:[],
    hourlyCookies:[],
    storeId : 'limaStore-ul',
    createHours : createHours,
    renderToPage : renderToPage, 
}

limaStore.createHours()
limaStore.renderToPage()


// var DubaiMinCust: 11;
// var seattleMaxCust: 38;
// var SeattleAverage: 3.7;

// var parisMinCust: 20;
// var parisMaxCust: 38;
// var parisAverage: 2.3;

// var limaMinCust: 2;
// var limaMaxCust: 16;
// var limaAverage: 4.6;

// var randomCookiesSeattle 


// tokyoStore.renderToPage()












// document.getElementById("store2").innerHTML = "this is how we pass text";