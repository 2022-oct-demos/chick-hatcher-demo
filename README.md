# Plan

### HTML elements (page load)

    - input for adding new chicks (with a button) => form
    - span for tracking hatched chicks
    - span for tracking farmer HP
    - chicks list (div el)

### State

    - array of chicks (object with id, name, hp)
    - number of hatched chicks
    - farmer hp
    - currentID (in order to create new chicks with ids)

### Events

    - each chick is clickable
        - on click...
            - possibly decrement the chick's hp
            - possibly decrement the farmers hp
            - possibly increment the hatched chicks
            - update the DOM with new chick and farmer hp and hatched chicks state
    - new chick form (on submit)
        - user supplied name & submit form
        - make new chick object
        - add object to chicks array
        - "update list display"
            - clear out the list DOM
            - loop through the chicks
            - render a new chick element for each item
            - append each el to the container el

### Functions

-   displayChicks - clear out the list and render the chick element for each item
-   renderChick(chick)- create a check element for the specific chick object
-   chickClickHandler - take care of the game logic which chicks are clicked

### Slices

    1. rendering chicks list to page
    2. form to create new chicks (render to page)
    3. gamification (resulting impacts to HP on user clicks)
