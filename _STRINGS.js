// Caleb Hess
/* count variable to keep logs ocunted */
let count = 0;
/* a reference to the colorGenerator generator function */
const colorcycle = colorGenerator();


/*  a generator function to produce the color of the log count in the cycle of the rainbow  */
function* colorGenerator() {
    /* the colors of the rainbow in order */
    const colors = ["red", "orange", "yellow", "blue", "green", "indigo", "violet"]
    /* the initial index for the generator function */
    let i = -1;
    /* infinite generation */
    while (true) {
        /* restarts the index when the index number becomes bigger than the last index of the rainbow colors array */
        if (i === 6) { i = -1 }
        /* returns the color for this iteration of the generator */
        yield colors[++i];
    }
}
/* a class for testing palindromes */
class PalindromeTest {
    constructor() {

    }
    /* 
    method check 
    param string
    
    to check the input for a palindrome
    */
    check(string) {

        /* if type of string isnt string error */
        if (typeof string !== "string") {
            console.error(`${string} is not string`);
        } else {
            /* else continue */
            console.log(`${string} is a string and will be tested`);
        }
        /* if no input */
        if (!string) {
            /* throw no input error */
            throw Error(`no input`)
        } else if (string === undefined || string === "") {
            /* if string is present but is empty or undefined do nothing */
            //do nothing
        } else {
            /* initilaize result to store the result later */
            let result;
            /* take out the spaces to allow for a sentence to be tested in the palindrome checker */
            // make the input lower case
            // split it into an array
            // filter the array by not returning the value of the indexes containing the value equal to " "ie. spaces
            // join the filtered array into a string again
            let withoutspaces = String(string).toLowerCase().split("").filter((a) => { if (a === " ") { } else { return a } }).join("")
            /* take out the spaces to allow the sentences to match the palindrome requirements */
            // make the input lower case
            // split it into an array
            // filter the array by not returning the value of the indexes containing the value equal to " "ie. spaces
            // reverse the array
            // join the filtered array into a string again
            let reverse = String(string).toLowerCase().split("").filter((a) => { if (a === " ") { } else { return a } }).reverse().join("");
            // if the reverse is equal to the input result is pass
            if (withoutspaces === reverse) {
                console.log("its a palindrome!")
                result = "pass"
            } else {
                // else its a fail and result is fail
                console.log('not a palindrome');
                result = "fail"
            }
            // return a call to the showResults method with the input string the reverse string and the result string 
            return this.showResult(withoutspaces, reverse, result)
        }

    }

    // show Result method 
    // ltr = leftToRight input and rtl = rightToLeft input 
    // result = the result of the check method

    showResult(ltr, rtl, result) {
        // increase the count
        count++; ``
        // if the parameters arent included or are of the wrong type throw an error
        if (!ltr || typeof ltr !== "string") {
            throw Error(` ${ltr} not a string`)
        }
        // if the parameters arent included or are of the wrong type throw an error
        if (!rtl || typeof rtl !== "string") {
            throw Error(`${rtl} is not string`)
        }
        // if the parameters arent included or are of the wrong type throw an error
        if (!result) {
            throw Error(`no resultto show`);
        }
        // else continue creating the log
        else {
            // create the div for the lof number
            let logNumber = document.createElement('div')
            // update the innerHTML of the div log number to the current count value
            logNumber.innerHTML = count;
            // use the colorcycle generator function to set the background-colorj of the log number
            logNumber.style.backgroundColor = colorcycle.next().value
            // add the class logcount to the the lognumber div
            logNumber.classList.add("logcount");
            // create a new div element for the entire entry element
            let newEntry = document.createElement("div")
            // create a new div element for the subject of the log entry
            let newSubject = document.createElement("div")
            // create a new div element for the result of the log entry
            let newResult = document.createElement("div")
            // create the string to insert into the subject div
            let subjectString = `${ltr} | ${rtl}`
            // add the string to the div
            newSubject.innerHTML = subjectString;
            // put the result in the result div
            newResult.innerHTML = result;
            // add the classes ":entry" and ".result" to the entry
            newEntry.classList.add(result, "entry");
            // append the log NUmber first
            newEntry.appendChild(logNumber)
            // then append the subject
            newEntry.appendChild(newSubject)
            // then append the result
            newEntry.appendChild(newResult)
            // then prepend the newly created entry to the aside element with the id "logFrame" so that the most recent log entry stays up top
            document.getElementById("logFrame").prepend(newEntry)
            // log the creation
            console.log("log created")
            // notify the user of the result
            alert(result);
            // ask the user for more inputs
            let a = prompt('would you like to try another word?');
            // if provided more results perform the check again on them;
            this.check(a.toLowerCase())
        }
    }
}
// replaced the default submit action with my palindromeTest.check method applying the current input of the text input as the parameter value for the method
document.getElementById("strings").addEventListener("submit", (ev) => {
    ev.preventDefault();
    const palindromeTest = new PalindromeTest();
    palindromeTest.check(document.getElementById("input").value);
})