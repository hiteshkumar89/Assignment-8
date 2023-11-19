// //STEP 1
// // Creating a string array with favorite movies
// let myFavoriteMovies = ["Titanic", "Extraction", "Inception", "The Dark Knight", "Godzilla"];
// console.log("Second Favorite Movie: " + myFavoriteMovies[1]);


// //STEP 2
// Creating an array using the constructor with a length of 5
// let movies = new Array(5);
// movies[0] = "Titanic";
// movies[1] = "Extraction";
// movies[2] = "Inception";
// movies[3] = "The Dark Knight";
// movies[4] = "Godzilla";
// console.log("First Favorite Movie: " + movies[0]);


// //STEP 3
// Creating an array using the constructor with a length of 5
// let movies = new Array(5);
// movies[0] = "Titanic";
// movies[1] = "Extraction";
// movies[2] = "Inception";
// movies[3] = "The Dark Knight";
// movies[4] = "Godzilla";
// // Adding a new movie to the 3rd position
// movies.splice(2, 0, "Avatar");
// // Displaying the updated array length
// console.log("Updated Array Length: " + movies.length);


// //STEP 4
// Declaring an array using literal notation
// let movies = ["Titanic", "Extraction", "Inception", "The Dark Knight", "Godzilla"];
// // Displaying the original contents of the array
// console.log("Original Array:", movies);
// // Using splice to remove the first movie
// movies.splice(0, 1);
// // Displaying the contents of the array after splice
// console.log("Updated array:", movies);


// //STEP 5
// Declaring an array using literal notation 
// let movies = ["Titanic", "Extraction", "Inception", "The Dark Knight", "Godzilla", "The Matrix", "Hulk"];
// // Using a for/in loop to iterate through the array
// for (let index in movies) {
//     console.log("Movie at index " + index + ": " + movies[index]);
// }


// //STEP 6
// Declaring an array using literal notation
// let movies = ["Titanic", "Extraction", "Inception", "The Dark Knight", "Godzilla", "The Matrix", "Hulk"];
// // Using a for/of loop to iterate through the array
// for (let movie of movies) {
//     console.log("Movie: " + movie);
// }


// //STEP 7
// Declaring an array using literal notation
// let movies = ["Titanic", "Extraction", "Inception", "The Dark Knight", "Godzilla", "The Matrix", "Hulk"];
// // Sorting the array
// movies.sort();
// // Using a for/of loop to iterate through the sorted array
// for (let movie of movies) {
//     console.log("Movie: " + movie);
// }


// //STEP 8
// // Declaring an array using literal notation
// let movies = ["Titanic", "Extraction", "Inception", "The Dark Knight", "Godzilla", "The Matrix", "Hulk"];
// // Creating a new array for least favorite movies
// let leastFavMovies = ["King", "Dune", "Tiger"];
// // Displaying both arrays in the console with formatting
// console.log("Movies I like:\n");
// for (let movie of movies) {
//     console.log(movie);
// }
// console.log("\nMovies I regret watching:\n");
// for (let leastFavMovie of leastFavMovies) {
//     console.log(leastFavMovie);
// }


// //STEP 9
// Declaring an array using literal notation
// let movies =  ["Titanic", "Extraction", "Inception", "The Dark Knight", "Godzilla", "The Matrix", "Hulk"];
// // Creating a new array for least favorite movies
// let leastFavMovies = ["King", "Dune", "Tiger"];
// let combinedMovies = movies.concat(leastFavMovies);
// // Sorting the combined array in reverse order
// combinedMovies.sort().reverse();
// // Displaying the combined and reverse-sorted list in the console
// console.log("Combined and Reverse-Sorted Movies List:\n");
// for (let movie of combinedMovies) {
//     console.log(movie);
// }
  

// //STEP 10
// Declaring an array using literal notation
// let movies = ["Titanic", "Extraction", "Inception", "The Dark Knight", "Godzilla", "The Matrix", "Hulk"];
// // Creating a new array for least favorite movies
// let leastFavMovies = ["King", "Dune", "Tiger"];
// // Concatenating the two arrays
// let combinedMovies = movies.concat(leastFavMovies);
// // Sorting the combined array in reverse order
// combinedMovies.sort().reverse();
// // Using an array function to return the last item in the array
// let lastMovie = () => combinedMovies.slice(-1)[0];
// // Displaying the last item in the console
// console.log("Last Movie in the Combined List:\n" + lastMovie());


// //STEP 11
// Declaring an array using literal notation
// let movies = ["Titanic", "Extraction", "Inception", "The Dark Knight", "Godzilla", "The Matrix", "Hulk"];
// // Creating a new array for least favorite movies
// let leastFavMovies = ["King", "Dune", "Tiger"];
// // Concatenating the two arrays
// let combinedMovies = movies.concat(leastFavMovies);
// // Sorting the combined array in reverse order
// combinedMovies.sort().reverse();
// // Using an array method to return the first item in the array
// let firstMovie = combinedMovies[0];
// // Displaying the first item in the console
// console.log("First Movie in the Combined List: " + firstMovie);


// //STEP 12
// Declaring an array using literal notation
// let movies = ["Titanic", "Extraction", "Inception", "The Dark Knight", "Godzilla", "The Matrix", "Hulk"];
// // Creating a new array for least favorite movies
// let leastFavMovies = ["King", "Dune", "Tiger"];
// let combinedMovies = movies.concat(leastFavMovies);
// // Retrieving indices of movies in leastFavMovies array
// let indicesToRemove = leastFavMovies.map(movie => combinedMovies.indexOf(movie));
// // Displaying the indices to be removed
// console.log("Indices to Remove:", indicesToRemove);
// // Movies that I do like
// let likedMovies = ["Avatar", "Avengers", "Frozen"];
// // Updating the array by replacing disliked movies with liked movies
// for (let i = 0; i < indicesToRemove.length; i++) {
//     let indexToRemove = indicesToRemove[i];
//     if (indexToRemove !== -1 && indexToRemove < combinedMovies.length) {
//         combinedMovies[indexToRemove] = likedMovies[i];
//     }
// }
// // Displaying the updated array
// console.log("Updated Combined List:\n", combinedMovies);


// //STEP 13
// Creating a multi-dimensional array with movie names and rankings
// let moviesArray = [
//     ["Titanic", 1],
//     ["Extraction", 2],
//     ["Inception", 3],
//     ["Avatar", 4],
//     ["Frozen", 5]
// ];
// // Using the filter() method to extract and display only the movie names
// let movieNames = moviesArray.filter(movie => typeof movie[0] === 'string').map(movie => movie[0]);
// // Displaying the filtered movie names
// console.log("Filtered Movie Names:\n", movieNames);


// //STEP 14
// Creating a string array with employee names
// let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
// // Anonymous function to display employees
// let showEmployee = function(employeeArray) {
//     console.log("Employees:\n");
//     for (let employee of employeeArray) {
//         console.log(employee);
//     }
// };
// showEmployee(employees);


// //STEP 15
// function filterValues(inputArray) {
//     return inputArray.filter(value => {
//         // Filtering out false, null, 0, and blank values
//         return value !== false && value !== null && value !== 0 && value !== '';
//     });
// }
// // Test Data
// let testData = [58, '', 'abcd', true, null, false, 0];
// // Testing the function and displaying the result
// console.log(filterValues(testData));


// //STEP 16
// function getRandomItemFromArray(arr) {
//     // Check if the array is not empty
//     if (arr.length === 0) {
//         return undefined; // Return undefined if the array is empty
//     }
//     // Generate a random index within the array length
//     let randomIndex = Math.floor(Math.random() * arr.length);
//     // Return the random item from the array
//     return arr[randomIndex];
// }
// // Example usage with a numeric array
// let numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let randomNum = getRandomItemFromArray(numericArray);
// // Displaying the randomly chosen item
// console.log("Random number:", randomNum);


// //STEP 17
// function getLargestNumberFromArray(arr) {
//     // Check if the array is not empty
//     if (arr.length === 0) {
//         return undefined; // Return undefined if the array is empty
//     }
//     // Use the spread operator to create a copy of the array and apply Math.max
//     return Math.max(...arr);
// }
// // Example usage with a numeric array
// let numericArray = [12, 5, 27, 8, 15, 4];
// let largestNumber = getLargestNumberFromArray(numericArray);
// // Displaying the largest number
// console.log("Largest Number:", largestNumber);
