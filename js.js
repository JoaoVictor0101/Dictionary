let divDefinition = document.getElementById("meaningAndExamples");
let searchButton = document.getElementById("search-button");
let SearchBar = document.getElementById("search-bar");
let contentContainer = document.getElementById("contentContainer")
const audioDIv = document.getElementById("audioDiv");
let dictionaryLayout= document.getElementById("dictionaryLayout");
let ioi= document.getElementById("ioi");

let track = 0
var api = "https:api.dictionaryapi.dev/api/v2/entries/en/"
// var api2 ="https:random-word-api.herokuapp.com/word?number=1"
// //why the toLowerCase() didn''t work
// async function getRandomWord() {
//    try{
//     const response2 = await fetch(`${api2}`)
//     const data2 = await response2.json()
//     console.log(data2)
//    }catch{
//      console.error('Error fetching word:', error);
//    }
// } 

// window.onload = getRandomWord  //how it works?

async function searchMeaning(){
    // settle some condition for words that doesn't exist
    ioi.innerHTML=""
    
    let getTheWord = SearchBar.value.toLowerCase();
    const response = await fetch(`${api}${getTheWord}`);
    // console.log(getTheWord);
    if (!response.ok){
        alert("type a word");
    }else{
        let titleMeanings = document.createElement("div");
        ioi.appendChild(titleMeanings);
        let meanings1 = document.createElement('div');
        ioi.appendChild(meanings1);
        meanings1.classList="meaningContainerStyle";
        ioi.classList.add("card");
        titleMeanings.textContent = SearchBar.value;
       
        
        try{ 
            const allMeanings = [];
            
         const data = await response.json()
         console.log(data)
        
         data.forEach(element => {
             const meaning = element.meanings.forEach(meanings => {
                meanings.definitions.forEach(def => {
                allMeanings.push({
                    definitions:def.definition,
                    example:def.example,
                })
                });
             });;
            });

          const coversion = JSON.stringify(allMeanings);
        
        
          meanings1.innerHTML= coversion.replace(/[{}\[\]]/g,'');

       }catch(e){

            console.log(e.message);
        
        }
    }
    
        SearchBar.value = ""

    
}

searchButton.addEventListener("click",()=>{
    track++;
    searchMeaning()
});
function replaceContent(track) {
    if (track > 1){
        
    }
}

//geting the inputs


//  function 

//  searchButton.addEventListener("click", )