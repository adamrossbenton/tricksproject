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
const getPack = $('#get-pack')

let cardDatabase

function handleGetData(event){
    event.preventDefault()

    $.ajax({
        url: https://api.magicthegathering.io/v1/cards
    }).then(
        data => {

        },
        error => {

        }
    )
}

$getPack.on('click',handleGetData)