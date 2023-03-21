const accordian = document.querySelectorAll('.accordian')
// console.log(accordian);

accordian.forEach((currEle)=>{
    const icon = currEle.querySelector('.icon')
    const answerSection = currEle.querySelector('.answer')
    // console.log(answerSection);

    currEle.addEventListener('click',()=>{
        if(icon.classList.contains('active')){
            icon.classList.remove('active')
            answerSection.style.maxHeight =''
        }else{
            icon.classList.add('active')
            answerSection.style.maxHeight =answerSection.scrollHeight + 'px'
        }
    })
})