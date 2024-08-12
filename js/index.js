const dc = document.getElementById("dynamic-content");
const links = document.querySelectorAll("nav a");
let btns = document.querySelectorAll("nav ul li");
let url = "partials/home.html";

function loadContent(urlFeed) {
  fetch(urlFeed)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.text();
    })
    .then(data => {
      dc.innerHTML = data;
    })
    .catch(err => {
      dc.innerHTML = err.message;
    });
};

function selectContent(event) {
  event.preventDefault();
  const urlFeed = event.target.getAttribute("href");
  loadContent(urlFeed);
  
  for(let btn of btns){
    if(btn.id){
      btn.removeAttribute('id');
    }
  }
  event.target.parentElement.id = 'active';
};

loadContent(url);

for (let link of links){
  link.addEventListener("click", selectContent);
}
