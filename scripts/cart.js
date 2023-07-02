import navbar from "../component/navbar.js";
 document.querySelector(".main_container").innerHTML=navbar();
 import footer from "../component/footer.js";
document.querySelector("#footer746").innerHTML=footer();


document.querySelector("#applybtn").addEventListener("click",()=>{
    console.log("inside");
    let values=document.querySelector("#coupontext").value;
    console.log(values);
    let regex = /[^0-9]/gi;
    let result = values.replace(regex, "");
    console.log(result);
    let totalPrice=+document.querySelector("#tPrice").innerText;



    let discount=+document.querySelector("#discountgiven").innerText;
    console.log(discount)
    if (values==="MN30"){
        document.querySelector("#discountgiven").innerText=(result);
        document.querySelector("#tPrice").innerText=totalPrice-result;
        document.querySelector("#applybtn").innerText="APPLIED";
        document.querySelector("#applybtn").style.color="green";

    }
    else{
        document.querySelector("#applybtn").innerText="INVALID!";
        document.querySelector("#applybtn").style.color="red";


    }
})
function placeOrder(){
  alert('Your Order has been Placed')
}
let check_login =JSON.parse(localStorage.getItem("signinData")) 

var checkBox = document.getElementById("checkbox");
document.querySelector("#checkbox").addEventListener("click",()=>{
      
    let checkboxbtn =  document.getElementById('checkboxbtn')
    if (checkBox.checked===true){
        document.getElementById("checkboxbtn").style.backgroundColor="blue";
        if(check_login.login){
            checkboxbtn.innerHTML  = null;
            let place_order = document.createElement('button')
            place_order.innerText = "PLACE ORDER"
            place_order.id = "order_place"
            checkboxbtn.append(place_order)
            checkboxbtn.style.padding = '0px'
            document.getElementById("checkboxbtn").style.backgroundColor="blue";
        }
    }else if(!checkBox.checked){
        document.getElementById("checkboxbtn").style.backgroundColor="rgb(205,205,205)";
      
    }
})  

if(check_login.login){
    let checkboxbtn = document.getElementById("checkboxbtn");
    checkboxbtn.addEventListener('click', ()=>{
        placeOrder()
        window.location.href="index.html"
    })
    
}

import Logout from "./logout.js";
Logout()