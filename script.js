// API: https://api.magicthegathering.io/v1/cards
// Total pages: 612

const $image = $('#image')
const $pack = $('#pack-button')

let cardData
let randPage
let randCard

const render = () => {
    for (let i = 0; i < 15; i++) {
        randCard = cardData.cards[Math.floor(Math.random()*100)]
        $(`#${i+1}`).html(`${randCard.name}<br /><img src="${randCard.imageUrl}" class="card-img" id="img${i+1}">`)
        // Trying to add card to library
        if (randCard.colorIdentity === undefined) {
            console.log("This card is colorless")
            console.log(randCard.name)
            $('#l-cls').append(`<p>${randCard.name}</p>`)
        } else if (randCard.colorIdentity.includes("W")) {
            console.log("This card is white")
            // const pWhi = document.createElement("p")
            //     pWhi.textContent = randCard.name
            console.log(randCard.name)
            $('#l-whi').append(`<p>${randCard.name}</p>`)
        } else if (randCard.colorIdentity.includes("U")) {
            console.log("This card is blue")
            console.log(randCard.name)
            $('#l-blu').append(`<p>${randCard.name}</p>`)
        } else if (randCard.colorIdentity.includes("B")) {
            console.log("This card is black")
            console.log(randCard.name)
            $('#l-blk').append(`<p>${randCard.name}</p>`)
        } else if (randCard.colorIdentity.includes("R")) {
            console.log("This card is red")
            console.log(randCard.name)
            $('#l-red').append(`<p>${randCard.name}</p>`)
        } else if (randCard.colorIdentity.includes("G")) {
            console.log("This card is green")
            console.log(randCard.name)
            $('#l-grn').append(`<p>${randCard.name}</p>`)
        } else {
            console.log("Error")
        }
    }
}

function handleGetData(event){
    event.preventDefault();
    randPage = Math.floor((Math.random()*612)+1)
    console.log(randPage)
    $.ajax({
        url: `https://api.magicthegathering.io/v1/cards?page=${randPage}`
    }).then(
        data => {
            cardData = data;
            render();
        },
        error => {
            console.log("Something broke",error)
        }
    )
}

$pack.on('click',handleGetData)