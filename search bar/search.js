const searchContainer = document.querySelector('.search')
const searchBtn =document.querySelector('.search-btn')
const closeBtn =document.querySelector('.close-btn')
const searchBox = document.querySelector('.search-box')

// console.log(searchContainer);

searchBtn.addEventListener('click',()=>{
// its find the class is in it or not and return true or false
    // searchContainer.classList.contains('active')
    if(searchContainer.classList.contains('active')){
        searchBox.value=""
        

    }else{
        searchContainer.classList.add('active')
        searchBox.focus()
        
    }
})

closeBtn.addEventListener('click',()=>{
    searchContainer.classList.remove('active')
    searchBox.value=""
})