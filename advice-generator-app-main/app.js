const theadvice = document.querySelector(".advice-text")
const theadviceid = document.querySelector(".advice-id")
const btn = document.querySelector(".btn")



 async function getAdvice(){
    const res = await fetch('https://api.adviceslip.com/advice');
    data = await res.json()
    addAdvice(data.slip.advice)
    addAdviceId(data.slip.id)

    
    return data
}

getAdvice()

function addAdvice(data){
        theadvice.textContent = `"${data}"`
}

function addAdviceId(id){
     theadviceid.textContent = `advice #${id}`
}


btn.addEventListener('click', ()=>{
    location.reload()
})


window.addEventListener('DomContentLoaded', ()=>{

    async function getAdvice(){
        const res = await fetch('https://api.adviceslip.com/advice');
        data = await res.json()
        addAdvice(data.slip.advice)
        addAdviceId(data.slip.id)
        getAdviceData(data.slip)
        
        return data
    }
    
    getAdvice()
    
    function addAdvice(data){
            theadvice.textContent = `"${data}"`
    }
    
    function addAdviceId(id){
         theadviceid.textContent = `advice #${id}`
    }
    
    
    btn.addEventListener('click', ()=>{
        location.reload()
    })

})