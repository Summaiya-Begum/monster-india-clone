
import {navbar1} from "../components/navbar.js"
document.getElementById('Ist_navbar').innerHTML=navbar1()

import {navbar2} from "../components/navbar.js"
document.getElementById('sec_navbar').innerHTML=navbar2()

import {navbar3} from "../components/navbar.js"
document.getElementById('third_navbar').innerHTML=navbar3()

import {footer} from "../components/footer.js"
document.getElementById('footer').innerHTML=footer()



import {footer1} from "../components/footer.js"
document.querySelector('.small_footer').innerHTML = footer1()

let x = footer1()
// console.log(x)




let career = [
  {
    Image:
      "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/09/career-advice.jpg",
    Title: "Career Managment",
    Heading: "Courses and Career Options After 12",
    Para: "Team Monster - September 1, 2021",
  },
  {
    Image:
      "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/career-option.jpg",
    Title: "Career Managment",
    Heading: "Career option after 12th Humanities",
    Para: "Team Monster - August 31, 2021",
  },
  {
    Image:
      "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/Courses-for-PCM-Students-After-Class-12th.jpg",
    Title: "Career Managment",
    Heading: "Courses after 12th Commerce without Maths",
    Para: "August 31, 2021",
  },
  {
    Image: "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/jobs-after-b-pharma.jpg",
    Title: "Career Managment",
    Heading: "Careers and Jobs After B Pharm",
    Para: "August 31, 2021",
  },
  {
    Image:
      "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/09/career-advice.jpg",
    Title: "Career Managment",
    Heading: "Courses and Career Options After 12",
    Para: "Team Monster - September 1, 2021",
  },
 
];


let container1=document.getElementById('container1')
function displayData(){
  career.forEach(function(el,i){
   
    let  box1 = document.createElement('div')
    box1.setAttribute('class','box1')


    let image= document.createElement('img')
    image.src=el.Image

    let title= document.createElement('p')
    title.innerText=el.Title

    let heading= document.createElement('h2')
    heading.innerText=el.Heading


    let para= document.createElement('p')
    para.innerText=el.Para

    box1.append(image,title,heading,para)
    container1.append(box1)

  })
}

displayData()










//   covid data
let covid = [
  {
    Image:
      "https://www.monsterindia.com/career-advice/wp-content/uploads/2020/09/Companies-that-are-Hiring-Amid-Coronavirus.jpg",
    Title: "Career Managment",
    Heading: "Companies that are Hiring Amid Coronavirus Outbreak",
    Para: "Team Monster - September 1, 2021",
    Para1:"At a time when there is a noise of layoffs and pay cuts, we decided to shun the negative and look at the positive...."
  },
  {
    Image:"https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/1589286331.jpg",
    Title: "Career Managment",
    Heading: "How to quit your job without burning bridges",
    Para: "Team Monster - August 31, 2021",
    Para1:"The Coronavirus pandemic has forced a large population around the world to work from home. And the way the situation stands today looks like..."
  },
  {
    Image:
      "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/1595418108.jpg",
    Title: "Career Managment",
    Heading: "Coronavirus Pandemic is Changing the Way Recruiters Hire",
    Para: "August 31, 2021",
    Para1:"The COVID-19 pandemic has changed the way we behave, eat and work. It has also altered the way we get hired now and how recruiters..."
  },
  {
    Image: "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/jobs-after-b-pharma.jpg",
    Title: "Career Managment",
    Heading: "Top 10 In-demand Jobs in Coronavirus Pandemic",
    Para: "Team Monster - July 17, 2020",
    Para1:"At a time when the world is battling with the Coronavirus induced slowdown and amid reports of salary and job cuts, there are certain..."
  },
  {
    Image:
      "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/09/career-advice.jpg",
    Title: "Career Managment",
    Heading: "6 Effective Ways to Search for a Job in COVID Times",
    Para: "Team Monster - June 22, 2020",
    Para1:"At a time when the COVID-19 pandemic induced slow-down has affected the job market and many businesses are cutting costs to stay afloat, it’s..."

  },
  {
    Image:
      "https://www.monsterindia.com/career-advice/wp-content/uploads/2020/09/Companies-that-are-Hiring-Amid-Coronavirus.jpg",
    Title: "Career Managment",
    Heading: "Companies that are Hiring Amid Coronavirus Outbreak",
    Para: "Team Monster - September 1, 2021",
    Para1:"At a time when there is a noise of layoffs and pay cuts, we decided to shun the negative and look at the positive...."
  },
  {
    Image:
      "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/career-option.jpg",
    Title: "Career Managment",
    Heading: "Tips and Ideas to Set Up a Home Office You Love",
    Para: "Team Monster - August 31, 2021",
    Para1:"The Coronavirus pandemic has forced a large population around the world to work from home. And the way the situation stands today looks like..."
  },
  {
    Image:
      "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/1595418108.jpg",
    Title: "Career Managment",
    Heading: "Coronavirus Pandemic is Changing the Way Recruiters Hire",
    Para: "August 31, 2021",
    Para1:"The COVID-19 pandemic has changed the way we behave, eat and work. It has also altered the way we get hired now and how recruiters..."
  },
  {
    Image: "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/jobs-after-b-pharma.jpg",
    Title: "Career Managment",
    Heading: "Top 10 In-demand Jobs in Coronavirus Pandemic",
    Para: "Team Monster - July 17, 2020",
    Para1:"At a time when the world is battling with the Coronavirus induced slowdown and amid reports of salary and job cuts, there are certain..."
  },

  {
    Image:"https://www.monsterindia.com/career-advice/wp-content/uploads/2020/06/Capture.jpg",
    Title: "Career Managment",
    Heading: "Not Sure How to Get Started with Online Teaching Jobs? This is For You",
    Para: "August 31, 2021",
    Para1:"The COVID-19 pandemic has changed the way we behave, eat and work. It has also altered the way we get hired now and how recruiters..."
  },
  {
    Image: "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/1619595342.jpg",
    Title: "Career Managment",
    Heading: "4 Yoga Asanas You Can Do Every Day to Boost Your Immunity",
    Para: "Team Monster - July 17, 2020",
    Para1:"At a time when the world is battling with the Coronavirus induced slowdown and amid reports of salary and job cuts, there are certain..."
  },
  {
    Image:
      "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/1592138497.jpg",
    Title: "Career Managment",
    Heading: "6 Exercises to Stay Healthy When Working from Home – And No Gym",
    Para: "August 31, 2021",
    Para1:"The COVID-19 pandemic has changed the way we behave, eat and work. It has also altered the way we get hired now and how recruiters..."
  },
  {
    Image: "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/1592826587.jpg",
    Title: "Career Managment",
    Heading: "6 Effective Ways to Search for a Job in COVID Times",
    Para: "Team Monster - July 17, 2020",
    Para1:"At a time when the world is battling with the Coronavirus induced slowdown and amid reports of salary and job cuts, there are certain..."
  },


 
];



let box_container=document.getElementById('data_append_1')
function display(){
  covid.forEach(function(el,i){
   
    let box_1 = document.createElement('div')
     box_1.setAttribute('class','box_1')
     box_1.addEventListener('click',function(){
        AddNextPage(el,i)
     })

     let  box2 = document.createElement('div')
    box2.setAttribute('class','box2')

    let box3 = document.createElement('div')
    box3.setAttribute('class','box3')


    let  image= document.createElement('img')
    image.src=el.Image

    let  title= document.createElement('p')
    title.innerText=el.Title
    title.setAttribute("class","title")

    let  heading= document.createElement('h2')
    heading.innerText=el.Heading
    heading.setAttribute("class","headings")


    let para= document.createElement('p')
    para.innerText=el.Para
    para.setAttribute("class","paragraph")

    let para1= document.createElement('p')
    para1.innerText=el.Para1
    para1.setAttribute("class","paragraph1")


   box2.append(image,title)
    box3.append(heading,para,para1)
    box_1.append(box2,box3)
    box_container.append(box_1)

  })
}

display()

var arr = JSON.parse(localStorage.getItem('user')) ||[]
function AddNextPage(el,i){
  arr.push(el)
  window.location.href="covid.html"
  localStorage.setItem('user',JSON.stringify(arr))
}










// small covid data

let covid2 = [
  {
    Image:
      "https://www.monsterindia.com/career-advice/wp-content/uploads/2020/09/Companies-that-are-Hiring-Amid-Coronavirus.jpg",
    Title: "Career Managment",
    Heading: "Companies that are Hiring Amid Coronavirus Outbreak",
    Para: "Team Monster - September 1, 2021",
  },
  {
    Image:"https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/1589286331.jpg",
    Title: "Career Managment",
    Heading: "How to quit your job without burning bridges",
    Para: "Team Monster - August 31, 2021",
  },
  {
    Image:
      "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/1595418108.jpg",
    Title: "Career Managment",
    Heading: "Coronavirus Pandemic is Changing the Way Recruiters Hire",
    Para: "August 31, 2021",
  },
  {
    Image: "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/jobs-after-b-pharma.jpg",
    Title: "Career Managment",
    Heading: "Top 10 In-demand Jobs in Coronavirus Pandemic",
    Para: "Team Monster - July 17, 2020",
  },
  {
    Image:
      "https://www.monsterindia.com/career-advice/wp-content/uploads/2021/08/1595418108.jpg",
    Title: "Career Managment",
    Heading: "Coronavirus Pandemic is Changing the Way Recruiters Hire",
    Para: "August 31, 2021",
  },
];



let data_append_3 = document.getElementById('data_append_3')
function data(){


  covid2.forEach(function(el,i){

    let box_1 = document.createElement('div')
    box_1.setAttribute('class','div-1')

    let box2 = document.createElement('div')
    box2.setAttribute('class','box-2')

    let box3 = document.createElement('div')
    box3.setAttribute('class','box-3')


    let image= document.createElement('img')
    image.src=el.Image

    let  heading= document.createElement('h2')
    heading.innerText=el.Heading
    heading.setAttribute("class","heads")


    let para= document.createElement('p')
    para.innerText=el.Para
    para.setAttribute("class","parag")

    let para1= document.createElement('p')
    para1.innerText=el.Para1
    para1.setAttribute("class","parag1")


    box2.append(image)
    box3.append(heading,para)
    box_1.append(box3,box2)
    data_append_3.append(box_1)
  })

}

data()

//check if login or not



































