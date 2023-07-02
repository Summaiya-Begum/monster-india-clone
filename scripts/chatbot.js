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