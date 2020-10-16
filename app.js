const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
   const class1= document.querySelector('.all');
  

    

    


    burger.addEventListener('click',() => {
        //toggle nav
        nav.classList.toggle('nav-active');
       class1.classList.toggle('all1');
        

//animate lins
        navLinks.forEach((link, index) => {

            if(link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation = `navLinkFade 0.9s ease forwards ${index / 7 + 0.3}s`;
            }
               
              
           
           });
//burger animation
burger.classList.toggle('toggle');




     


    });




     




 


}
const navS = () =>{
 const contact= document.querySelector('.formbtn');
    const na = document.querySelector('.form1');
    contact.addEventListener('click',() =>{
        na.classList.toggle('.show');


    });
}



const mycall = () =>{
    navSlide();
    navS();
}

mycall();






