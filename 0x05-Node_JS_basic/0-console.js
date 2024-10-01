/**
 * Logs a message to the console.
 * @param {string} message - The message to log.
 * @returns {void}
 */

// function to display message
function displayMessage(message) {
    console.log(message);
}

/**
 * Exports the displayMessage function.
 * @module displayMessage
 * @function
 */

// Export the function to make it available for other modules
module.exports = displayMessage;