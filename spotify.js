console.log("Welcome to Spotify");
let songlist = Array.from(document.getElementsByClassName("songItem"));
// console.log(songlist);


// let audioElement = new Audio('1.mp3');

//  audioElement.play();

// declaration of variable
let songIndex =0;
let audioElement = new Audio("2.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgessbar = document.getElementById("myProgessbar");
let gif = document.getElementById('gif');
let gif2 = Array.from(document.getElementsByClassName("gif2"));
// console.log(gif2);
let songs = [
    {songName: "rockepic-dramatic-action", filePath:"1.mp3",coverPath: "image/1.jpg"},
    {songName: "dandle", filePath:"2.mp3",coverPath: "Image/2.jpg"},
    {songName: "epic-dramatic-action-trailer", filePath:"3.mp3",coverPath: "Image/3.jpg "},
    {songName: "hip-hop-rock-beats", filePath:"4.mp3",coverPath: "Image/4.jpg "},
    {songName: "Powerful-Trap", filePath:"5.mp3",coverPath: "Image/5.jpg "},
    {songName: "rock-opener", filePath:"6.mp3",coverPath: "Image/6.jpg "},
    {songName: "stomp-rock-action", filePath:"7.mp3",coverPath: "Image/7.jpg "},
    {songName: "the-extreme-rock", filePath:"8.mp3",coverPath: "Image/8.jpg "},
    {songName: "arabic-trap", filePath:"9.mp3",coverPath: "Image/9.jpg "},
    {songName: "hip-hop-rock-beats", filePath:"10.mp3",coverPath: "Image/10.jpg "},
]
songlist.forEach((element,i) => {

    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});
//handle pouse click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        try{
            audioElement.play();
        }
        catch(err){
          console.log(err);  
        }
          
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
 
    }
})
// listen to event
audioElement.addEventListener('timeupdate', ()=>{
  console.log("timeupadate");
  if(audioElement.currentTime === audioElement.duration){
    masterPlay.classList.remove('fa-pause-circle');
masterPlay.classList.add("fa-circle-play");
gif.style.opacity = 0;
}
  //upadate seek bar
  let progess = parseInt((audioElement.currentTime/audioElement.duration)*100);
  console.log(progess)
  myProgessbar.value = progess;
})
myProgessbar.addEventListener('change',()=>{
    audioElement.currentTime= myProgessbar.value*audioElement.duration/100 
})

const makeAllplay = (element,i )=>{
    Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add("fa-circle-play");
        })
    }


Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
  element.addEventListener('click',(e)=>{

     console.log(e);
    makeAllplay();
    
     index = parseInt(e.target.id);
     console.log(e.target.id);
     console.log(index)
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add('fa-pause-circle');
    audioElement.currentTime =0;
    audioElement.src = '${index}.mp3'
    audioElement.play(index);
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-pause-circle");

 
     
  })
})