const  btnSearch =document.querySelector('#search')
const searchInput = document.querySelector('.searchInput');


btnSearch.addEventListener('click', ()=>{
 
   searchInput.classList.toggle('active')
   searchInput.focus();
})