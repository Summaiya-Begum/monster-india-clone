function navbar1(){
    return `  <div id="right_div">
    <a href="jobs.html"> JOB SEARCH</a>
    <i class='fa fa-angle-down html_css_arrow' style='color: rgb(0, 0, 0)'></i>
    <div id="drop_down">
        <li><a href="jobs.html">Job By Skills</a> </li>
        <li><a href="jobs.html">Job By Function</a> </li>
        <li><a href="jobs.html"> Job By Industry</a></li>
    </div>
</div>
<div id="">
    WORK FROM HOME JOBS
</div>

<div id="">
    FREE JOB ALERT
</div>

<div id="">
    PREMIUM SERVICES
</div>`
}
export{navbar1}






function navbar2(){
    let login_career =JSON.parse(localStorage.getItem("signinData")) 
    return `<div id="temp">

    <p>34.1</p>
    <p>C</p>
    <p>Delhi</p>


</div>

<!-- 2nd navbar 2nd div -->
<div id="icon_img">

   <a href="./index.html"> <img src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg" alt=""></a>
</div>

<!-- 2nd navbar 3rd div -->
<div id="icon_social">

    <div id="icons_div">
        <a href="https://www.facebook.com/monsterindia">

            <i class='fa fa-facebook' style='color: rgb(4, 4, 4)'></i>
        </a>
        <a href="https://www.instagram.com/monster_india/">

            <i class='fa fa-instagram' style='color: rgb(0, 0, 0)'></i>
        </a>
        <a href="https://www.linkedin.com/company/monster-india/">

            <i class='fa fa-linkedin' style='color: rgb(0, 0, 0)'></i>
        </a>
        <a href="https://twitter.com/monster_india">

            <i class='fa fa-twitter' style='color:rgb(0, 0, 0)'></i>
        </a>
        <a href="https://www.youtube.com/user/monsterindiavideos/MonsterTV">
            <i class='fa fa-youtube-play' style='color: rgb(0, 0, 0)'></i>
        </a>
    </div>



    <div id="search_icons">
        <button id="search_btn1">
            <i class='fa fa-search' style='color: rgb(0, 0, 0)'></i>
            <div id="drop_search_div">
                <input type="text" placeholder="type here....." id="text_input">
                <input type="submit" id="btn2" value="Search"></input>
            </div>
        </button>
    </div>


   ${login_career.login?`<button id="career_login">${login_career.email}</button>`:`<div id="login_button">
   <button><a href="./login.html">Login</a> </button>
</div>`} 


</div>
`
}
export {navbar2}





















function  navbar3(){
    return `
    <div id="third_first_child">


                    <div id="third_sec_child">
                        <a href="javascript:void(0)">CAREER MANAGMENT<i class='fa fa-angle-down html_css_arrow'
                                style='color: rgb(0, 0, 0)'></i>
                        </a>
                        <div id="container">

                            <div id="container1">

                            </div>

                        </div>
                    </div>

                    <div id="third_sec_child">
                        <a href="javascript:void(0)">CAREER WOMEN<i class='fa fa-angle-down html_css_arrow'
                                style='color: rgb(0, 0, 0)'></i>
                        </a>
                        <div id="">

                            <div id="">

                            </div>

                        </div>
                    </div>

                    <div id="third_sec_child">
                        <a href="javascript:void(0)">COVID-19 CAREER ADVICE<i class='fa fa-angle-down html_css_arrow'
                                style='color: rgb(0, 0, 0)'></i>
                        </a>
                        <div id="">

                            <div id="">

                            </div>

                        </div>

                    </div>

                    <div id="third_sec_child">
                        <a href="javascript:void(0)">INTERVIEW TIPS<i class='fa fa-angle-down html_css_arrow'
                                style='color: rgb(0, 0, 0)'></i>
                        </a>

                        <div id="">

                            <div id="">

                            </div>

                        </div>
                    </div>


                    <div id="third_sec_child">

                        <a href="javascript:void(0)">JOB SEARCH STRATEGY<i class='fa fa-angle-down html_css_arrow'
                                style='color: rgb(0, 0, 0)'></i>
                        </a>

                        <div id="">

                            <div id="">

                            </div>

                        </div>
                    </div>

                    <div id="category">
                        <a href="javascript:void(0)" id="category">CATEGORIES<i class='fa fa-angle-down html_css_arrow'
                                style='color: rgb(0, 0, 0)'></i>
                        </a>
                        <div id="category2">
                            <li><a href="javascript:void(0)">Career</a></li>
                            <li><a href="javascript:void(0)">Managment</a></li>
                            <li> <a href="javascript:void(0)">Career Women</a></li>
                            <li> <a href="javascript:void(0)">COVID-19 Career Advice</a></li>
                            <li> <a href="javascript:void(0)">Interview Tips</a></li>
                            <li> <a href="javascript:void(0)">Job Search Strategy</a></li>
                            <li><a href="javascript:void(0)">Motivation & Thought Leadership</a></li>
                            <li> <a href="javascript:void(0)">Resume & Cover Letters</a></li>
                            <li><a href="javascript:void(0)">Salary Negotiation</a></li>
                            <li> <a href="javascript:void(0)">Second Career Options</a></li>
                            <li> <a href="javascript:void(0)">Special Ablity</a></li>
                            <li> <a href="javascript:void(0)">StartUps</a></li>
                            <li><a href="javascript:void(0)">Taxation & Savings</a></li>
                            <li><a href="javascript:void(0)">Work Life Balance</a></li>
                        </div>
                    </div>
                </div>


            </div>
    `
}
export {navbar3}