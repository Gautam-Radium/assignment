
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.height = '100vh';


const main = document.querySelector('.main');

main.style.height = '100vh';
main.style.margin = '0';
main.style.padding = '0';
main.style.display = 'grid';
//for rows 
main.style.gridTemplateColumns = '1fr 1fr';  
// for columns
main.style.gridTemplateRows = '1fr 1fr';     
main.style.gap = '5px';                      
main.style.boxSizing = 'border-box';

// 4 divisions
let topleft_div=document.createElement("div")
topleft_div.className="topleft"
document.querySelector(".main").appendChild(topleft_div)

let bottomleft_div=document.createElement("div")
bottomleft_div.className="bottomleft"
document.querySelector(".main").appendChild(bottomleft_div)

let topright_div=document.createElement("div")
topright_div.className="topright"
document.querySelector(".main").appendChild(topright_div)

let bottomright_div=document.createElement("div")
bottomright_div.className="bottomright"
document.querySelector(".main").appendChild(bottomright_div)

topleft_div.style.gridArea='1/1/2/2'
topright_div.style.gridArea='1/2/2/3'
bottomleft_div.style.gridArea='2/1/3/2'
bottomright_div.style.gridArea='2/2/3/3'

topleft_div.style.display = "flex";
topleft_div.style.justifyContent = "center";
topleft_div.style.alignItems = "center";

topright_div.style.display = "flex";
topright_div.style.justifyContent = "center";
topright_div.style.alignItems = "center";

bottomleft_div.style.display = "flex";
bottomleft_div.style.justifyContent = "center";
bottomleft_div.style.alignItems = "center";

bottomright_div.style.display = "flex";
bottomright_div.style.justifyContent = "center";
bottomright_div.style.alignItems = "center";

// initial state of the quadranyts
topleft_div.style.backgroundColor = 'white';
topright_div.style.backgroundColor = 'white';
bottomleft_div.style.backgroundColor = 'white';
bottomright_div.style.backgroundColor = 'white';

let topleft_text = document.createElement("p");
topleft_text.textContent = "HI,I AM ORANGE";
topleft_text.style.color = "white";
topleft_text.style.textAlign = "center";

let topright_text = document.createElement("p");
topright_text.textContent = "HI,I AM PINK";
topright_text.style.color = "white";
topright_text.style.textAlign = "center";

let bottomleft_text = document.createElement("p");
bottomleft_text.textContent = "HI,I AM PURPLE";
bottomleft_text.style.color = "white";
bottomleft_text.style.textAlign = "center";

let bottomright_text = document.createElement("p");
bottomright_text.textContent = "HI,I AM BROWN";
bottomright_text.style.color = "white";
bottomright_text.style.textAlign = "center";

topleft_div.addEventListener("mouseenter", function() {
    topleft_div.style.backgroundColor = "Orange";
   // shows text
    topleft_div.appendChild(topleft_text); 
});

topleft_div.addEventListener("mouseleave", function() {
    topleft_div.style.backgroundColor = "white";
    if (topleft_text.parentNode) {
    // hides text
    topleft_div.removeChild(topleft_text); 
    }
});

topright_div.addEventListener("mouseenter", function() {
    topright_div.style.backgroundColor = "pink";
   // shows text
    topright_div.appendChild(topright_text); 
});

topright_div.addEventListener("mouseleave", function() {
    topright_div.style.backgroundColor = "white";
    if (topright_text.parentNode) {
        // hides text
        topright_div.removeChild(topright_text); 
    }
});

bottomleft_div.addEventListener("mouseenter", function() {
    bottomleft_div.style.backgroundColor = "purple";
    // shows text
    bottomleft_div.appendChild(bottomleft_text);  
});

bottomleft_div.addEventListener("mouseleave", function() {
    bottomleft_div.style.backgroundColor = "white";
    if (bottomleft_text.parentNode) {
     // hides text\
    bottomleft_div.removeChild(bottomleft_text);
    }
});

bottomright_div.addEventListener("mouseenter", function() {
    bottomright_div.style.backgroundColor = "brown";
    // shows text
    bottomright_div.appendChild(bottomright_text);    
});

bottomright_div.addEventListener("mouseleave", function() {
    bottomright_div.style.backgroundColor = "white";
    if (bottomright_text.parentNode) {
        // hides text
        bottomright_text.removeChild(bottomright_text); 
    }
});