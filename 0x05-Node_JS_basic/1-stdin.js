// Display initial message
console.log("Welcome to Holberton School, what is your name?");

// Read user input from stdin
process.stdin.setEncoding('utf-8');

// Event listener for when data is being received via stdin
process.stdin.on('data', (data) => {
    //Trim the input to remove any extra newlines or spaces
    const input = data.trim();

    // Display the user's name
    console.log(`Your name is: ${input}`);

    // Exit the program and display the closing message
    console.log("This important software is now closing");

    // Close stdin to stop reading input
    process.stdin.end();
});