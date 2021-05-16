/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll(`section`);         // here i selected all sections and saved the items in array 
let navBar = document.querySelector(`#navbar__list`);        // here i selected the navbar 
var screen =document.documentElement.scrollTop;


// creation function 

let createNavBarElements = function(){
    
    // create the home tap
        let home = document.createElement(`li`);
        home.innerHTML = `<a href="#">Home</a>`;
        navBar.appendChild(home);
    // end 
    
    
    
    
    
    //create the ul elements based on the sections in html page
    
let freg = document.createDocumentFragment();     // due to performance we used create document fragment
    
    for (let i = 0 ; i< sections.length ; i++)   
        {
         let li = document.createElement(`li`);
            li.innerHTML = `<a class= "d_links"  data-link="${sections[i].id}"  > ${sections[i].id} </a>`;
            li.classList.add("links");
            freg.appendChild(li);
        } 
    navBar.appendChild(freg);
       
//end 
    
    
    
    
    // smooth scroll 
    
    let scroll = function(evt){
        let targetDataLink = evt.target.getAttribute("data-link");   //no i get the target   -link that is clicked-
        document.getElementById(`${targetDataLink}`).scrollIntoView({behavior:"smooth",block:"start"});
       // targetId.scrollIntoView({behavior:"smooth",block:"start"});
        console.log(targetDataLink);
    }
       
navBar.addEventListener("click",scroll);               // i make an event listener to the navbar as a parent  
    
}

// end smooth scroll 


createNavBarElements();      // calling the function



let links = document.getElementsByClassName("d_links");



// detect the section in the view 

document.addEventListener('scroll', function(){
    //console.log("scrolled");
     for (let i = 0 ; i< sections.length ; i++)
        {
            sections[i].classList.remove("active");
            links[i].classList.remove("active");
            let positon = sections[i].getBoundingClientRect();
            
            if( screen+10 >= positon.top && screen+3<positon.bottom)
                {
                    sections[i].classList.add("active");
                    links[i].classList.add("active");
                }
          
        } 
});

//end 




