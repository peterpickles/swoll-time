# Swoll time, your future self will thank you
=====
Working out is hard, so this app will allow

## Instructions



##Technical Requirements
* Display a game in the browser
* Switch turns between two players, or switch turns between a player and the computer(AI)
* Design logic for winning & visually display which player won
* Use Javascript or JQuery for DOM manipulation
* Deploy your game online, where the rest of the world can access it
* Use semantic markup for HTML and CSS (adhere to best practices)

## Technologies Used
* jquery
* HTML/CSS

# Approach Taken
* Start the progress by buiding the basic HTML mockup!
* Created a success message and figured out the onload logic for the message
* Created an array for the cards for each letter of the alphabet
* Wrote a function pull the array for alphabets and dynamically create a div for each letter
* HARD CODE the letters to a card position for matching
* Created cardDrop matching condition and droppable positions
* Created a stupid basic winning condition based on the number correct cards counted 


# Issues
* Learning jquery
* Originally I had a combination of vanilla javascript and Jquery on my page and it was getting hard to integrate it so I went with jquery to simpilify the process!
* Matching and comparing arrays are hard, my design was to originally pull a word, split the string into just characters, dynamically generate the letters based on the character array and so Lauren only has those letters to chose from.  YEA... that didn't work which led to me hardcoding the card positions
* The winning condition is not complete, I can still drag cards


# Fun Stuff
* Figuring ux experience for a two year old
* Getting that first card to drop!

# Unsolved Problems
* figuring out how to dynamically generate only cards for letters based on the word.  Example, if I pull the word CAT, only generate "C" "A" "T"
* Finish winning condition
* Add music to each of the draggables and have a theme song that plays during the game... because everyone loves music!

# Next Steps
* Add music
* Fix winning condition
* Add compare array function and figure out how to dynamically display divs based on the word
* add roads
* additional styling