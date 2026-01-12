/* Nav indicator animation */
const navLinks = document.querySelectorAll(".nav-link");
const indicator = document.querySelector(".nav-indicator");

function moveIndicator(el){
  indicator.style.left = el.offsetLeft + "px";
  indicator.style.width = el.offsetWidth + "px";
}

if(navLinks.length){
  moveIndicator(navLinks[0]); // 初期位置
  navLinks.forEach(link=>{
    link.addEventListener("mouseenter",()=>moveIndicator(link));
  });
}

/* intro fade */
const intro=document.querySelector(".intro");
const observer=new IntersectionObserver(e=>{
  e.forEach(x=>{
    if(x.isIntersecting){
      x.target.classList.add("show");
      observer.unobserve(x.target);
    }
  });
},{threshold:.2});
observer.observe(intro);

/* sakura */
const bg=document.querySelector(".sakura-bg");
for(let i=0;i<35;i++){
  const s=document.createElement("div");
  s.className="sakura";
  const size=Math.random()*8+8;
  s.style.width=size+"px";
  s.style.height=size+"px";
  s.style.left=Math.random()*100+"vw";
  s.style.animationDuration=
    `${Math.random()*10+10}s,${Math.random()*4+3}s`;
  bg.appendChild(s);
}