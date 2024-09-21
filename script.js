let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-DC"
    window.speechSynthesis.speak(text_speak)
}

function wishme(){
 let day= new Date()
 let hours= day.getHours()
 if(hours>=0 && hours<12){
    speak("Good Morning Sir")
    console.log("Morning"); 
 }
 else if(hours>=12 && hours<16){
    speak("Good Afternoon Sir")
    console.log("After Nooon");
 }
 else{
    speak("Good Evening Sir")
    console.log("Evening");
    
 }
}
window.addEventListener("load",()=>{
    wishme()
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new  speechRecognition()
recognition.onresult= (event)=>{
let currentIndex =  event.resultIndex
let transcript = event.results[currentIndex][0].transcript
content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display= "none"
    voice.style.display= "block"
})
function takeCommand(message){
     btn.style.display= "flex"
    voice.style.display= "none"
    if(message.includes("hello chitti") || message.includes("hi chitti")){
        speak("helo sir, what can i help you?")
    }
    else if(message.includes("who are you") || message.includes("hu r u")){
        speak("i am virtual assistant , Created By Ankit  billore")
    }
    else if(message.includes("how are you") || message.includes("how r u")){
        speak("i am Fine , tu kesa he rishav madarchod.  bhen ke labde  ")
    }
    else if(message.includes("what can you do")){
        speak("I Was Assigned A Limited Question To Serve, So Please Click The document button in right top corner ,  For ask a Assigned Question , ")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube..")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram..")
        window.open("https://www.instagram.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook..")
        window.open("https://www.facebook.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google..")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("open Calculator")){
        speak("opening calculator..")
        window.open("calculator://","_blank")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://","_blank")
    }
    else if(message.includes("open linkedin")){
        speak("opening linkedin..")
        window.open("linkedin://","_blank")
    }
    else if(message.includes("time")){
       let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
       speak(time)
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
        speak(date)
     }
    else{
        let finaltext = "This is What I Found on internet regarding" + message.replace("Chitti","")
        speak(finaltext)
        window.open(`https://www.google.com/search?q=${message.replace("chitti","")}`,"_blank")
    }
}


let Dcmt = document.querySelector(".Dcmt")
let down = document.querySelector(".down")
let data = document.querySelector(".data")

let flag = 0
Dcmt.addEventListener("click",()=>{
   if(flag==0){
    down.style.rotate="180deg"
    data.classList.remove("hidden")
    let tl =  gsap.timeline()
   tl.from(".boxes",{
    y:-65,
    duration:0.8,
    stagger:0.1
})
    flag=1
   }else{
    down.style.rotate="360deg"
    data.classList.add("hidden")
    flag=0
   }
    
})



