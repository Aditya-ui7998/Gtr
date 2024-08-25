function cursorEffect(){
    var page1Content= document.querySelector('.page1-content');
    var cursor= document.querySelector('.cursor-move');
    
    
    // page1Content.addEventListener('mousemove',(dets)=>{
    // //console.log(dets)//so here dets basically gives me the details whenever the mouse is moving on the page1Content.if i do dets.x then it will tell me the location where my mouse is on x-axis and same goes for y.
    
    // cursor.style.left=dets.x+'px';//so pixel is bcz u don't say someone ki left se 50 chla ja kyuki woo to ek number hai na so we have to give unit ki kitna px,cm etc jana hai .
    // cursor.style.top=dets.y
    // +'px';
    // })
    
    // gsap.to(Selectedelement),{
    //  x:500;
    //  y;500   
    // } //using gsap.to we select the element then inside brackets we write the function on which we want to use gsap then after that inside curly braces we write our code.
    
    page1Content.addEventListener('mousemove',(dets)=>{
        gsap.to(cursor,{
         x:dets.x,
         y:dets.y
        })
    })
    page1Content.addEventListener('mouseenter',()=>{
        gsap.to(cursor,{
            opacity:1,
            scale:1
        })
    });
    page1Content.addEventListener('mouseleave',()=>{
        gsap.to(cursor,{
            opacity:0,
            scale:0
        })
    })
};
cursorEffect();

// function fontUp(){


//    var spam= document.querySelector('.f');

//    function inviewPort(spam){
//     const rect = spam.getBoundingClientRect();
//     return(
//         rect.top>=0 &&
//         rect.left<=0 &&

//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&

//         rect.right  <= (window.innerWidth || document.documentElement.clientWidth) 

//     )
//    };
//    function handleScroll(){
//     if(inviewPort(letter)){
//         letter.classList.add('.scroll');
//         window.removeEventListener('scroll', handleScroll);
//     }
//    }

// }
// window.addEventListener('scroll', handleScroll);

var page2Ani=gsap.timeline();
page2Ani.from('.page2-middle h2',{
    y:40,
    opacity:0,
    duration:1,
    stagger:0.1,
    delay:3,
})

var page1Ani = gsap.timeline();
page1Ani.from('.page1-content h1 span',{
    y:100,
    stagger:0.1,
    opacity:0,
    delay:2,
});

var loader=gsap.timeline();
loader.from('.loader h3',{
    opacity:0,
    x:50,
    stagger:0.1,
    duration:1,
});
loader.to('.loader h3',{
    x:-50,
    duration:1,
    opacity:0,
});
loader.to('.loader',{
    opacity:0,
}
);
loader.to('.loader',{
    display:'none',
}
);

// SWIPER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //background animation
let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 850
  });
  
  tl.add({
    targets: 'section .item',
    width: '100%',
    backgroundColor: '#F6A9BD',
    delay: anime.stagger(100)
  });
  
  tl.add({
    targets: 'section .item',
    delay: anime.stagger(70),
    width: '97%',
    backgroundColor: '#F4E0E1'
  });
  
  tl.add({
    targets: 'section .item',
    backgroundColor: '#FFFFFF',
    delay: anime.stagger(50,{from: 'center'})
  });
  
  tl.add({
    targets: '.text',
    top: '49%',
    duration: 4500,
    opacity: 1
  }, '-=1000')
  
  //text animation
  
//   var text = document.querySelector('.jump-effect');
//   text.addEventListener('mouseover',()=>{
//     const letters=text.textContent.split('');
//     text.textContent='';

//     letters.forEach(letter=>{
//         const span = document.createElement('span');
//         span.textContent=letter //: It sets the text content of the <span> element to the current letter in the iteration.
//         span.className='letter';
//         text.appendChild(span);
//     });
//     anime.timeline()
//     .add({
//       targets: '.letter',
//       translateY: [
//         { value: -20, duration: 150, easing: 'easeInOutQuad' },
//         { value: 0, duration: 150, easing: 'easeInOutQuad' }
//       ],
//       delay: (el, i) => 50 * i // Delay each letter's animation
//     });

//  });


//GPT CODE -------------
var texts = document.querySelectorAll('.jump-effect');

texts.forEach(text => {
  text.addEventListener('mouseover', () => {
    const letters = text.textContent.trim(); // Trim to remove extra spaces and line breaks
    text.textContent = ''; // Clear the text content

    letters.split('').forEach(letter => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.className = 'letter';
      text.appendChild(span);
    });

    anime.timeline()
      .add({
        targets: '.letter',
        translateY: [
          { value: -20, duration: 150, easing: 'easeInOutQuad' },
          { value: 0, duration: 150, easing: 'easeInOutQuad' }
        ],
        delay: (el, i) => 50 * i // Delay each letter's animation
      });
  });
});
