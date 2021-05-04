let mainWindow = document.getElementsByClassName("Main")[0]
let toggler = document.getElementById("toggler");
let toggled = false; // Means the menu bar is expanded
let sideMenuLinks = [...document.getElementsByClassName("side-link")];

let myOrdersAngle = document.querySelector('#myOrdersAngle');
let myOrdersSubMenu = document.querySelector('#myOrdersSubMenu');
let myFleetAngle = document.querySelector('#myFleetAngle');
let myFleetSubMenu = document.querySelector('#myFleetSubMenu');


toggler.addEventListener('click', () => {
    mainWindow.style.marginLeft = toggled ? '20%': '3%';
    mainWindow.style.width = toggled ? '80%': '97%';
    toggled = !toggled
})

sideMenuLinks.map(element => {
    element.addEventListener('click', () => {

        // Remove active and textWhite from all other Links
        sideMenuLinks.map(sideMenuLink => {
            sideMenuLink.classList.add('text-dark');
            sideMenuLink.classList.remove('text-white');
            sideMenuLink.classList.remove('pl-2');
            sideMenuLink.classList.remove('active');
        });
        element.classList.remove('text-dark');
        element.classList.add('pl-2');
        element.classList.add('text-white');
        element.classList.add('active');
    })
});

// OrderAngleStates
let orderMenuExpanded = false;
let fleetMenuExpanded = false;

document.getElementById("myFleets").addEventListener('click', () => {
    fleetMenuExpanded = !fleetMenuExpanded;
    myOrdersSubMenu.style.display = "none";
    if(fleetMenuExpanded){
        myFleetAngle.classList.remove("fa-angle-down");
        myFleetAngle.classList.add("fa-angle-right");
        
    }else {
        myFleetAngle.classList.remove("fa-angle-right");
        myFleetAngle.classList.add("fa-angle-down");
    }   
    
});

document.getElementById("myOrders").addEventListener('click', () => {
    orderMenuExpanded = !orderMenuExpanded;
    myFleetSubMenu.style.display = "none";
    if(orderMenuExpanded){
        myOrdersAngle.classList.remove("fa-angle-down");
        myOrdersAngle.classList.add("fa-angle-right");        
    }else {
        myOrdersAngle.classList.remove("fa-angle-right");
        myOrdersAngle.classList.add("fa-angle-down");
    }    
});