let count=0;
const para=document.createElement('p');


const button=document.createElement('button');
button.textContent='Increment';

const parent=document.getElementById('root');
parent.append(para,button);
button.addEventListener('click',()=>{
    count++;
    para.textContent=`Counter: ${count}`;
})
para.textContent=`Counter: ${count}`;