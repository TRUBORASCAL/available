


const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');
 const movielist = ['vid/hero-1.mp4','vid/hero-2.mp4','vid/hero-3.mp4','vid/hero-4.mp4'];

 let i=0;
 nextButton.addEventListener('click',function(){
    i=i+1;
    video.src=movielist[i];
    if(i===3){
        i=-1;
    }
 })
