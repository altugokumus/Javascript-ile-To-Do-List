let ekleDOM= document.querySelector('#liveToastBtn')

ekleDOM.addEventListener("click", newElement)

const alertDOM= document.querySelector("#alert")

const alertFunction = (baslik, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${baslik}</strong> ${message}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
`

function newElement(event){ 
    event.preventDefault()
    const item = document.querySelector('#task')
    if (item.value){
        addItem(item.value)
        item.value= ""
        alertDOM.innerHTML = alertFunction(
            "Tebrikler!",
            "Listeye eklendi.",
            "success"
        )
    } else {
        alertDOM.innerHTML = alertFunction(
            "Dikkat!",
            "Bilgi girmeniz gerekli.",
            "danger"
        )
    }
}

let itemListDOM= document.querySelector("#list")

const addItem = (Item) => {
    let liDOM= document.createElement('li')
    liDOM.innerHTML = `
    ${Item}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    `
    itemListDOM.append(liDOM)
    
    var remove = document.getElementsByClassName('close')

    for (var i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
        var target = document.getElementById('list');
        target.removeChild(this.parentElement);
    }
}

}

const element= document.querySelector('li')

element.addEventListener("click", check)

function check(event){
    event.preventDefault()
    element.classList.toggle("checked")

}

