const date = document.querySelector(".date")
const time = document.querySelector(".time")

const newdate = new Date().getFullYear()
const newTime = new Date().getHours()
const newMin = new Date().getMinutes()

time.innerHTML = newTime + ":" + newMin
date.innerHTML = newdate









/*const serviceAll = document.querySelectorAll('.services-cards .service')
const filter = document.querySelectorAll('.filter-box')

serviceAll.forEach((element, index) => {
    element.addEventListener("mouseover", ()=>{
        if (index ===0){
            element.classList.add('active')
            console.log('0 ativo');
        }
        if (index ===1){
            element.classList.add('active')
            console.log('1 ativo');
        }
        if (index ===2){
            element.classList.add('active')
            console.log('2 ativo');
        };


    element.addEventListener("mouseout", ()=>{
        if (index ===0){
            element.classList.remove('active')
            console.log('0 desativo');
        }
        if (index ===1){
            element.classList.remove('active')
            console.log('1 desativo');
        }
        if (index ===2){
            element.classList.remove('active')
            console.log('2 desativo');
        };
    })    
    })

});


*/

