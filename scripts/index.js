// function document.createElement(tag){
//   return document.createElement(tag)
// }
                            // Job Data Collection

                            import navbar from "../component/navbar.js";
                           document.querySelector(".main_container").innerHTML=navbar();
                            import footer from "../component/footer.js";
                           document.querySelector("#footer746").innerHTML=footer();

let  jobdata=[
    {
    
    companyName:"Hucon Solutions India Private Limited",
    jobTitle:"Customer Support Executive Customer Support Customer Service B.Com BBA BSC MBA Voice Voice Process" ,
    experience: "experience:0-5 years" ,
    locations:"Location(s):Hyderabad / Secunderabad, Telangana ",
    id:"job01",
   },
   {
		
    companyName:"Teleperformance Global Services Private Limited",
    jobTitle:"Email And Chat Process" ,
    experience: "experience:1-3 years" ,
    locations:"Location(s):Chennai",
    id:"job02",
   },
    {
    
    companyName:"Larsen & Toubro Infotech Limited",
    jobTitle:"Sourcing Executive " ,
    experience: "experience:2-5 years" ,
    locations:"Location(s):Chennai, Navi Mumbai, Thane",
    id:"job03",
   },
    {
    
    companyName:"Prime Hr Services",
    jobTitle:"Urgent Hiring for Work from Home, Data Entry Jobs, Part Time, Full Time Jobs and Home Based Jobs" ,
    experience: "experience:0-5 years" ,
    locations:"Location(s):Chennai, Delhi ",
    id:"job04",
   },
   {
    companyName:"Prime Hr Services",
    jobTitle:"Urgent Hiring for Work from Home, Data Entry Jobs, Part Time, Full Time Jobs and Home Based Jobs" ,
    experience: "experience:0-5 years" ,
    locations:"Location(s):Ahmedabad,  Bengaluru / Bangalore",
    id:"job05",
     },
   
     {
    companyName:"Prime Hr Services",
    jobTitle:"Urgent Hiring for Work from Home, Data Entry Jobs, Part Time, Full Time Jobs and Home Based Jobs" ,
    experience: "experience:0-5 years" ,
    locations:"Location(s):Kolkata, Mumbai",
    id:"job06",
     },
    {
    
    companyName:"HighPoints Technologies India Private Limited",
    jobTitle:"Architecture/Design/Development - Application Developer I" ,
    experience: "experience:5-6 years" ,
    locations:"Location(s):Bengaluru / Bangalore, Hyderabad / Secunderabad, Telangan",
    id:"job07",
     },
    {
    
    companyName:"Techknomatic Services Private Limited",
    jobTitle:"Qlik Sense Developer " ,
    experience: "experience:1-4 years " ,
    locations:"Location(s):Bangalore, Telangan",
    id:"job08",
     },
    {
    
    companyName:"Mouri Tech Private Limited",
    jobTitle:"Sourcing Executive " ,
    experience: "experience:1-3 years " ,
    locations :"Location(s):Hyderabad / Secunderabad, Telangana",
    id:"job09",
     },
    {
    
    companyName:"IBG Fincon Private Limited",
    jobTitle:"Area Head" ,
    experience: "experience:1-7 years " ,
    locations : "Location(s):Mumbai , Pune ",
    id:"job10",
     },
    {
    
    companyName:"Tempforce Technology ",
    jobTitle:"HR Recruiter" ,
    experience: "experience:2-3 years" ,
    locations :"Location(s):Mumbai ",
    id:"job11",
     },
    
]

                              // Job Div Appended Function
let DisplayJobs=()=>{data.forEach(el => {
    let b="";
  let div=document.createElement("div");
  div.className="homeJobs";
  let companyName =document.createElement("h3");
  if(el.companyName.length>25) b="..."
     

  companyName.innerText=el.companyName .slice(0, 25)+b;
  let jobTitle=document.createElement("span");
  b="";
  if(el.jobTitle.length>30) b="....."
  jobTitle.innerText=el.jobTitle.slice(0, 30)+b;
  let experience=document.createElement("div");
  
  experience.innerText=el.experience;
  let location=document.createElement("div");
  b="";
  if(el.locations.length>45) b="....."
  location.innerText=el.locations.slice(0, 45)+b;
  div.append(companyName,jobTitle,experience,location)
  container.append(div)
  });
  }
  let homeWorkFrom =document.getElementsByClassName("homeWorkFrom")
  let container=homeWorkFrom[0];
  let data=jobdata;
  DisplayJobs();                  //call for home jobs
  container=homeWorkFrom[1]
 data=jobdata.reverse();
 DisplayJobs();                   //  call For Resent Jobs


  // Premium data collection
 let PremiumData=[
              {
                image:"https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/Xra3gEbEDCZChclt6KyeY08aT14mQIemY87tp56k.png",
                title:"Featured Profile",
                description:"Better your chances of getting shortlisted",
                url:"./FeaturedProfile.html",
                color:"#e4f0ff",
                id:"premium1",
                
          },
              {
                image:"https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/K109Ubc6KIVisXQSRJaQhTSXJpOAkU0UUA2dpe7R.png",
                title:"Profile Highlighter",
                description:"Grab the attention of employers",
                url:"./PremiumServices.html",
                color:"#fff8e9",
                id:"premium2",
          },
              {
                image:"https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/aJ98j6upmWI4DEMecdM4NTPzesMybGMNVQBA3Xod.png",
                title:"Resume Writing",
                description:"Professionally written resume + cover letter",
                url:"./FeaturedProfile.html",
                color:"#eff8ec",
                id:"premium3",
          },
              {
                image:"https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/UWwaneAf2OBhqcauh7PujGU5mIavChpFlRnZabZp.png",
                title:"Career Booster",
                description:"Get the power of two in one and speed up your job search",
                url:"./PremiumServices.html",
                color:"#ffedf5",
                id:"premium4",

            },
            
            
 ];

// console.log(premiumData)

                // primium data append function

let DisplayPremium=()=>{
  premiumData.forEach(el=>{
  let div=document.createElement("div")
  div.className="premiumServices"
  let imageDiv=document.createElement("div")
  imageDiv.style.backgroundColor=el.color;
  
  let img=document.createElement("img")
  img.src=el.image
    imageDiv.append(img)
  let contentDiv=document.createElement("div")
  contentDiv.style.backgroundColor=el.color+"65";
  let title=document.createElement("h4")
  title.innerText=el.title;
  let p=document.createElement("p")
  p.innerText=el.description;
  let a=document.createElement("a")
  a.innerText="→ Read More";
  a.href=el.url
  contentDiv.append(title,p,a)
  div.append(imageDiv,contentDiv)
  homePremiumServices.append(div)
});
}
let premiumData=PremiumData
let homePremiumServices =document.getElementById("homePremiumServices")
DisplayPremium();


                  // Find job by skill Append function

let appendLiIn = (event) => {
  
  // let i="Skills"
  let i = event.target.innerText;
  console.log(i);
  // console.log(findJobData[i])
  appendLiInDiv.innerHTML=null;
      relodAppend(i)  // call for append

   
     erase.forEach((el)=>{
        el.style.backgroundColor="";      // removing backgroundColor of select button
        el.style.color="black"
     })
    
  event.target.style.backgroundColor="#5d4da8";
  event.target.style.color="white"        /// changing  backgroundColor of selecting button
  
};

    // li element constructer function
var creatliItems = (text) => {
    let li = document.createElement("li");
    li.innerText = text;
    return li;
  };

                          // function for appending all li values
let relodAppend =(key)=>{
      findJobData[key].forEach((element) => {
      
     appendLiInDiv.append(creatliItems(element));
   // (console.log(creatliItems(element)))
  });
 
}
                                                                                          // find job data
let findJobData=
{
    Company:["Reliance Jio Infocomm Limited"," Amazon" ,"Accenture", "D Source", "Tata Group","ANI Calls India Private Limited","Standard Chartered", 
        "Varite India Private Limited"," Genpact"," Muthoot finance", "Agreeya Solutions"," India Private Limited ", "Corporate Resources ", "Citi ",
        "Kotak Mahindra Bank Limited ","CIEL HR Services ","Lavya Associates "," Tata Mutual Fund "," Airtel "," IBM "],
    
    Skills:["Sales","  Java "," Jio Customer Associate - Freelancer JP","  Resident Jio Associate - Freelancer JP","Sql","Operations ","Javascript ",
         "Python ","Software Eng","Customer Support ","Customer Service ","Good Communication ","HTML ","Marketing ","CSS ","C# ","Lead Generation ",
         "Voice Process ","Problem Solver ","Bpo " ],

    Location:["Bengaluru / Bangalore ","Hyderabad / Secunderabad, Telangana ","Mumbai ","Chennai ","Pune ","Gurgaon / Gurugram ","Noida ","Delhi ",
         "Nashik ","Ahmedabad ","Kolkata ","Mumbai City ","Hyderabad, Uttar Pradesh ","Thane ","Navi Mumbai ","Jaipur","Coimbatore ","Remote ",
         "Cochin / Kochi / Ernakulam ","Vadodara "],
         
    Industry:["IT/Computers - Software ","Banking/Accounting/Financial Services ","Telecom ","IT/Computers - Hardware & Networking ",
          "Internet/E-commerce ","Recruitment/Staffing/RPO ","ITES/BPO ","Hospitals/Healthcare/Diagnostics ","Automotive/Automobile/Ancillaries ",
          "Electronics Manufacturing ","Education ","Semiconductor ","Insurance","Hotels/Hospitality/Restaurant ","Retailing ","Pharmaceutical ",
          "Construction & Engineering ","Engineering & Design ","Oil/Gas/Petroleum ","Real Estate "],

    Functions:["IT  ","Sales/Business Development ","Customer Service/Call Centre/BPO ","IT/Software Development - Systems/EDP/MIS ",
         "Finance & Accounts ","Manufacturing/Engineering/R&D ","IT/Software Development - System Programming/Middleware ","Banking ",
         "IT- Hardware/Telecom/Technical Staff/Support ","Advertising, DM, PR, MR & Event Management ","Operations ","Human Resources ",
         "IT/Software Development - Application Programming/Maintenance ","Engineering - Mechanical/Automotive/Industrial ",
         "Pharmaceutical/Biotechnology ","IT/Software Development - DBA/Datawarehousing ","Engineering - Environmental/Health/Safety ",
         "Health Care ","Marketing & Communications ","IT/Software Development - Mainframe "],

     Roles:["Software Engineer ","Customer Service Executive (Voice) ","Team Leader ","Business Development Manager ","Sales Exec ",
         "Doctor ","Software Developer ","Fresher ","HR Executive ","Business Analyst ","Software Test Engineer ","Accountant ",
         "Customer Service Executive (Non-voice) ","Application Engineer ","Project Leader ","IT Application Designer Specialist ",
        "Area ","Mechanical Engineer ","Clinical Research Associate ","Solution Architec"],

};

          
let erase= document.querySelectorAll("#homeFindJobUl>li");   
erase[0].style.backgroundColor="#5d4da8";
erase[0].style.color="white"                                                              
    // button press call event for ppending data
 let findJob = document.querySelector("#homeFindJobUl");
findJob.addEventListener("click", appendLiIn, false);
let appendLiInDiv = document.querySelector("#homeAppendLiInDiv");
relodAppend("Skills")



// side div addslider
let addImg=["./Images/add2-1.png","./Images/add1-1.jpg","./Images/add1-2.gif"]
let Display=(appendDiv,Img)=>{
 
  Img.forEach(el=>{
    
    let img=document.createElement("img");
    img.src=el;
   // console.log(img)
    appendDiv.append(img)
  });
}
let addAppend=document.getElementById("sideAdd2");

Display(addAppend, addImg)

// banner append.....
let Banners=["./Images/Banner2.png","./Images/Banner3.png","./Images/Banner4.png"]  

let HomeBanner=document.getElementById("HomeBanner");

Display(HomeBanner,Banners)


//logo append
// let logos=["./Images/logo1.jpeg","./Images/logo2.jpeg","./Images/logo3.jpeg","./Images/logo4.jpeg","./Images/logo5.jpeg","./Images/logo6.jpeg",
//                  "./Images/logo7.jpeg","./Images/logo8.jpeg"] ;

//    let HomeSlider=document.getElementById("HomeSlider");

// Display(HomeSlider,logos)

// check login


import Logout from "./logout.js";
Logout()



