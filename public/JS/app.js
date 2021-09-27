const weatherQuery=document.querySelector('form')
const search=document.querySelector('input')
let message_1 = document.querySelector('#message_1')
let message_2 = document.querySelector('#message_2')
let icon =document.querySelector('#icon')




weatherQuery.addEventListener('submit',(e)=>{
    e.preventDefault();
    message_1.textContent='Loading...'
    message_2.textContent=''
    icon.src=undefined;
    console.log(icon.src)
    const location = search.value
    //console.log(location);
    if(location)
    {
        fetch('/weather?address='+location).then((res)=>{
            res.json().then((data)=>{
                if(data.error)
                message_1.textContent=(data.error)
                else
                {
                    if(data.icon)
                    {
                    message_1.textContent="Today in "+(data.location)+" in "+location+" weather conditions are " + (data.conditionText);
                    message_2.textContent="Temprature is "+(data.tempInCel) +" degree celcius";
                    icon.src=data.icon;}
                }
            })
        })
    }
    else
    message_1.textContent=('Enter some location in textbar')
})