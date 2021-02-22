const  btnSearch =document.querySelector('#search')
const searchInput = document.querySelector('.searchInput');

// falta optimzar
btnSearch.addEventListener('click', ()=>{
   searchInput.classList.toggle('active')
   searchInput.select();
})