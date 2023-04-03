// save the local stroge data
 const updateLSData =()=>{
    // getting reference all textarea
  const textAreaData = document.querySelectorAll("textarea");
   const notes =[];
   textAreaData.forEach((note)=>{
      return notes.push(note.value)
   })

   localStorage.setItem('notes',JSON.stringify(notes))


 }

const addButton = document.querySelector("#add")

const addNewNote = (text = '')=>{
    // create a div and add 
    const  note = document.createElement('div')
    note.classList.add('note')

    const htmlData=`
    <div class="operation">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" :"hidden"}"></div>
    <textarea class="${text ? "hidden" :""}"></textarea>`;

    //  add html data
    // note.insertAdjacentHTML('afterbegin' , htmlData)
    note.innerHTML=htmlData

    // getting refernce
    const editButton = note.querySelector('.edit')
    const delButton = note.querySelector('.delete')
    const mainDiv = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    // deleting node when click delete button
    delButton.addEventListener("click", ()=>{
        note.remove()
        updateLSData();
    })

    // toggle using edit button
    textArea.value=text;
    mainDiv.innerHTML  =text;
    
    editButton.addEventListener("click",()=>{
        mainDiv.classList.toggle('hidden')
        textArea.classList.toggle('hidden')

    })
    
    // when user write some thig
    textArea.addEventListener("change",(event)=>{
        // value of textarea get in value var
        // const value = event.target.value
            const value =textArea.value
        // got value store in mainDiv
        mainDiv.innerHTML  =value;
        
        updateLSData()


    })







    // add note div in body
    document.body.appendChild( note)

}



// getting data back from local stroge
const notes =JSON.parse(localStorage.getItem("notes"));

if(notes) notes.forEach((note) => addNewNote(note))

addButton.addEventListener("click" ,()=>{
    addNewNote()
})





