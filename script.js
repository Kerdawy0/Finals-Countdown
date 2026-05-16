
function pad(n){return String(n).padStart(2,'0')}
function update(){
const end=new Date(targetDate).getTime();
const now=new Date().getTime();
const diff=end-now;
if(diff<0)return;
days.textContent=pad(Math.floor(diff/(1000*60*60*24)));
hours.textContent=pad(Math.floor((diff%(1000*60*60*24))/(1000*60*60)));
minutes.textContent=pad(Math.floor((diff%(1000*60*60))/(1000*60)));
seconds.textContent=pad(Math.floor((diff%(1000*60))/1000));
}
update();setInterval(update,1000);
