function navbar(){
    let checkLogin =JSON.parse(localStorage.getItem("signinData")) 
    



    
      return`    <ul class="ulparent">
                <a href="index.html"> <img src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg" width="135" height="35" alt="monster header logo"/></a>
                <li>
                    
                    <a href="jobs.html">JOB SEARCH</a>
                    <ul>
                        <li><a href="jobs.html">JOBS BY LOCATION </a>
                        
                            <ul class="submenu">
                             
                                <li><a href="jobs.html">JOB IN BANGALORE</a></li>
                                <li><a href="jobs.html">JOB IN CHENNAI</a></li>
                                <li><a href="jobs.html">JOB IN COIMBATORE</a></li>
                                <li><a href="jobs.html">JOB IN DELHI</a></li>
                                <li><a href="jobs.html">JOB IN GURGAON</a></li>
                                <li><a href="jobs.html">JOB IN HYDERABAD</a></li>
                                <li><a href="jobs.html">JOB IN KOLKATA</a></li>
                                <li><a href="jobs.html">JOB IN LUCKNOW</a></li>
                                <li><a href="jobs.html">JOB IN MUMBAI</a></li>
                                <li><a href="jobs.html">JOB IN PUNE</a></li>
                                <li><a href="jobs.html">VIEW ALL JOBS BY LOCATION</a></li>
                           
                            </ul>
                            
                        </li>
                        <li><a href="javascript:void(0)">JOBS BY SKILLS</a>
                        <ul class="submenu">
                           
                            <li><a href="jobs.html">NET DEVELOPER JOBS</a></li>
                            <li><a href="jobs.html">ACCOUNANT JOBS</a></li>
                            <li><a href="jobs.html">ANDROID DEVELOP JOBS</a></li>
                            <li><a href="jobs.html">BUSINESS ANALYST JOBS</a></li>
                            <li><a href="jobs.html">GRAPHIC DESIGNER JOBS</a></li>
                            <li><a href="jobs.html">JAVA DEVELOPER JOBS</a></li>
                            <li><a href="jobs.html">PROJECT MANAGER JOBS</a></li>
                            <li><a href="jobs.html">PYTHON DEVELOPER JOBS</a></li>
                            <li><a href="jobs.html">RECRUITER JOBS</a></li>
                            <li><a href="jobs.html">SOFTWARE ENGINEERING JOBS</a></li>
                           
                            </ul>
                            
                        </li>
                        <li><a href="">JOBS BY TITLE</a>
                        <ul class="submenu">
                          
                            <li><a href="jobs.html">NET DEVELOPER JOBS</a></li>
                            <li><a href="jobs.html">ACCOUNANT JOBS</a></li>
                            <li><a href="jobs.html">ANDROID DEVELOP JOBS</a></li>
                            <li><a href="jobs.html">BUSINESS ANALYST JOBS</a></li>
                            <li><a href="jobs.html">GRAPHIC DESIGNER JOBS</a></li>
                            <li><a href="jobs.html">JAVA DEVELOPER JOBS</a></li>
                            <li><a href="jobs.html">PROJECT MANAGER JOBS</a></li>
                            <li><a href="jobs.html">PYTHON DEVELOPER JOBS</a></li>
                            <li><a href="jobs.html">RECRUITER JOBS</a></li>
                            <li><a href="jobs.html">SOFTWARE ENGINEERING JOBS</a></li>
                           
                        </ul>
                        
                        </li>
                        <li><a href="">JOBS BY FUNCTION</a>
                        <ul class="submenu">
                          
                            <li><a href="jobs.html">IT JOBS</a></li>
                            <li><a href="jobs.html">HR JOBS</a></li>
                            <li><a href="jobs.html">MARKETING JOBS</a></li>
                            <li><a href="jobs.html">SALES JOBS</a></li>
                            <li><a href="jobs.html">FINANCE & ACCOUNTING</a></li>
                            <li><a href="jobs.html">ADMIN/SECRETATRIAL</a></li>
                            <li><a href="jobs.html">ANALTICS & BUSINESS INTELLIGENCE</a></li>
                            <li><a href="jobs.html">HEALTH CARE JOBS</a></li>
                            <li><a href="jobs.html">LEGAL JOBS</a></li>
                            <li><a href="jobs.html">PURCHASE & SUPPLY CHAIN JOBS</a></li>
                            <li><a href="jobs.html">VIEW ALL JOBS BY FUNCTION</a></li>
                            
                            </ul>
                        
                        </li>
                        <li><a href="">JOBS BY INDUSTRY</a>
                        <ul class="submenu">
                            <li><a href="jobs.html">AGRICULTURE JOBS</a></li>
                            <li><a href="jobs.html">AUTOMOBILE JOBS</a></li>
                            <li><a href="jobs.html">BANKING JOBS</a></li>
                            <li><a href="jobs.html">ENGINEERING JOBS</a></li>
                            <li><a href="jobs.html">IT/SOFTWARE JOBS</a></li>
                            <li><a href="jobs.html">IT/HARDWARE & NETWORKING JOBS</a></li>
                            <li><a href="jobs.html">BPO JOBS</a></li>
                            <li><a href="jobs.html">FMCG JOBS</a></li>
                            <li><a href="jobs.html">TELECOM JOBS</a></li>
                            <li><a href="jobs.html">TEACHING JOBS</a></li>
                            <li><a href="jobs.html">VIEW ALL JOBS BY INDUSTRY</a></li>
                         
                            </ul>
                        </li>
                        <li><a href="">JOBS BY EDUCATION</a>
                        <ul class="submenu">
                           
                            <li><a href="jobs.html">B.TECH JOBS</a></li>
                            <li><a href="jobs.html">MBA JOBS</a></li>
                            <li><a href="jobs.html">MCA JOBS</a></li>
                            <li><a href="jobs.html">BCOM JOBS</a></li>
                            <li><a href="jobs.html">BSC JOBS</a></li>
                            <li><a href="jobs.html">BA JOBS</a></li>
                            <li><a href="jobs.html">BCA JOBS</a></li>
                            <li><a href="jobs.html">DIPLOMA JOBS</a></li>
                            <li><a href="jobs.html">12TH PASS JOBS</a></li>
                            <li><a href="jobs.html">10TH PASS JOBS</a></li>
                            <li><a href="jobs.html">VIEW ALL JOBS BY EDUCATION</a></li>
                           
                        </ul>
                      </li>
                        <li><a href="">FRESHERS JOBS</a>
                        <ul class="submenu">
                          
                            <li><a href="jobs.html">FRESHERS JOB IN BANGALORE</a></li>
                            <li><a href="jobs.html">FRESHERS JOB IN CHENNAI</a></li>
                            <li><a href="jobs.html">FRESHERS JOB IN COIMBATORE</a></li>
                            <li><a href="jobs.html">FRESHERS JOB IN DELHI</a></li>
                            <li><a href="jobs.html">FRESHERS JOB IN GURGAON</a></li>
                            <li><a href="jobs.html">FRESHERS JOB IN HYDERABAD</a></li>
                            <li><a href="jobs.html">FRESHERS JOB IN KOLKATA</a></li>
                            <li><a href="jobs.html">FRESHERS JOB IN LUCKNOW</a></li>
                            <li><a href="jobs.html">FRESHERS JOB IN MUMBAI</a></li>
                            <li><a href="jobs.html">FRESHERS JOB IN PUNE</a></li>
                            <li><a href="jobs.html">VIEW ALL JOBS BY LOCATION</a></li>
                        
                        </ul>
                        </li>
                        <li><a href="">OTHER JOBS</a>
                        <ul class="submenu">
                      
                            <li><a href="jobs.html">WALK-IN-JOBS</a></li>
                            <li><a href="jobs.html">WORK FORM HOME</a></li>
                            <li><a href="jobs.html">CONTRACT JOBS</a></li>
                            <li><a href="jobs.html">JOBS FOR WOMEN</a></li>
                            <li><a href="jobs.html">PART TIME JOBS</a></li>
                            <li><a href="jobs.html">INTERNATIONAL JOBS</a></li>
                            <li><a href="jobs.html">DATA ENTRY JOBS</a></li>
                            <li><a href="jobs.html">FREELANCER JOBS</a></li>
                            <li><a href="jobs.html">HOME BASED JOBS</a></li>
                            <li><a href="jobs.html">ONLINE JOBS</a></li>
                            <li><a href="jobs.html">GOVT.JOBS</a></li>
                          
                            </ul>
                        </li>
                        
                    </ul>
                </li>

                <li>
                <a href="" >WORK FROM HOME</a>
                <ul class="submenu">
                   
                    <li><a href="career.html">JOB IN BANGALORE</a></li>
                    <li><a href="career.html">JOB IN CHENNAI</a></li>
                    <li><a href="career.html">JOB IN COIMBATORE</a></li>
                    <li><a href="career.html">JOB IN DELHI</a></li>
                    <li><a href="career.html">JOB IN GURGAON</a></li>
                    <li><a href="career.html">JOB IN HYDERABAD</a></li>
                    <li><a href="career.html">JOB IN KOLKATA</a></li>
                    <li><a href="career.html">JOB IN LUCKNOW</a></li>
                    <li><a href="career.html">JOB IN MUMBAI</a></li>
                    <li><a href="career.html">JOB IN PUNE</a></li>
                    <li><a href="career.html">VIEW ALL JOBS BY LOCATION</a></li>
                
                </ul>
                </li>

                <li><a href="career.html" >CAREER TIPS</a>
                    <ul class="submenu">
                       
                        <li><a href="career.html">JOBS SEARCH INDUSTRY</a></li>
                        <li><a href="PremiumServices.html">RESUME & COVER LETTER</a></li>
                        <li><a href="career.html">INTERVIEW TIPS</a></li>
                        <li><a href="career.html">CAREER MANAGEMENT</a></li>
                        <li><a href="career.html">SALARY NEGOTIATIONS</a></li>
                        <li><a href="career.html">COURSES</a></li>
                     
                    </ul>
                </li>

                <li><a href="PremiumServices.html" >PREMIUM SERVICES</a>
                    <ul class="submenu">
                       
                        <li><a href="FeaturedProfile.html">FEATURED PROFILE</a></li>
                        <li><a href="PremiumServices.html">PROFILE HIGHLIGHTER</a></li>
                        <li><a href="PremiumServices.html">CAREER BOOSTER</a></li>
                        <li><a href="PremiumServices.html">RESUME WRIGHTING</a></li>
                        <li><a href="PremiumServices.html">PSYCHOMETRIC TEST</a></li>
                        <li><a href="PremiumServices.html">MOCK INTERVIEW</a></li>
                        <li><a href="PremiumServices.html">LINKEDIN MAKEOVER</a></li>
                        
                    </ul>
                </li>

              <li><a href="javascript:void(0)" >MORE</a>
                <ul class="submenu">
                    
                    <li><a href="javascript:void(0)">SPECIAL ABILITIES</a></li>
                    <li><a href="career.html">FREE JOB ALERT</a></li>
                    <li><a href="PremiumServices.html">PSYCHOMETRIC TEST</a></li>
                    <li><a href="PremiumServices.html">EMPLOYMENT INDEX</a></li>
                    <li><a href="PremiumServices.html">SALARY INDEX</a></li>
                    <li><a href="PremiumServices.html">SEARCH TIPS</a></li>
                    <li><a href="PremiumServices.html">JOBS APP</a></li>
                    
                </ul>
            </li>
            ${checkLogin.login?`<li class="logout" id="logout_index">Logout<ul><li>${checkLogin.email}</li></ul></li>` :`<li class="loginhover"><a href="login.html" >JOB SEEKER LOGIN</a>`}
                

                </li> 

             ${checkLogin.login?`<li class="logout">${checkLogin.email}</li>`:`<li class="loginhover"><a href="javascript:void(0)" >FOR EMPLOYERS</a>
             <ul class="submenu">
         
             <li><a href="PremiumServices.html">CONNECT WITH US</a></li>
             <li><a href="login.html">BUY ONLINE</a></li>
             <li><a href="login.html">EMPLOYER LOGIN</a></li>
           
             </ul>
         </li>`}
                </ul>
             
                `

}


export default navbar;