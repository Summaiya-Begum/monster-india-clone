import {collectData, job_near_banglore, a_tred_banglore} from "./job_data_page.js";
import navbar from "../component/navbar.js";
 document.querySelector('.main_container').innerHTML=navbar();
import footer from '../component/footer.js'
document.getElementById('footer').innerHTML=footer()

var coll = document.getElementsByClassName("open_close");
var i;
let icon = document.getElementsByClassName("icon_fa")

// let cl = document.getElementsByClassName("open_close")
let flag;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      
      content.style.display = "none";
      flag = 1
       
    } else {
      content.style.display = "block";
     flag= -1
    }
    for(let i=0;i<icon.length;i++){
        if(flag==1){
            
            icon[i].innerHTML='<i class="fa fa-plus"></i>'  
        }else{
            icon[i].innerHTML='<i class="fa fa-minus"></i>'  
        }
    }
  });
}


//appending the data

appendActualJobCard(collectData)
function appendActualJobCard(database){
  document.querySelector('#display_srch_res').innerHTML= null
  database.forEach((el)=>{
        
        let job_main_div = document.createElement('div') 
        
        let jobtitle = document.createElement('h4') 
        jobtitle.innerText=el.jobrequirment
        let com_name = document.createElement("p") 
        com_name.innerText = el.companyName
        let city_name = document.createElement('p') 
        city_name.innerHTML = `<i class="fa fa-map-marker"></i>${el.city}`
        city_name.setAttribute('class', "basic_info")
        
        let exper = document.createElement('p') 
        exper.innerHTML=`<i class="fa fa-suitcase"></i>${el.experience}`
        exper.setAttribute('class', "basic_info")
        let specified = document.createElement('p') 
        specified.innerHTML=`<img class ="i" src="./Images/icon_coin.png" alt="coin_icon"></i>${el.specified}`
        specified.setAttribute('class', "basic_info")
        let basic_inf = document.createElement('div')
        basic_inf.append(city_name, exper, specified)
        let des = document.createElement('p')
        des.innerText=el.jobdescription 
        des.addEventListener('click', ()=>{
          gettingAllDetails(el)
        })
        // findTheMatch(el)
        let skills = document.createElement('p')
        skills.innerHTML=`<span class="skill">Skills:</span> ${el.skills}`
        let access_share = document.createElement('div')
        access_share.setAttribute("id", 'access_share')
        let post_update = document.createElement('p')
        post_update.setAttribute("class", 'post_update')
        post_update.innerText="Posted 1:30 Hours ago |"
        let star = document.createElement('i')
        star.setAttribute("class", "fa fa-star")
        
        let div_img = document.createElement('div') 
        div_img.setAttribute('class', 'parent_social_div')
        let link_icon = document.createElement('img')
        link_icon.src="./Images/branch_img.svg"
        link_icon.setAttribute("class", "social_media")
        let div3 = document.createElement('div')
      
        let faceboook = document.createElement('i')
        faceboook.setAttribute('class', 'fa fa-facebook')
        let twitter = document.createElement('i')
        twitter.setAttribute('class', 'fa fa-twitter')
        let linked_in = document.createElement('i')
        linked_in.setAttribute('class', 'fa fa-linkedin')
        let gmail = document.createElement('i')
        gmail.setAttribute('class', 'fa fa-envelope-square')
        div3.append(faceboook, twitter, linked_in, gmail)
        div3.setAttribute('class', "showHover")
        div_img.append(link_icon, div3)
        
        let btn = document.createElement('button')
        btn.innerText="Apply"
        btn.setAttribute("class", 'apply_for_job') ;
        btn.addEventListener("click",()=>{
          let applyjob = JSON.parse(localStorage.getItem("signinData")) 
          if(applyjob.login){
            alert('Your Application is submitted')
          }else{
            window.location.href="login.html";
          }

        })
        access_share.append(post_update, star, div_img, btn)  
        job_main_div.append(jobtitle, com_name, basic_inf, des, skills, access_share)
        
        document.querySelector('#display_srch_res').append(job_main_div)
    })
}
// let xyz = socialMedia_icon()
// console.log(xyz)
function socialMedia_icon(){

return `let div3 = document.createElement('div')
  let faceboook = document.createElement('i')
  faceboook.setAttribute('class', 'fa fa-facebook')
  let twitter = document.createElement('i')
  faceboook.setAttribute('class', 'fa fa-twitter')
  let linked_in = document.createElement('i')
  faceboook.setAttribute('class', 'fa fa-linked_in')
  let gmail = document.createElement('i')
  faceboook.setAttribute('class', 'fa fa-mail')
  div3.append(faceboook, twitter, linked_in, gmail)`


}


// filter   
// function  findTheMatch(el){
//   for(let i=0;i<el.jobdescription.length;i++){
//     let char = el.jobdescription
//     // if(char[i][0])
//     // console.log(char[i][0])
    
//   }


//   if(el.jobdescription=="Developer"){
//       console.log("hello")
//   }else{
//     console.log("no");
//   }
// }
// console.log("yes")
let input = document.querySelectorAll('input') 

for(let i=0;i<input.length;i++){
  // console.log(input[i])
  input[i].addEventListener('click', function(){
    if(input[i].checked==true){
      let ct = collectData.filter((el)=>{
        if(el.city==input[i].value || el.experience==input[i].value){
          return el
        }
         
      })
      if(ct.length>0){
        appendActualJobCard(ct)
      }else{
        alert('Cites and Experience are currently Allowed (cities:delhi, banglore, gurugram, exp:0-1, 5-7, 7-10)')
      }
    
      console.log(ct)
      
    }
  })
}
//location based search
locationBasedSearch()
function locationBasedSearch(){
let loc_input = document.querySelector('#location_srch') 
let srch_button = document.querySelector('#srch_button') 
srch_button.addEventListener('click', ()=>{
  let exp_error_message = document.getElementById('exp_main_div')
  exp_error_message.innerText = null
  let lower = loc_input.value.toLowerCase()
  console.log(lower)
  let location_s = collectData.filter((el)=>{
        const city = el.city.split("/")
       
        if(city.length>1){
          if(city[0].toLowerCase()==lower){
            // console.log("hello split 1")
            return el  
          }else if(city[1].toLowerCase()==lower){
            // console.log("hello split 2")
            return el
          }
        }else{
          if(el.city.toLowerCase()==lower){
              //  console.log("hello split 3")
            return el
          }
        }
       
         
        })
           
           
        if(location_s.length>0){
          appendActualJobCard(location_s)
        }else{
          alert('Loaction not Found or Try delhi or banglore')
        }
        
        console.log(location_s)
        
      
    })

}

// loc_input.addEventListener('change', function(e){
//       e.preventDefault()
//     let location_s = collectData.filter((el)=>{
//       let lower = loc_input.value.toLowerCase()
//       if(el.city==loc_input.value){
//         return el
//       }
       
//     })
//     if(location_s.length>0){
//       appendActualJobCard(location_s)
//     }else{
//       alert('Loaction not Found or Try Delhi(case Sensative)')
//     }
    
//     console.log(location_s)
    
  
// })
// loc_input.value=null
// }
// experience based search
experienceBasedSearch()
function experienceBasedSearch(){
  let exp_search = document.querySelector('#exp_srch')
  let exp_error_message = document.getElementById('exp_main_div')
  exp_search.addEventListener('input', ()=>{
    
    exp_error_message.innerText = null
    
  let exp_len = collectData.filter((el)=>{
      
        if(Number(el.experience[0])){
          let num = +el.experience[0]
          let exp_y = +exp_search.value
          if(num==exp_y){
            return el
          }
        }
     })
     if(exp_len.length>0){
       appendActualJobCard(exp_len)
      }else{
        console.log(exp_len)
        exp_error_message.innerText = "Experience not Found"
        exp_error_message.style.color = 'red'
      }
    })
  }
         
 
   
        
       

let searchJob = ()=>{
  // console.log( search_job.value);
  let r_search = collectData.filter((el)=>{
      let element = el.jobrequirment.toLowerCase()
      let search_input = search_job.value.toLowerCase()
    if(element==search_input){
      return el
    }
     
  })
  if(r_search.length>0){
    appendActualJobCard(r_search)
  }else{
    alert('Job Description not Found try EX.."java developer" ')
  }
  
}

let search_job = document.querySelector('#job_scrh')
 search_job.addEventListener('keypress', (e)=>{
    if(e.key == "Enter"){
      
      searchJob()
    }
 })


// gothroughStrings()
const element = document.querySelector('#upload_child_div')


let arr = []


let preview_upload = false
const file = document.getElementById('input_file')
 function checkFileType(){
  const file = document.getElementById('input_file')
  
  var allowedExtensions =/(\.doc|\.docx|\.odt|\.pdf|\.tex|\.txt)$/i; 
  
  if (!allowedExtensions.exec(file.value)) {
    alert('Invalid file type');
    // file.value = '';
    return false
  }else{
    return true
  } 
   
 }
  
file.addEventListener('change', ()=>{
  // const element = document.querySelector('#upload_child_div')
  let beforeExe = checkFileType()
  console.log(beforeExe)
 if(beforeExe===true){
  console.log('Hello')
    let fr = new FileReader()
    fr.readAsText(file.files[0])
    fr.addEventListener("load", ()=>{
       const text_files =  fr.result
       let docs = document.createElement('p')
       if(text_files){
        docs.innerText = text_files
        
      }
      element.innerHTML = null
      element.append(docs)  
    })
 }else{
  const fr  =  new FileReader()
  fr.readAsDataURL(file.files[0]);
  fr.addEventListener("load", ()=>{
    const url = fr.result
    let img = new Image()
    img.style.height = '200px'
    img.style.width = '200px'
    
    img.src = url;
    if(url){
      preview_upload = true
    }
    element.innerHTML=null
    element.append(img)
  })
 }

})

const photo_submit = document.getElementById('photo_submit')
photo_submit.addEventListener('click', ()=>{
  if(preview_upload){
    let close_upload =  document.getElementById("upload_resume_main"); 
    close_upload.style.display = "none";
    alert("File submitted successfully")
  }
})



//this section contain upload file modal logic for open and close
// query selector is used to catch two different div with same id which opens upload modal

let upload_div = document.querySelectorAll('#target_upload_page')
// upload_div.style.display="none"
for(let i=0;i<upload_div.length;i++){

  upload_div[i].addEventListener('click', displayDocUploadPopUp)
}

function displayDocUploadPopUp(e){
  e.preventDefault()
  let before_upload = JSON.parse(localStorage.getItem("signinData")) 
  if(before_upload.login){
    let up_div = document.querySelector('#upload_resume_main')
    up_div.style.display="block"
  }else{
    window.location.href = "login.html"
  }
  
}

var modal = document.getElementById("close_upload"); 
modal.addEventListener('click', ()=>{
  
    let close_upload =  document.getElementById("upload_resume_main"); 
    close_upload.style.display = "none";
  let file_type = document.querySelector('#upload_child_div>p')
  // file_type.style.color = 'blue'
  // file_type.innerText  = null
 
   
})
// function target_upload_page_func(){
//   console.log("yes this is target")
// }


// data appending for couple of divs

let append_latest = document.querySelector('#append_trending_both')
let locationBanglore = document.querySelector('#near_banglore1')
let value_both;
locationBanglore.addEventListener('click', ()=>{
  console.log("hello");
  
  appe_job(append_latest, job_near_banglore, value_both)
})

appe_job(append_latest, a_tred_banglore)
let latest_j = document.querySelector('#trend_banglore')
latest_j.addEventListener('click', ()=>{
  console.log("hello");
  
  appe_job(append_latest, a_tred_banglore, value_both)
})

 
function appe_job(appn, la_job_arr, value_both){
  appn.innerHTML=null
  let ul = document.createElement('ul')
  la_job_arr.forEach((el)=>{
    let li = document.createElement('li')
    li.append(el)
    let p1 = document.createElement('p')
    p1.innerText=value_both
    ul.append(li)
  })
  appn.append(ul)
 }
 let render_pages = document.querySelector('#page_select')
 render_pages.addEventListener('change', sortPages)
 function sortPages(e){
  let newarr = []
   let page = +e.target.value
   console.log(page);
   if(page>collectData.length){
    return
   }else{
    for(let i=0;i<page;i++){
      console.log(collectData[i]);
     newarr.push(collectData[i])
    }
  }
  appendActualJobCard(newarr)   
    console.log(newarr)
  }
 
 let dataForDetails =[]
 function gettingAllDetails(el){
  // console.log(el)
    
  localStorage.setItem("job_details", JSON.stringify(el))
  // dataForDetails.push(el)
  }


//check if login or not
import Logout from "./logout.js";
Logout()




  