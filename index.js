let myLeads=[]
const inputEl=document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")

localStorage.clear
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = '';
    renderLeads()
})

function renderLeads(){
    let listItem=""
    for(let i=0;i<myLeads.length;i++){
        listItem+= `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                     ${myLeads[i]}</a>
            </li>
        `
    }
    ulEl.innerHTML=listItem
}
