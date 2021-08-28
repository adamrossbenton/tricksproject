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
const $pack = $('#pack')
const card = $('.card')

let cardData

const render = () => {
    console.log(cardData)
    card.text(cardData.cards[0].name)
}

function handleGetData(){
    // event.preventDefault();

    $.ajax({
        url: "https://api.magicthegathering.io/v1/cards"
    }).then(
        data => {
            cardData = data;
            for (let i = 0; i < 15; i++) {
                console.log(cardData.cards[Math.floor(Math.random()*100)]);
            }
        },
        error => {
            console.log("Something broke",error)
        }
    )
}

handleGetData()

// $pack.on('click',function() {console.log("click works")})