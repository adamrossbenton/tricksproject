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
const $pack = $('input[type="submit"]')
const card = $('.card')

let cardData

const render = () => {
    console.log(cardData)
    card.text(cardData.cards[0].name)
}

function handleGetData(event){
    event.preventDefault();

    $.ajax({
        url: "https://api.magicthegathering.io/v1/cards"
    }).then(
        data => {
            cardData = data;
            console.log(cardData);
        },
        error => {
            console.log("Something broke",error)
        }
    )
}

$('button').on('click',handleGetData)