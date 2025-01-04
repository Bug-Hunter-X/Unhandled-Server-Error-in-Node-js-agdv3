# Unhandled Server Error in Node.js
This repository demonstrates a common error in Node.js server development: lack of proper error handling. The original code crashes silently if the port is already in use. The solution demonstrates how to gracefully handle this error and provide informative feedback.

## Original Code (bug.js)
The `bug.js` file contains the initial code with the error.

## Solution (bugSolution.js)
The `bugSolution.js` file provides a corrected version of the code that handles the error properly.

## How to Run
1. Clone this repository.
2. Navigate to the repository's directory.
3. Run the original code using `node bug.js`.
4. Attempt to run the code again to simulate the port in use error.
5. Run the solution code using `node bugSolution.js`.
6. Attempt to run the code again to observe the improved error handling.