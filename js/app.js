const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');

const year=document.getElementById('year');

const countdown=document.getElementById('countdown');
const loading=document.getElementById('loading');

const currentyear=new Date().getFullYear();
console.log(currentyear);

//Destination Date
const newyeartime=new Date(`January 01 ${currentyear + 1} 00:00:00`);
console.log(newyeartime);

year.textContent=currentyear+1;

function updatecountdown(){
    const currenttime=new Date();
    // console.log(currenttime);

    const diff=newyeartime-currenttime;
    console.log(diff);//ms

                       //   ms->s sec->m min->h hour->day
    const d=Math.floor(diff / 1000 / 60 / 60 / 24);
    // console.log(typeof d);
    const h=Math.floor(diff / 1000 / 60 / 60) % 24;
    // console.log(h); 
    const m=Math.floor(diff / 1000 / 60) % 60;
    // console.log(m);
    const s=Math.floor(diff / 1000) % 60;
    // console.log(s);

    days.textContent=d;
    hours.textContent=h < 10 ? "0"+h : h;
    minutes.textContent=m < 10 ? "0"+m : m;
    seconds.textContent=s < 10 ? "0"+s : s;
}
setTimeout(()=>{
    loading.remove();
    countdown.style.display="flex";
},1000);
updatecountdown();
setInterval(updatecountdown,1000);