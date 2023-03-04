///////////////////////// swiper

let swiper = new Swiper(".card_slider",{

    slidesPerView: 3,
    spaceBetween: 0,
    autoplay:{
        delay: 2000,
    },
    pagination:{
     el:".swiper-pagination",
     clickable:true,
     },
     breakpoints:{
        280:{
            slidesPerView:1,
        },
        320:{
            slidesPerView:1,
        },
        650:{
            slidesPerView:2,
        },
        1096:{
            slidesPerView:3,
        }
    },
 });

 /////////////////// tabs

 let productsDetail = {
    data: [
        {
            category:"all",
            Image: "./pics/plus.png",
        },
        {
            category:"design",
            Image: "./pics/t.png",
        },
        {
            category:"design",
            Image: "./pics/ta.png",
        },
        {
            category:"template",
            Image: "./pics/3.png",
        },
        {
          
            category: "logo",
          
            Image: "./pics/4.png",
        },
        {
       
            category:"branding",
           
            Image: "./pics/5.png",
        },
        {
            category:"logo",
          
            Image: "./pics/6.png",
        },
        {
            category:"template",
            
            Image: "./pics/7.png",
        },
        {
            category:"logo",
            Image: "./pics/8.png",
        },

    ],
};


for (let i of productsDetail.data ) {
    // for ceating card
let card = document.createElement('div');
card.classList.add('card', i.category, 'hide');

// for creating image container

let imageContainer = document.createElement("div");
imageContainer.classList.add("image-container");

// for image displaying

let imag = document.createElement("img");
imag.setAttribute("src", i.Image);
imageContainer.appendChild(imag);
card.appendChild(imageContainer);



// all show here in inner-products
document.querySelector("#inner-products").appendChild(card);

};



// products filtering

function filterProduct(value) {

    // all card selected

    let elements = document.querySelectorAll(".card");
    
    elements.forEach((element) => {
        // when click on button "all" then show all products
        if (value == 'all') {
            element.classList.remove("hide")
        }
        else {
            // check if elements contains category class
            if (element.classList.contains(value)) {
                // only same ctegory products shows
                element.classList.remove("hide");

            } else {
                // hide other elements 
                element.classList.add("hide");
            }
        };
    });
};





//
window.onload =  () => {
     filterProduct('all')
 };