const container = document.getElementById("container")
const box = document.getElementById("box")
const form = document.getElementById("form")
const val = document.getElementById('textval')
const result = document.getElementById('result')
const p = document.getElementById('p')
const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const h = document.getElementById("h")
const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")
const h6 = document.getElementById("h6")
const a = document.getElementById("a")
const h5 = document.getElementById("h5")
const h4 = document.getElementById('h4')

form.addEventListener("submit",(e)=>{
e.preventDefault()
    getelem(val.value)
})
const getelem = async(fg)=>{
    try {
        const anas = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${fg}`)
const data = await anas.json()

result.style.display = "block"

   h.innerHTML =`<h5>WORD:${data[0].word}<h5/>`
    h.style.display='block'
    h1.innerHTML = `parts of speech:${data[0].meanings[0].partOfSpeech}`
    h1.style.display="block"
    h2.innerHTML = `definitions:${data[0].meanings[0].definitions[0].definition}`
    h2.style.display='block'
    if(data[0].meanings[0].synonyms[1]){
        p.innerHTML = `SYNONYMS :${data[0].meanings[0].synonyms[0]},${data[0].meanings[0].synonyms[1]}`
   
        p.style.display = 'block'
    }
    else if(data[0].meanings[0].synonyms[0]){
        p.innerHTML = `SYNONYMS :${data[0].meanings[0].synonyms[0]}`

    }
    else{
        p.innerHTML = ""
    }
   
    

    if(data[0].meanings[0].antonyms[0]){
        p1.innerHTML = `ANTONYMS:${data[0].meanings[0].antonyms[0]},${data[0].meanings[0].antonyms[1]}`
        p1.style.display = 'block'
    }
    else{
        p1.innerHTML = ""
    }
  
    if(data[0].meanings[0].definitions[0].example){
        p2.innerHTML = `EXAMPLE:${data[0].meanings[0].definitions[0].example}`
        p2.style.display = 'block'
    }
    else{
        p2.innerHTML = ""
    }

    a.addEventListener("click",()=>{
        location.href = ` https://en.wiktionary.org/wiki/${fg}`
    })



    a.style.display = "block"
    h4.style.display = `none`


   




    } catch (error) {
       h4.innerHTML =error
      h4.style.display = `block`
      result.style.display = `none`
    }






}

