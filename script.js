// API: https://api.magicthegathering.io/v1/cards
// Total pages: 612
// Dead Link Img: https://cdn.dribbble.com/users/30669/screenshots/509689/media/71e4a38d13e4c595ae26f83521b92649.png?compress=1&resize=400x300

const $image = $('#image')
const $pack = $('#pack-button')
const $dropLibButton = $("#drop-library")
const $dropLibContents = $('.drop-lib')
const $libElement = $('.lib-element')
const $packHide = $('#pack-hide')

let cardData
let randPage
let randCard

let firstPackOpen = false

const render = () => {
    for (let i = 0; i < 15; i++) {
        // Display newly acquired card
        randCard = cardData.cards[Math.floor(Math.random()*100)]
        console.log(randCard.name)
        console.log(randCard.colorIdentity === undefined)
        // Trying to get image error to display a 404 image
        if (randCard.imageUrl === undefined) {
            $(`#${i+1}`).html(`${randCard.name}<br /><img src="https://cdn.dribbble.com/users/30669/screenshots/509689/media/71e4a38d13e4c595ae26f83521b92649.png?compress=1&resize=400x300" class="card-img" id="img${i+1}">`)
        } else {
            $(`#${i+1}`).html(`${randCard.name}<br /><img src="${randCard.imageUrl}" class="card-img" id="img${i+1}">`)
        }
        // Add card to library
        if (randCard.colorIdentity === undefined) {
            $('#l-cls').append(`<p class="lib-element">${randCard.name}</p>`)
        } else if (randCard.colorIdentity.includes("W")) {
            $('#l-whi').append(`<p class="lib-element">${randCard.name}</p>`)
        } else if (randCard.colorIdentity.includes("U")) {
            $('#l-blu').append(`<p class="lib-element">${randCard.name}</p>`)
        } else if (randCard.colorIdentity.includes("B")) {
            $('#l-blk').append(`<p class="lib-element">${randCard.name}</p>`)
        } else if (randCard.colorIdentity.includes("R")) {
            $('#l-red').append(`<p class="lib-element">${randCard.name}</p>`)
        } else if (randCard.colorIdentity.includes("G")) {
            $('#l-grn').append(`<p class="lib-element">${randCard.name}</p>`)
        } else {
            console.log("Error")
        }
    }
    if (!firstPackOpen) {
        $packHide.toggle(400,() => {})
        firstPackOpen = true
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

// Make library & deck builder collapsible

$dropLibButton.click(() => {
    $dropLibContents.toggle(400,() => {})
})

// Hover over library cards for card info
// $libElement.hover(() => {

// },() => {

// })