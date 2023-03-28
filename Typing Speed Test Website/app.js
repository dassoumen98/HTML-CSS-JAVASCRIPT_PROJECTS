/* <h2>Typing Speed Test</h2>
<p id="show-sentence">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, porro!</p>
<div class="typing-section">
    <label for="textarea"></label>
    <textarea name="textarea" id="textarea" cols="30" rows="10" disabled></textarea>
    <br>
    <button id="btn">Start</button>
</div>
<p id="score">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, maiores!</p> */
// step 1
const btn = document.querySelector('#btn')
const textarea = document.querySelector('#textarea')
const showSentence =document.querySelector('#show-sentence')
const score = document.querySelector('#score')
console.log(btn);

let statTime , endTime , totaltTimeTaken;

const sentence =["Lorem ipsum dolor sit amet 1",
              "Lorem ipsum dolor sit amet 2",
              "Lorem ipsum dolor sit amet 3"
]





// step 2
btn.addEventListener('click',()=>{
    switch(btn.innerText.toLowerCase()){
      case "start":
          textarea.removeAttribute('disabled')
          startTyingTest()
          break
      
          case "done":
          textarea.setAttribute('disabled' ,true)
          endTyingTest()
          break

    }
})



// step3
const startTyingTest = ()=>{
    
    const randomNumber = Math.floor(Math.random()*sentence.length)
    showSentence.innerText = sentence[randomNumber];
    
    let date= new Date()
    statTime = date.getTime()
    
    btn.innerText = "Done";
    
    

}

const endTyingTest = ()=>{
    btn.innerText='Start'
    
    let date= new Date()
    endTime = date.getTime()
    
    // take time in sec
    totaltTimeTaken = (endTime - statTime)/1000
    calculateTypingSpeed()
    
    showSentence.innerHTML=''
    textarea.value ='';
}


const calculateTypingSpeed = ()=>{
    let totalWords = textarea.value;
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;


    if(actualWords !==0){
        let typingSpeed = (actualWords/ totaltTimeTaken) * 60 ;
        typingSpeed = Math.round(typingSpeed)
        score.innerHTML= `Your typing speed is ${typingSpeed} words per minutes & you wrote ${actualWords} words & time taken ${totaltTimeTaken} sec`;
    }else{

        score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${totaltTimeTaken} sec`;
    }

    
}







