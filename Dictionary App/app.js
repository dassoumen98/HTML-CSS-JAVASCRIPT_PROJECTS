// reference 
// Can't find the meaning of "ablity". Please, try to search for another word.
// 

const searchBox = document.getElementById('input-value');
const infoText = document.getElementById('info-text')

const container = document.getElementById('container')
let audio = null;


function implement(data ,word){
    if(data.title){
        infoText.innerHTML=`Can't find the meaning of <b > ${word}</b>. Please, try to search for another word.`
        container. innerHTML =''
    }
    else{

    
    console.log(data);
    container.classList.add('active')
    container.style.maxHeight = container.scrollHeight + 'px'
    document.querySelector('.word h3').innerHTML= `${data[0].word}`
    document.querySelector('.word p').innerHTML =`${data[0].meanings[0].partOfSpeech} /${data[0].phonetic}`

    document.querySelector('.Meaning-section p').innerHTML = data[0].meanings[0].definitions[0].definition

    let Synonyms =document.querySelector('.Synonyms-section p');
    
    
    
    
    Synonyms.innerHTML=''

        for(let i =0 ; i<=5; i++){
            tag  = `<span class="span">${data[0].meanings[0].synonyms[i]}</span>`
       
            Synonyms.insertAdjacentHTML("beforeend",tag)
        }

    
         audio = new Audio( data[0].phonetics[2].audio)
       
     
     
     
    }




}




    

  
    



async function fetchapi(word){
    infoText.style.color='#000'
    infoText.innerHTML=`Searching the meaning of <b > ${word}</b>`
     const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
     const res = await fetch(url)
     const data = await res.json()
    implement(data ,word)
} 







searchBox.addEventListener('keyup', (e)=>{
    // console.log(e.key );
    e.preventDefault
    if(e.key == 'Enter' && e.target.value){
        fetchapi( e.target.value);
    }
    
})

document.querySelector('.audio i').addEventListener('click' , ()=>{
    audio.play()
    console.log('audio');
})


