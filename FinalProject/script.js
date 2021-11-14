const changeLang = document.getElementById("lang");
const html = document.getElementById("html");
const head = document.getElementById("head");
const body = document.getElementById("body");


changeLang.addEventListener("click" , ()=>{
    if(html.hasAttribute("dir")){
        html.removeAttribute("dir")
        body.classList.remove("rtl")
        changeLang.innerText = "AR";
    }
    else{
        html.setAttribute("dir" , "rtl")
        body.classList.add("rtl")
        changeLang.innerText = "EN";
    }
})