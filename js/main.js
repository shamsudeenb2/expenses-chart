fetch('../data.json')
  .then(response => response.json())
  .then(data => display(data))
  .catch(error => console.log(error));

  let days= document.querySelectorAll('.day')
  let mon = document.querySelectorAll('i')
  

  const display=(arrData)=>{
    const date = new Date()
    let ardays = ['sun', 'mon', 'tue', 'wed','thu','fri', 'sat']
   arrData.forEach(element => {
      days.forEach(domClass=>{
          
        if(domClass.classList.contains(element.day)){
            console.log(domClass.classList.contains(element.day),element.amount)
            domClass.style.height =`${element.amount}px`
             if(ardays[date.getDay()] === element.day){
                console.log(mon)
                domClass.style.backgroundColor ='hsl(186, 34%, 60%)'
                domClass.addEventListener('mouseover',(next)=>{
                    next.target.firstElementChild.innerText = element.amount
                    next.target.firstElementChild.style.display='block'
                 })
                 domClass.addEventListener('mouseout', (next)=>{
                    next.target.style.backgroundColor ='hsl(186, 34%, 60%)'
                    next.target.firstElementChild.style.display='none'
                 })
                
             }else{
                domClass.addEventListener('mouseover', (next)=>{
                    next.target.firstElementChild.innerText = element.amount
                    next.target.firstElementChild.style.display='block'
                 })
                 domClass.addEventListener('mouseout', (next)=>{
                    next.target.style.backgroundColor ='hsl(10, 79%, 65%)'
                    next.target.firstElementChild.style.display='none'
                 })
             }

        }
      })
   });
  }