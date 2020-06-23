const start = document.querySelector(".start");
const video = start.querySelector("video");
const text = start.querySelector("h1");

const section = document.querySelector("section");
const end = section.querySelector("h1");

//scrollmagic
const controller = new ScrollMagic.Controller();
// all things that you want to animate in a scene
// scene one video animate
const scene = new ScrollMagic.Scene({
    duration:9000,
    triggerElemnt:start,
    triggerHook: 0
})
    .addIndicators()
    // set pin allows for the screen to get caught until the user scrolls out of the scene
    .setPin(start)
// addscene to controller
    .addTo(controller);

//video animation
// rate that the frames of the video when scroll and the stop the frames will ease and then stop so the lower the acceleration means more delay of the frames after stop
let accelerateQ = 0.05;
let scrollpos = 0;
let delay = 0;

//this is just an event listener and the e is just an arrow function sending the event as a paramter 
scene.on("update", e =>{
    //when the user scrolls or "updates" then it will send the event and the program can get the scroll position 
    //convert to seconds px-seconds
    scrollpos = e.scrollPos/1000;
    
    
    
});

setInterval(() => {
    // add to the delay what we scroll to and then accelerate by 0.1 
    delay += (scrollpos-delay)*accelerateQ;
    console.log(scrollpos,delay);
    video.currentTime = delay;
    // run every 33.33 seconds because frame rate
},30)
