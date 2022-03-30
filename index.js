
const number=getData();

function getData(){
      fetch(`https://api.github.com/users/sang-harsh`)
    .then(res=>res.json())
    .then(result=>{
      const index = document.getElementById("github-repos");
      index.innerText=result.public_repos;
    }).catch(error =>console.log(error));
}

let clickHome = document.getElementById("home");
let clickSkills = document.getElementById("skills");
let clickLiveActivity = document.getElementById("live-activity");
let clickProjects = document.getElementById("projects");


window.addEventListener('scroll',()=>{
  const scrolled = window.scrollY;
  if (380<=scrolled && scrolled<880){
    clickSkills.classList.add('selected');
    clickHome.classList.remove('selected');
    clickLiveActivity.classList.remove('selected');
    clickProjects.classList.remove('selected');
  }else if (880<=scrolled && scrolled<1280){
    clickLiveActivity.classList.add('selected');
    clickSkills.classList.remove('selected');
    clickHome.classList.remove('selected');
    clickProjects.classList.remove('selected');
  }else if (scrolled>=1280){
    clickProjects.classList.add('selected');
    clickSkills.classList.remove('selected');
    clickHome.classList.remove('selected');
    clickLiveActivity.classList.remove('selected');
  }else{
    clickHome.classList.add('selected');
    clickSkills.classList.remove('selected');
    clickLiveActivity.classList.remove('selected');
    clickProjects.classList.remove('selected');
  }
});

clickSkills.addEventListener('click',(e)=>{
  window.scroll(0 , 380);
});

clickLiveActivity.addEventListener('click',(e)=>{
  window.scroll(0 , 880);
});


clickProjects.addEventListener('click',(e)=>{
  window.scroll(0 , 1280);
});


clickHome.addEventListener('click',(e)=>{
  window.scrollTo(0, 0);
});