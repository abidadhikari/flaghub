const countryDetails="https://restcountries.eu/rest/v2/name/";
const themeSwitcher=document.querySelector("#theme-switcher");
const mainHeader=document.querySelector(".main-header");
const search=document.querySelector("#search");
const circleIMG=document.querySelector(".circle img");

// THEME SWITCHER  
const defaultTheme="theme-light";

const setTheme=(theme)=>{
    document.documentElement.className=theme;
}
setTheme(defaultTheme);
themeSwitcher.addEventListener('change',(e)=>{
    setTheme(e.target.value);
})

// Header-NAv Stick 
window.addEventListener('scroll',()=>{
    if(window.scrollY>=50){
        mainHeader.style.background="var(--accent-header)";
    }
    else{
        mainHeader.style.background="transparent";
    }
})

// API 
async function actApi(){
  try{
    const searchQuery=search.value;
    const req=await fetch(countryDetails+searchQuery);
    const data=await req.json();
    circleIMG.src=data[0].flag;
    circleIMG.alt=data[0].name+" image";

    
  }
  catch(e){
      console.error(e);
  }
}
search.addEventListener('keyup',actApi);
actApi();