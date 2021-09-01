// API: https://api.magicthegathering.io/v1/cards
// Total pages: 612

const $image = $('#image')
const $pack = $('#pack')

let cardData
let randPage
let randCard

const render = () => {
    for (let i = 0; i < 15; i++) {
        randCard = cardData.cards[Math.floor(Math.random()*100)]
        $(`#${i+1}`).html(`${randCard.name}<br /><img src="${randCard.imageUrl}" class="card-img" id="img${i+1}">`)
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