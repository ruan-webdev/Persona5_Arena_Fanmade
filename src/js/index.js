/*Things to do*/

/*
    OBJECTIVE 1 - When hovering the mouse over the character, we have to:

        - put the selected class on the character that we hover over to add animation to it
        - remove the selected class from the character that is selected

*/

/*
    OBJECTIVE 2 - When you hover the mouse over the character, change the image and name of the big character

            - change the player 1 character image
            - change the player 1 name of the selected character
*/


/*Start of the objective 1*/
const characters = document.querySelectorAll('.character');

characters.forEach((character) => {
    //event for the mouse hover
    character.addEventListener('mouseenter', () => {


        const idSelected = character.attributes.id.value; /*we want the id value from our html */

        /*does not allow this character to be selected*/
        if (idSelected === 'queen') return;

        /*remove the class selected from the character who has selected*/
        const selectedCharacter = document.querySelector('.selected');
        selectedCharacter.classList.remove('selected');

        /*add the class selected for the character the mouse is above*/
        character.classList.add('selected');


        /*Start of the objective 2*/

        /*change the name of the image file to the id of the variable 'idSelected' */
        const player1Image = document.getElementById("character-player-1");
        player1Image.src = `./src/images/selected/${idSelected}Big.png`;

        /*Change the name of the character from player 1*/
        const namePlayer1 = document.getElementById("name-player-1");
        const nameSelected = character.getAttribute("data-name");

        namePlayer1.innerHTML = nameSelected;

    })
})


