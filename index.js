const parentOver = document.getElementById('parent-over')
const parentEnter = document.getElementById('parent-enter')

parentOver.addEventListener('mouseover', ()=>{
    console.log('firing mouseover')
})

parentEnter.addEventListener('mouseenter', () =>{
    console.log('firing mouseenter')
})