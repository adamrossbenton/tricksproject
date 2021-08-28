// API: https://api.magicthegathering.io/v1/cards

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

const render = () => {
    for (let i = 0; i < 15; i++) {
        let rando = cardData.cards[Math.floor(Math.random()*100)]
        $(`#${i+1}`).text(rando.name)
    }
}

function handleGetData(event){
    event.preventDefault();

    $.ajax({
        url: "https://api.magicthegathering.io/v1/cards"
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

// handleGetData()

$('form').on('submit',handleGetData)