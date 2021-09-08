TRICKS: THE MEETING

Link: https://wonderful-jones-41570f.netlify.app/

OVERVIEW:

Do you really like Magic: the Gathering, but you're too poor to buy five thousand cards every week?
That's ok, me too!

TRICKS: THE MEETING is a MtG pack-opening simulator, designed to almost perfectly recreate the experience of being the only one in your friend group that's into Magic. It utilizes a comprehensive card database API to generate 15-card "packs" (using the API found right here: https://docs.magicthegathering.io/), displaying the card name and image (where applicable) by calling the necessary information from 15 randomly-selected cards from the API.

FEATURES:

* "Get Pack" button, generates 15 MtG cards at random

    Randomization currently jumps to a random page of API, from 1 to 612, then pulls 15 cards at random from one of the 100 cards on that page. Not quite perfect random and there is high probability of repeats within packs, but this could be analogous to IRL packs from a specific set/period of time (or at least that's how I'm justifying it to myself)

* Newly-acquired cards are added to your library to save them for later--maybe show them off to your friends!

    "Check out my awesome new Black Lotus card, I got it for free online!"

    "Yeah but it's not real."

    "WELL THEN NEITHER IS OUR FRIENDSHIP!"

* Breathtakingly underwhelming animations

COMING SOON:

* Hover over each card to get details (mana cost, abilities, power/toughness, etc.) 

* Build a deck from the cards in your library that you've acquired. You can't do much with it, but at least you've got it, which is kinda cool right?

* Ask us to build a deck for you! Tell us what you want in a deck and we'll pull cards at random that fit your specifications

    Must choose:

        Color type(s)

    Optional choices:

        Creature type(s)

        Ability(ies)

    We can't guarantee it will be a good deck, but again, at least you've got a deck!

HOW IT GOT HERE:

The API I used contains a comprehensive collection of Magic: the Gathering cards throughout the past several decades, along with the various characteristics associated with each card (card image, card color, mana cost, power/toughness, even as specific as the name of the artist who drew the card art). Each API call returns a single page of a 612-page database, with 100 cards on each page.

Using the information available to me within the API, I was able to implement a "Get Pack" button, which pulls the name and card image information from a randomly-selected card and displays these in the "Pacquisition" section beneath the "Get Pack" button. This process runs a total of 15 times for each button press, to simulate opening a brand-new 15-card MtG booster pack. These cards are then filed in your "Library" section below, to be stored for future use (there's a cool deck-builder idea for these that I have, I will design it at a later date). Cards in the Library are sorted into six separate sections based on their color (white, blue, black, red, green, or colorless). In the event that the card is more than one color, it is assigned to a section based on the traditional color wheel priority: white, blue, black, red, green. One other point of pride for me: I think it looks pretty dang good--the color scheme is on point, the collapsible animations are pretty smooth, and the Pacquisition section is pretty uniform in its display across devices (single column for mobile, 3x5 on tablet, 5x3 on desktop).

TECHNOLOGIES USED:

* HTML

* CSS

* JS

* JQuery

* AJAX

* Google Fonts

* magicthegathering.io API

Some challenges I faced during the coding process:

* The API is not perfect--for some reason, a handful of pages do not contain a card image URL, which would give me a 404 for the card image portion of the Pacquisition. I found a way around this by replacing any instance of an "undefined" image URL with a funny "dead link" image shamelessly ripped from Imgur.

* I had a difficult time deciding how I wanted to display additional card information (which will be a crucial feature once the deck builder is implemented) in addition to just the name and image in the Pacquisition section, or just the name in the card library. In my pursuit of this feature thus far, I have learned a bit about jQuery's .click and .hover, which will be useful once I finally figure out how to successfully implement this.