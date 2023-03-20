// reference
const userInput = document.querySelector('input');
const userlist =document.querySelector('.user-list');
// console.log(userlist);

const userDataArr = [];

// fetch the data
async function fetchData(){
    try{
        
        const res = await fetch(`https://api.github.com/users`)
        const data = await res.json()
        console.log(data);

        // loading part when data come loading innerHTML = '
        userlist.innerHTML =''
        
        // iterate the data array 
        data.map((user)=>{
            const li = document.createElement('li')
            userlist.appendChild(li)
            li.innerHTML =`
            <div class="user-data">
                    <img src=${user.avatar_url} alt="this is an imges">
                    <div class="user-para">
                        <p>${user.login}</p>
                        <a href=${user.html_url} target="_blank">${user.html_url} </a>
                    </div>
             </div>

            `

            // data push in a array

            userDataArr.push(li)

             

        })

    }catch(e){
        console.log(e);
    }
}


userInput.addEventListener("input" ,(e)=>{
    console.log(e.target.value);
     let value = e.target.value;

     userDataArr.filter((currentElem)=>{
        if(currentElem.innerText.toLowerCase().includes(value.toLowerCase())){
            // see only search elements 
            currentElem.style.display='block'
        }else{
            // hide not match elements
            currentElem.style.display='none'

        }
     })

     
} )

fetchData()