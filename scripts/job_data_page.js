let collectData = []
class data{
    constructor(jobrequire, comName, city, expe, speci, jobdes, skills){
        this.jobrequirment = jobrequire
        this.companyName = comName
        this.city = city
        this.experience = expe
        this.specified = speci || "Not Specified"
        this.jobdescription = jobdes
        this.skills = skills
    }
//   findempty() {
//         this.companyName = "Company Name Confidential"
//     }
}
let collection = new data(
"JAVA Developer", 
"TATA Consultancy Services Ltd.", 
"Delhi", 
"5-7 Years", 
"", 
"Job Description Job Description Role.. Java Developer Required Technical Skill Set.. Java,Microservices , SpringBoot Rest API Must Have..If interested share resume on Desired Candidate Profile BACHELOR OF ENGINEERING",
"JAVA Developer")

let coll2 = new data(
    "Box Packing, Jewellery Packing, product packing Work From Home Near Latest Private Jobs 9930453505", 
    "Company Name Confindential", 
    "Delhi", 
    "0-1 Years", 
    "Not Specified", 
    "Box Packing, Jewellery Packing, product packing Work From Home Near Latest Private Jobs 9930453505",
    "Packaging, Packing Printing, Packing officer, Packaging Development, Flxible Packaging..", )

let job_d = new data(
    "Oracle Application Admin and DBA",
    "TATA Consultancy Services Ltd.",
    "Gurugaon/Gurugram",
    "7-10 Years",
    "",
    "Job Description Skills Tech Category Role Experience Range Oracle Applications DBA Orace ++ Administrator Oracle Applications Admin and DBA 6-8 Years Oracle Apps Finace Functional(AP, AR, GL)",
    "Oracle Applications Admin and DBA"
)
let job_by_sal = new data(
    "HCL Technologies || Hiring for ASP.Net/Angular/C#/SQL",
    "HCL Technologies Limited",
    "Bengaluru/Banglore",
    "3-8 Years",
    "",
    "We are looking for software Developer/Sr Software Developer - ASP.NET/Angular/SQL/C#, Experience",
    "Anglais Asp.Net, Dot Net, Sql, SQL Server, C#"
)
    collectData.push(collection)
    collectData.push(coll2)
    collectData.push(job_d)
    collectData.push(job_by_sal)
    
 
let obj = {
    filterarr:[
        {role:[
            {field:"IT", id:"role1"},
            {field:"IT/Software Development..", id:"role2"},
            {field:"Customer Service", id:"role3"},
            {field:"Sales/ Business Develop..", id:"role4"},
        ]},
         {
            experience:[
                {exp:"0-1 Years", id:"exp1"},
                {exp:"1-2 Years", id:"exp2"},
                {exp:"2-5 Years", id:"exp3"},
                {exp:"5-7 Years", id:"exp4"},
                {exp:"7-10 Years",id:"exp5"}
                
            ]
         },
         {
            city:[
                {cty:"Delhi", id:"cty1"},
                {cty:"Gurugaon/Gurugram", id:"cty2"},
                {cty:"Noida", id:"cty3"},
                {cty:"Bengaluru/Banglore", id:"cty4"},
                {cty:"Mumbai", id:"cty5"}
                
            ]
         },
         {
            salary:[
                {sal:"0 - 1Lakhs", id:"sal1"},
                {sal:"1Lakhs - 2Lakhs", id:"sal2"},
                {sal:"2Lakhs - 5Lakhs", id:"sal3"},
                {sal:"5Lakhs - 10Lakhs", id:"sal4"},
                {sal:"10Lakhs - 20Lakhs", id:"sal5"}
                
            ]
        }, 
        {

            great_place:[
                {sp_cate_job:"Show Only GPTW Jobs", id:"great_place"}
            ]
        },
        {
            qualification:[
                {qualify:"Bachleor Of Technolo...", id:"qualify1"},
                {qualify:"Bachleor Of Arts(B.A)...", id:"qualify2"},
                {qualify:"Bachleor Of Commerce...", id:"qualify3"},
                {qualify:"Bachleor Of Computer...", id:"qualify4"},
                {qualify:"Bachleor Of Business A...", id:"qualify5"},
                    
            ]
        },
        {
            employee_type:[
                {type_com:"Company", id:"emp_type1"},
                {type_com:"Consultant", id:"emp_type2"},
            ]
        },
    
        {
            top_companies:[
                {top_company:"**", id:"top_cmp1"},
                {top_company:"Tata Group", id:"top_cmp2"},
                {top_company:"Tata Mutual Fund", id:"top_cmp3"},
                {top_company:"Deliotte", id:"top_cmp4"},
                {top_company:"Reliance Jio Infocomm...", id:"top_cmp5"},
                
            ]
        },        
        {
            industry:[
                {workarea:"IT/Computer-Software", id:"workarea1"},
                {workarea:"Banking/Accounting/Fi...", id:"workarea2"},
                {workarea:"Other", id:"workarea3"},
                {workarea:"Recruitment/Staffing/R...", id:"workarea4"},
                {workarea:"ITES/BPO", id:"workarea5"},
                
            ]
        }, 
        {
            job_freshness:[
                {freshness:"Last 30 Days", id:"freshness1"},
                {freshness:"Last 15 Days", id:"freshness2"},
                {freshness:"Last 7 Days", id:"freshness3"},
                {freshness:"Last 3 Days", id:"freshness4"}, 
                {freshness:"Last 1 Days", id:"freshness5"}
            ]
        }, 
        {
            job_type:[
                {job_nature:"Permanent Job", id:"jobNature1"},
                {job_nature:"International", id:"jobNature2"},
                {job_nature:"Jobs for Covid-19 Layof...", id:"jobNature3"},
                {job_nature:"Jobs for Women", id:"jobNature4"},
                {job_nature:"Jobs for Women", id:"jobNature5"}
            ]
        }             
        
    ]
}   

let a_tred_banglore = [    
"Software Engineer Jobs In",
"Software Developer Jobs In", 
"Application Engineer Jobs In", 
"Team Leader Jobs In",
"Software Test Engineer Jobs In",
"IT Application Designer", 
"Business Analyst Jobs In", 
"Customer Service Executive", 
"IT Application Designer", 
"Hr Executive Jobs In" 

]
let job_near_banglore = [    
    "jobs in hosur",
    "jobs in ooty", 
    "jobs in pondicherry", 
    "jobs in mysore",
    "jobs in tirupati",
    "jobs in kanpur", 
    "jobs in vellor", 
    "jobs in coimbatore", 
    "jobs in trichy", 
    "jobs in erode", 
    "jobs in bellary", 
    "jobs in khozikode", 
    
    ]

export {collectData, obj, job_near_banglore, a_tred_banglore}




    // Job Description

//    let str =  Skills Tech Category Role Job Experience Range
//     Oracle Applications DBA Oracle ++ Administrator Oracle Applications Admin and DBA 6 - 8 Years
//     Oracle Apps Finance Functional (AP, AR, GL) Oracle ++ Developer Oracle Apps Finance Function