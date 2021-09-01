// API: https://api.magicthegathering.io/v1/cards
// Total pages: 612

const $image = $('#image')
const $pack = $('#pack-button')

let cardData
let randPage
let randCard

const render = () => {
    for (let i = 0; i < 15; i++) {
        // Display newly acquired card
        randCard = cardData.cards[Math.floor(Math.random()*100)]
        console.log(randCard.imageUrl)
        // Trying to get image error to display a 404 image
        if (randCard.imageUrl === undefined) {
            console.log("randCard.imageUrl is undefined")
            $(`#${i+1}`).html(`${randCard.name}<br /><img src="https://i.imgur.com/4cknkDZ.jpeg" class="card-img" id="img${i+1}">`)
        } else {
            $(`#${i+1}`).html(`${randCard.name}<br /><img src="${randCard.imageUrl}" class="card-img" id="img${i+1}">`)
        }
        // Add card to library
        if (randCard.colorIdentity === undefined) {
            $('#l-cls').append(`<p>${randCard.name}</p>`)
        } else if (randCard.colorIdentity.includes("W")) {
            $('#l-whi').append(`<p>${randCard.name}</p>`)
        } else if (randCard.colorIdentity.includes("U")) {
            $('#l-blu').append(`<p>${randCard.name}</p>`)
        } else if (randCard.colorIdentity.includes("B")) {
            $('#l-blk').append(`<p>${randCard.name}</p>`)
        } else if (randCard.colorIdentity.includes("R")) {
            $('#l-red').append(`<p>${randCard.name}</p>`)
        } else if (randCard.colorIdentity.includes("G")) {
            $('#l-grn').append(`<p>${randCard.name}</p>`)
        } else {
            console.log("Error")
        }
    }
}

function handleGetData(event){
    event.preventDefault();
    // Call random page of MtG API
    // Currently, this draws 15 randos from the same API page
    // I don't yet see a way to do this for each card (true random)
    randPage = Math.floor((Math.random()*612)+1)
    console.log(`API page ${randPage}`)
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

// "Get Pack" button generates random pack
// New cards are displayed in Pacquisition and added to Library
$pack.on('click',handleGetData)