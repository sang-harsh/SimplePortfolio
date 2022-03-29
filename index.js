
const number=getData();

function getData(){
      fetch(`https://api.github.com/users/sang-harsh`)
    .then(res=>res.json())
    .then(result=>{
      const index = document.getElementById("github-repos");
      index.innerText=result.public_repos;
    }).catch(error =>console.log(error));
}

const options ={
  behaviour: 'smooth',
  block: 'start',
  inline: 'start'
}


let navbarElement = document.getElementById("navBar");
let clickElement = document.getElementById("home");

let clickElement1 = document.getElementById("skills");
let viewElement1 = document.getElementById("skill");
let clickElement2 = document.getElementById("live-activity");
let viewElement2 = document.getElementById("live");
let clickElement3 = document.getElementById("projects");
let viewElement3 = document.getElementById("project");

// navbarElement.innerHTML = `<div class="navBarLogo">🕯️</div>
// <div id="home">Home</div>
// <div id="skills">Skills</div>
// <div id="live-activity"class="selected">Live Activity</div>
// <div id="projects">Projects</div>`;  


clickElement1.addEventListener('click',(e)=>{
  viewElement1.scrollIntoView(options);
  e.target.classList.add('selected');
  clickElement.classList.remove('selected');
  clickElement2.classList.remove('selected');
  clickElement3.classList.remove('selected');
});

clickElement2.addEventListener('click',(e)=>{
  viewElement2.scrollIntoView(options);
  e.target.classList.add('selected');
  clickElement.classList.remove('selected');
  clickElement1.classList.remove('selected');
  clickElement3.classList.remove('selected');
});


clickElement3.addEventListener('click',(e)=>{
  viewElement3.scrollIntoView(options);
  e.target.classList.add('selected');
  clickElement.classList.remove('selected');
  clickElement1.classList.remove('selected');
  clickElement2.classList.remove('selected');
});


clickElement.addEventListener('click',(e)=>{
  window.scrollTo(0, 0);
  e.target.classList.add('selected');
  clickElement2.classList.remove('selected');
  clickElement1.classList.remove('selected');
  clickElement3.classList.remove('selected');
});