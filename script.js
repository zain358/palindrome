// Select Relevant DOM

const button = document.querySelector("#btn");
const inputText = document.querySelector("#input-text");
const result = document.querySelector("#result");

//Add event listener to the button

button.addEventListener("click",() => {
    // Get input values and trim any whitespaces
    const text = inputText.value.trim();

    // Check if the input is empty
    if(text.length==0){
        //Show the alert if the input is empty
        alert("input cannot be empty");
        return; // Exit the fuction if input is empty
    }

    // Remove any non-alphanumeric chrachters and convert to lowercase
    const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Check if the cleaned text is a palindrome by comparing the orignal and reversed strings
    const isPalindrome = cleanText === cleanText.split("").reverse("").join("");

    // Create a message based on wheather the input is a palindrome or not
    const message = isPalindrome
    ? `<span>Yes:</span> It's a Palindrome!`
    : `<span>Nope:</span> Not a Palindrome!`;

    // Unpdate the result elements with the message
    result.innerHTML = message;
    result.classList.remove("error", "success");
    setTimeout(() => {
        result.classList.add(isPalindrome ? "success" : "error")
    },10)
})