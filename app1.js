
const settings={
    fill: 'yellowgreen',
    background: 'rgb(128,128,128)'
  }
  


  const myfunction123 =() =>{
    const sliders = document.querySelector('.range-slider');
 
  
      sliders.querySelector('input').addEventListener('input', (event)=>{
        // 1. apply our value to the span
        sliders.querySelector('span').innerHTML = event.target.value ;
      
       
        applyFill(event.target);
       
      });
     
      
      applyFill(sliders.querySelector('input'));
    
  }


var b=170, c=70;
  const myfunction1234 =() =>{
    const sliders1 = document.querySelector('.range-slider1');
 
    // Iterate through that list of sliders
    // ... this call goes through our array of sliders [slider1,slider2,slider3] and inserts them one-by-one into the code block below with the variable name (slider). We can then access each of wthem by calling slider
   
      // Look inside our slider for our input add an event listener
    //   ... the input inside addEventListener() is looking for the input action, we could change it to something like change
      sliders1.querySelector('input').addEventListener('input', (event)=>{
        // 1. apply our value to the span
        sliders1.querySelector('span').innerHTML = event.target.value +' '+ 'cm';
        b= event.target.value;
        // 2. apply our fill to the input
        applyFill(event.target);
       
      });
     
      // Don't wait for the listener, apply it now!
      applyFill(sliders1.querySelector('input'));
    
  }
  const myfunction1235 =() =>{
    const sliders2 = document.querySelector('.range-slider2');
 
    // Iterate through that list of sliders
    // ... this call goes through our array of sliders [slider1,slider2,slider3] and inserts them one-by-one into the code block below with the variable name (slider). We can then access each of wthem by calling slider
   
      // Look inside our slider for our input add an event listener
    //   ... the input inside addEventListener() is looking for the input action, we could change it to something like change
      sliders2.querySelector('input').addEventListener('input', (event)=>{
        // 1. apply our value to the span
        sliders2.querySelector('span').innerHTML = event.target.value + ' '+'kg';
      c=event.target.value;
        // 2. apply our fill to the input
        applyFill(event.target);
       
      });
     
      // Don't wait for the listener, apply it now!
      applyFill(sliders2.querySelector('input'));
    
  }
  // First find all our sliders
  
  const callme = () =>{
    myfunction123(); myfunction1234(); myfunction1235();
  }
  callme();
   
  
  // This function applies the fill to our sliders by using a linear gradient background
  function applyFill(slider) {
    // Let's turn our value into a percentage to figure out how far it is in between the min and max of our input
    const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
    // now we'll create a linear gradient that separates at the above point
    // Our background color will change here
    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
    slider.style.background = bg;
  }


function rotateImage() {
  var cat = b*b;
  var cat1= c/cat;
  var cat2 = cat1*10000;
var cat3= Math.round(cat2 * 100) / 100;

  document.getElementById("demo1").innerHTML= cat3;

    var img = document.getElementById('img123');

    if(cat3>24.9 && cat3<30){
    img.style.transform = 'rotate(95deg)';
    img.style.transition = '0.5s';
    }
    else if(cat3>30){
      img.style.transform = 'rotate(155deg)';
      img.style.transition = '0.5s';
    }
    else if(cat3<18.5){
      img.style.transform = 'rotate(-50deg)';
      img.style.transition = '0.5s';

    }
     else{
    img.style.transform = 'rotate(20deg)';
    img.style.transition = '0.5s';
     }
}

