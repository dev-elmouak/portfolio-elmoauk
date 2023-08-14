// Event scroll
{let scrollYOffset1 = window.pageYOffset;
window.onscroll = function() {
    let header =  document.querySelector(".header-portfolio");
    let scrollYOffset2 = window.pageYOffset;
    if (scrollYOffset2 > scrollYOffset1 ) {
        header.style.top = "-70px";
    }else{
        header.style.top = "0px";
    }
    scrollYOffset1 = scrollYOffset2
}}
// skills array
{let listsSkills = document.querySelector(".lists-skills");
    let ArraySkills = [{
        titleName: "html",
        title: "fa-html5",
        titleColor: "#ff5100",
        widthData: "80%"
    },
    {
        titleName: "css",
        title: "fa-css3",
        titleColor: "#0062ff",
        widthData: "70%"
    },
    {
        titleName: "Javascript",
        title: "fa-js",
        titleColor: "#ffc800",
        widthData: "20%"
    },
    {
        titleName: "Sass",
        title: "fa-sass",
        titleColor: "#ff1e65",
        widthData: "80%"
    },];
    for (let i = 0; i < ArraySkills.length; i++) {
        let divHTML = "";
        divHTML += `
        <li class="js-genirate">
            <p><span style="color:${ArraySkills[i].titleColor};" class="fab ${ArraySkills[i].title}"></span><h4>${ArraySkills[i].titleName}</h4></p>
            <div class="flex items-center">
                 <span style="width:${ArraySkills[i].widthData};" id="span">
                     <div class="num-skill">${ArraySkills[i].widthData}</div>
                 </span>
            </div>
        </li>
        `
        listsSkills.innerHTML += divHTML;
    }
}
// button menu
{let buttonMenu = document.querySelector(".button-menu");
let listSpan1_2_3 = document.querySelectorAll(".button-menu span");
let btnSpan1 = document.querySelector(".btn-span-1");
let btnSpan2 = document.querySelector(".btn-span-2");
let btnSpan3 = document.querySelector(".btn-span-3");
let navBar = document.querySelector(".nav-bar");
let ULlist = document.querySelectorAll(".UL-list li");

buttonMenu.addEventListener("click", function(e) {
    listSpan1_2_3.forEach(span => {
        span.classList.toggle("active-All-span");
    });
    // spans
   { 
    btnSpan1.classList.toggle("active-span-1");
    btnSpan2.classList.toggle("active-span-2");
    btnSpan3.classList.toggle("active-span-3");
   }
   navBar.classList.toggle("show-navBar");
});

 ULlist.forEach(li => {
    li.onclick = function () {
        navBar.classList.remove("show-navBar");
        { 
            btnSpan1.classList.remove("active-span-1");
            btnSpan2.classList.remove("active-span-2");
            btnSpan3.classList.remove("active-span-3");
           }
           listSpan1_2_3.forEach(span => {
            span.classList.remove("active-All-span");
        });
    }
 });
}
//list projects
{
    let i = 0;
    let listProjects = [
        ` <div style="background: url(projects/project-1.jpg);" class="projects flex justify-center items-center flex-col"><p><span class="far fa-link"></span> link: <a href="Create-CV.com">Create-CV.com</a></p></div>`,
        ` <div style="background: url(projects/project-2.jpg);" class="projects flex justify-center items-center flex-col"><p><span class="far fa-link"></span> link: <a href="Create-CV.com">Save-your-notes.com</a></p></div>`,
        ` <div style="background:url(projects/project-3.jpg);" class="projects flex justify-center items-center flex-col"><p><span class="far fa-link"></span> link: <a href="Create-CV.com">to-do-list.com</a></p></div>`,
        ` <div style="background:url(projects/project-4.jpg);" class="projects flex justify-center items-center flex-col"><p><span class="far fa-link"></span> link: <a href="Create-CV.com">portfolio.com</a></p></div>`
     ];
     document.querySelector("#length").innerHTML = listProjects.length;
  document.querySelector(".next").onclick = function () {
          document.querySelector(".parent-pro").innerHTML = listProjects[i]; 
          i++;
          if (i> listProjects.length-1) {
            i = 0
        }
 }
}
