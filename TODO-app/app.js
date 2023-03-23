 // reference



const inputValue = document.getElementById('input-val')
const addBtn = document.getElementById('add-btn')

const outputBox = document.querySelector('.output-box')

const clearBtn = document.getElementById('clear-btn')
// console.log(clearBtn);


// console.log(deleteBtn);

// evnet





// add button
addBtn.addEventListener('click', ()=>{

    // cerate div
    const div = document.createElement('div');
    div.classList.add('show-items');
    div.innerHTML=`
    <li>${inputValue.value}</li>
    <i class="fa-solid fa-trash" id="delete-btn"></i>
    `
    outputBox.append(div)
    // console.log(div);

    inputValue.value='';

    // remove button
    div.querySelector('i').addEventListener('click', ()=>{
        div.remove()

    })

    // taskcomplete
    //  div >li 
    let li = div.querySelector('li')
    li.addEventListener('click', ()=>{
        li.classList.toggle('done')
    })

    // clear all

clearBtn.addEventListener('click', ()=>{
    div.remove()

})

      

})


  

    

    
    
    








    


    

    

