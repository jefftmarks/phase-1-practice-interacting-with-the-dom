document.addEventListener('DOMContentLoaded', () => {

    //~~~~~~~~~~Deliverable 1~~~~~~~~~~
    
    //grab value (inner text) of counter
    const counter = document.querySelector('#counter');

    //initialize count
    let count = 0;

    //incremenet or decrement count and update counter to reflect new value
    function increaseCounter() {
        count++;
        counter.innerText = count;
    }

    function decreaseCounter() {
        count--;
        counter.innerText = count;
    }

    //create interval manager and invoke to initiate setInterval
    // (https://stackoverflow.com/questions/10935026/how-to-clear-interval-and-set-it-again)
    let intervalID = null;

    function intervalManager(trigger) { //trigger is boolean: true or false
        if (trigger) {
            intervalID = setInterval(increaseCounter, 1000);
        } else {
            clearInterval(intervalID);
        }
    }

    intervalManager(true);


    //~~~~~~~~~~Deliverable 2~~~~~~~~~~

    //grab plus and minus buttons
    const plus = document.querySelector('#plus');
    const minus = document.querySelector('#minus');
    
    //add click event listeners to buttons and assign increase and decrease functions
    plus.addEventListener('click', increaseCounter);
    minus.addEventListener('click', decreaseCounter);


    //~~~~~~~~~~Deliverable 4~~~~~~~~~~

    //create empty array in which to track likes
    const array = [];

    //grab like button
    const heart = document.querySelector('#heart');

    //add event listener
    heart.addEventListener('click', () => {
        let currentValue = counter.innerText;

        //grab ul
        let ul = document.querySelector('ul');

        //push current counter value to main array
        array.push(currentValue);

        //filter array to search for number of instances current counter value has appeared. Find the length of the new array returned by filter()
        let likeCount = array.filter((num) => num === currentValue).length;

        //create message to reflect like count
        let message1 = `${currentValue} has been liked ${likeCount} time`;
        let message2 = `${currentValue} has been liked ${likeCount} times`;

        //find the FIRST number in the array of values that is greater than the current value
        //if no number, greaterNum = undefined
        //need to parseInt num because array elements are strings
        let greaterNum = array.find((num) => parseInt(num) > currentValue);
        //grab (if it exists) the node with the ID of the greaterNum
        console.log(`current value: ${currentValue}`);
        console.log(`greater value: ${greaterNum}`);
        console.log(array);
        let greaterNode = document.getElementById(greaterNum);
        
        //set li inner text to message and append to ul
        //use conditional for time(s) distinction
        if (likeCount === 1) {
            let li = document.createElement('li'); //create new li
            li.id = currentValue; //give unique ID of counter value
            li.innerText = message1; //give message one
            if (greaterNum) {
                ul.insertBefore(li, greaterNode);
            } else {
                ul.appendChild(li); //append to ul
            }
        } else {
            //if li already exists, grab the li with the ID of the count value and insert message 2
            document.getElementById(currentValue).innerText = message2;
        }
        
    });


    //~~~~~~~~~~Deliverable 4~~~~~~~~~~

    //grab pause button
    const pause = document.querySelector('#pause');

    //grab submit button
    const submit = document.querySelector('#submit');

    //add click event listener to pause button
    pause.addEventListener('click', () => {
        if (pause.innerText === 'pause') {
            intervalManager(false); //assign intervalManager to clearInterval
            pause.innerText = 'resume'; //change button text
            plus.disabled = true; //disable buttons
            minus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
        } else if (pause.innerText === 'resume') {
            intervalManager(true); //assign intervalManager to restart setInterval
            pause.innerText = 'pause'; //change button text
            plus.disabled = false; //enable buttons
            minus.disabled = false;
            heart.disabled = false;
            submit.disabled = false;
        }
    });


    //~~~~~~~~~~Deliverable 4~~~~~~~~~~

    //grab form
    const form = document.querySelector('form')

    //add event listener
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        //find value of comment
        const comment = event.target.comment.value;
        //grab comments list
        const commentDiv = document.querySelector('#list');
        //create p element, give it inner text of comment, append to commentDiv
        const p = document.createElement('p');
        p.innerText = comment;
        commentDiv.appendChild(p);
        form.reset();
    })

    //idea
    /* to sort by number order, run a find on array to find first number greater than the counter number, then do a nodebefore etc
    */


});
