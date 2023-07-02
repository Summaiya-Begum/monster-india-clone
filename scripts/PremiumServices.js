import navbar from "../component/navbar.js";
 document.querySelector(".main_container").innerHTML=navbar();
 import footer from "../component/footer.js";
document.querySelector("#footer746").innerHTML=footer();

let popup=document.getElementById("popup");

document.querySelector("#benifitsbtn>a").addEventListener("click",(e)=>{
    e.preventDefault();
    // openPopup();
    console.log('dadad')
    let image=document.querySelector(".popup>div:first-child>img");
    image.src="https://media.monsterindia.com/trex/public/default/images/career-services/featured-profile-services.png";
    let h2=document.querySelector(".popup>div:last-child>h2");
    h2.innerText="FEATURED PROFILE";
    let h1=document.querySelector(".popup>div:last-child>h1");
    h1.innerText="Benifits";
    let p1=document.querySelector("#one");
    p1.innerText="Your profile is upfront when recruiters search candidate like you";
    let p2=document.querySelector("#two");
    p2.innerText="You are showcased as an active job seeker who is keenly looking";
    let p3=document.querySelector("#three");
    p3.innerText="Increase your chances of getting shortlisted in an interview";
    let button=document.querySelector("#starting_amount");
    button.innerText="Starting at Rs.1999";

    popup.classList.add("open-popup")

})
document.querySelector("#closepopup").addEventListener("click",(e)=>{
    e.preventDefault();
    // closePopup();
    popup.classList.remove("open-popup")
    window.location.reload();

})

document.querySelector("#benifitsbtn2>a").addEventListener("click",(e)=>{
    e.preventDefault();
    // openPopup();
    console.log('dadad');
    let image=document.querySelector(".popup>div:first-child>img");
    image.src="https://media.monsterindia.com/trex/public/default/images/career-services/resume-writing-services.png";
    let h2=document.querySelector(".popup>div:last-child>h2");
    h2.innerText="RESUME WRITING";
    let h1=document.querySelector(".popup>div:last-child>h1");
    h1.innerText="Benifits";
    let p1=document.querySelector("#one");
    p1.innerText="Clearly Stated Objective Targeting the job you're looking for";
    let p2=document.querySelector("#two");
    p2.innerText="Work History in the right chronological order";
    let p3=document.querySelector("#three");
    p3.innerText="Highlight your education background and key skills";
    let p4=document.querySelector("#four");
    p4.innerText="Use of Keywords in a way that Aplication Tracker ranks you";
    let p5=document.querySelector("#five");
    p5.innerText="A Cover letter that helps you get to the interview stage";
    let button=document.querySelector("#starting_amount");
    button.innerText="Starting at Rs.2499";

    popup.classList.add("open-popup")

})

document.querySelector("#benifitsbtn3>a").addEventListener("click",(e)=>{
    e.preventDefault();
    // openPopup();
    console.log('dadad');
    let image=document.querySelector(".popup>div:first-child>img");
    image.src="https://media.monsterindia.com/trex/public/default/images/career-services/resume-writing-services.png";
    let h2=document.querySelector(".popup>div:last-child>h2");
    h2.innerText="CAREER BOOSTER";
    let h1=document.querySelector(".popup>div:last-child>h1");
    h1.innerText="Benifits";
    let p1=document.querySelector("#one");
    p1.innerText="Use of Keywords in a way that Aplication Tracker ranks you";
    let p2=document.querySelector("#two");
    p2.innerText="Get professionally written resume which helps you get your dream job";
    
    let button=document.querySelector("#starting_amount");
    button.innerText="Starting at Rs.3999";

    popup.classList.add("open-popup")

})

document.querySelector("#callMeBack").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("inside");
    document.querySelector(".form").innerHTML=null;
    let img=document.createElement("img");
    img.src="https://media.monsterindia.com/trex/public/default/images/career-services/career-contactUs/success.svg";
    img.style.height="200px";
    img.style.marginTop="60px";
    let h2=document.createElement("h2");
    h2.innerText="Thank You";
    h2.style.textAlign="center";
    let p=document.createElement("p");
    p.innerText="We’ve received your request and will call you back within 48 hours.";
    p.style.textAlign="center";

    document.querySelector(".form").append(img,h2,p);

})

let popup2=document.getElementById("chatbot");
document.querySelector("#chatbotDiv").addEventListener("click",()=>{
    console.log("inside");
    popup2.classList.add("open-popup")
})
    
    

    



document.querySelector("#closeChatbot").addEventListener("click",()=>{
    
    
    console.log("inside");
    popup2.classList.remove("open-popup")

    


})

know={
    "Hello":" &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Hi there! Are you looking for a Job change?",
    "Who are you?":"&nbsp&nbsp&nbsp&nbsp&nbsp&nbspI am Robot",
    "How are you?":"&nbsp&nbsp&nbsp&nbsp&nbsp&nbspI am fine",
    "No":"&nbsp&nbsp&nbsp&nbsp&nbsp&nbspUnderstood! There is special discount of upto 30% on our Paid Career Services. Would you like to explore?",
    "Yes":"&nbsp&nbsp&nbsp&nbsp&nbsp&nbspLet me connect to an Agent. To begin with, Can you please share your name?",
    "Subhajit Saha":"Hi Subhajit!. Thanks for your patience please wait while the line is beign connected to one of our agents....."
};
let talk=()=>{
    var user=document.getElementById("userBox").value;
    document.getElementById("userBox").value="";
    document.getElementById("chatLog").innerHTML+=user+"<br>";
    if (user in know){
        document.getElementById("chatLog").innerHTML+=know[user]+"<br>";
    }
    else{
        document.getElementById("chatLog").innerHTML+="&nbsp&nbsp&nbsp&nbsp&nbsp&nbspI dont understand...<br>";
    }
}
//check if login or not


import Logout from "./logout.js";
Logout()