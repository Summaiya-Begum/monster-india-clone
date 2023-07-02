function Logout(){
    let checkLogin =JSON.parse(localStorage.getItem("signinData")) 

    if(!checkLogin.login){
    
    
    }else{
    
      let logout_index=  document.getElementById('logout_index')
      logout_index.addEventListener('click', ()=>{
        localStorage.setItem('signinData', JSON.stringify({...checkLogin, login:false}))
        window.location.reload()
      }) 
    }
         
}
export default Logout