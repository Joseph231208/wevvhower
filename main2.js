
const sponsors = ["ГИТЛЕР", "КИРИЛЛ", "СТЕПАН", "СТЕПАН", "СТАЛИН", "НЕГРЫ", "КИРА", "Л", "ЭЛ", "ЕРДОГАН", "ЕВРЕИ", "ЕВРИИ", "ЕВРЕЙИ", "JEWS", "Я", "НЕГР"]

function AddNames(){

    var name = document.getElementById("TheNote")
    let x = name.value

    if (sponsors.includes(x.toUpperCase())){
        alert("АХУЕЛ, ЭТО ЖЕ СПОНСОРЫ")
    }else{


        newElement = document.createElement("li")
        newElement.innerHTML = x


        var list = document.getElementById('yeet')
        list.appendChild(newElement, list)
    }

}

function death(){
    alert("Ну ок.")
}

function revive(){
    alert("Иди нахуй.")
    window.location.replace("https://moodisthospital.com/ru/?gad_source=1&gad_campaignid=21497716488&gbraid=0AAAAADRGHXDmzizKvrF0AKB7IkrfBvs03&gclid=Cj0KCQiA6Y7KBhCkARIsAOxhqtM0BOB8pvBELjggi6lWRCJeJARfN_wpVdbprI_waH3gPlHKy54pLIcaAkK8EALw_wcB")
}

function checkNames(name){
    sponsors = ["ГИТЛЕР", "КИРИЛЛ", "СТЕПАН", "СТЕПАН", "СТАЛИН", "НЕГРЫ", "КИРА", "Л", "ЭЛ", "ЕРДОГАН", "ЕВРЕИ", "ЕВРИИ", "ЕВРЕЙИ", "JEWS", "Я"]

    

}