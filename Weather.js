let button = document.querySelector("button");
let form=document.querySelector('form')
let div=document.querySelectorAll("div")
let h3=document.querySelector("h3")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.querySelector("input");
  let locate = input.value;

  let xmlObject = new XMLHttpRequest();
 // console.log(xmlObject);  
  let key = "108b3a5dbf9970dc82315113e7009729";
  let url = "https://api.openweathermap.org/data/2.5/weather?q=" + locate + "&appid=" + key;

  xmlObject.open("Get", url);
  xmlObject.onload = function () {
    console.log(xmlObject.response);
    let result = JSON.parse(xmlObject.response);
   // console.log(result.main.pressure);


  
   
   
   let p=document.querySelectorAll("p")
p[0].innerHTML= result.sys.sunset + " &#176C" 
p[1].innerHTML= result.main.humidity +" %" 
p[2].innerHTML= result.main.temp +" &#176C" 
p[3].innerHTML= result.weather[0].description 
let country=result.sys.country
h3.innerHTML=result.name+","+    country
  };
 
  xmlObject.send();
});
























