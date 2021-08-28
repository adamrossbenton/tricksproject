// API: https://api.magicthegathering.io/v1/cards
// Total pages: 612

const $name = $('#name')
const $manaCost = $('#mana-cost')
const $colors = $('#colors')
const $type = $('#types')
const $subtype = $('#subtypes')
const $rarity = $('#rarity')
const $text = $('#text')
const $power = $('#power')
const $toughness = $('#toughness')
const $image = $('#image')

let cardData
let randPage
let randCard

const render = () => {
    for (let i = 0; i < 15; i++) {
        // randPage = Math.floor((Math.random()*612)+1)
        randCard = cardData.cards[Math.floor(Math.random()*100)]
        // console.log(randCard)
        console.log(`${cardData.cards[0].name}`)
        $(`#${i+1}`).text(randCard.name)
        $(`#img${i+1}`).attr("src",randCard.imageUrl)
    }
}

function handleGetData(){
    // event.preventDefault();
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

handleGetData()

// $('form').on('submit',handleGetData)