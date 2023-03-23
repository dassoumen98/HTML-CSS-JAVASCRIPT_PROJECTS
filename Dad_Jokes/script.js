
      

        const joke = document.getElementById("joke");
        const jokebtn = document.getElementById("jokeBtn");

        // then and catch use

        // const generatejoke = ()=>{
        //     const setHeader ={
        //         headers:{
        //             Accept: "application/json"
        //         }
        //     }
        //     fetch('https://icanhazdadjoke.com/', setHeader)
        //     .then((res)=>res.json())

        //     .then((data)=>joke.innerHTML=data.joke)
            
        //     .catch((err)=>{
        //         console.log(err);
        //     })

        // }
        // jokebtn.addEventListener("click", generatejoke)
        // generatejoke()

        // asyn await use 

        const generatejoke = async()=>{

            try{

                const setHeader ={
                    headers:{
                        Accept: "application/json"
                    }
                }
                const res= await fetch('https://icanhazdadjoke.com/', setHeader)
               const data = await res.json()
               joke.innerHTML=data.joke;
    

            } catch(err){
                console.log(err);
            }
        }
           
            jokebtn.addEventListener("click", generatejoke)
            generatejoke()

          
           




