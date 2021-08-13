
let countEl= document.getElementById("count-el")
let saveEl= document.getElementById("save-el")
let totalEl= document.getElementById("total-el")

let count = 0
let count2=0
function increment() {
    count=count+1
    count2=count2+1
    countEl.innerText=count
} 
function save() {
    let cdash=count + " - "
    //alert(count)
    saveEl.textContent += cdash
    count=0
    countEl.textContent=0
}

function sum() {
    let total = count2
    //total += count2
    totalEl.textContent="Total People Entered:" + (total)
}

