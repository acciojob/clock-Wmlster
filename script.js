//your JS code here. If required.
let p=document.createElement("p");
p.id="timer";

const now = new Date();
const currentDateTime = now.toLocaleString();


document.body.append(p);

p.textContent=currentDateTime;
setInterval(currentDateTime,1000);



