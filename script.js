var counter = 1;

//
//function changeImage(){   
//    const cards = document.querySelector(".card");
//    cards.classList.add("show");
//    counter++;
//    if(counter > 4){
//        counter = 1;
//    }
//    
//}
setInterval(() => {
    document.querySelector(".card.show").classList.remove("show");
    const cards = document.querySelector(`.card-${counter}`);
    cards.classList.add("show");
//    cards.style.background = `#fff url("image/ang-${counter}.jpg") no-repeat fixed center`;
    counter++;
    
    if(counter >4){
        counter = 1;
    }
    
},2000);

//window.onload = changeImage;