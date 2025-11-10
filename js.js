let divDefinition = document.getElementById("meaningAndExamples");
let searchButton = document.getElementById("search-button");
let SearchBar = document.getElementById("search-bar");
let contentContainer = document.getElementById("contentContainer")
const audioDIv = document.getElementById("audioDiv");
let dictionaryLayout= document.getElementById("dictionaryLayout");
let ioi= document.getElementById("ioi");
let ContinerCard = document.getElementById("containerCard")

let track = 0
var api = "https://freedictionaryapi.com/api/v1/entries/en/"
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
    // settling some condition for words that doesn't exist
    
    
    let getTheWord = SearchBar.value.toLowerCase();
    const response = await fetch(`${api}${getTheWord}`);
    const data = await response.json()
    console.log(data)
    // console.log(getTheWord);
    //trying an array check
    if (data.source.url == "https://en.wiktionary.org"){
        alert("type a word");
        

    }else{
        ioi.innerHTML=""
        let titleMeanings = document.createElement("h1");
        ioi.appendChild(titleMeanings);
        titleMeanings.classList="TittleStyle"
        let Ipa = document.createElement("p");
        Ipa.classList.add("IpaStyle")
        Ipa.textContent="mmadka"
        ioi.appendChild(Ipa)
        let meanings1 = document.createElement('div');
        ioi.appendChild(meanings1);
        meanings1.classList="meaningContainerStyle";
        ioi.classList.add("card");
        titleMeanings.textContent = SearchBar.value.toLowerCase();
       
        //trying to unsderstand and adjusting that to another api

        //   let pickingOneItem = data.entries
       //   console.log(pickingOneItem);
       // console.log(data)
       // const allMeanings = [];
        try{ 
            
         

        // console.log(data.entries)
        const allMeanings = []

        data.entries.forEach(element=>{
             
            element.senses.forEach(senses => {
                allMeanings.push({
                    partOfSpeech: element.partOfSpeech,
                    definitions: `<div class="def">${senses.definition}</div>`,
                    examples: `<div class="Examples">${senses.examples}</div>`
                })
                })
                
            });
            const ipo = []

           

            data.entries.forEach(elemente=>{
                elemente.pronunciations.forEach(pronunce =>{
                    ipo.push({
                        pronunciations:pronunce.text
                    })
                })
               
            })
            // finding a way to remove all the ipas after of the first one
            ipo.splice(1)
        console.log(ipo)
        const ConversionIpa = JSON.stringify(ipo)
        Ipa.textContent=ConversionIpa
        .replace(/[":,{}\[\]]/g, '')
        .replace(/pronunciations/g, "")
        console.log(ConversionIpa)
        //Ipa.textContent= ConversionIpa
        

         
        /*      
  ancient api
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
// fixing some erros of format and the spaces of the bar 

*/
  // how could i change the font of examples?
          const coversion = JSON.stringify(allMeanings)      
        // trying to understand how works the replace method
            meanings1.innerHTML = coversion
            .replace(/[":,{}\[\]]/g, '')
            .replace(/\\/g, "")
            .replace(/definitions/g, "")
            .replace(/examples/g, "")
            .replace(/partOfSpeech/g, "")
                         

            console.log(meanings1)
        // meanings1.innerHTML= coversion.replace(/[{}\[\]\,\"]/g,'')
        // meanings1.innerHTML.replace(/\. ?/g,'<br> <br>')
        
       }catch(e){

            //console.log(e.message);
        
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