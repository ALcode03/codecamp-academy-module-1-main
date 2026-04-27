/* Author: ALEXANDRA KEDJU
Solution: Movie Watchlist Manager
*/

let Watchlist = ["Inception", "Interstellar", "The Matrix", "Gladiator"];
// 1. Print the total number of the movies in the watchlist
console.log("\n**************************");
console.log(`Total movies in the watchlist: ${movies.length}`);
console.log("****************************");

// 2. Add two new movies to the watchlist
Watchlist.push("The Dark Knight");
Watchlist.push("Avatar");

console.log("\n*****************");
console.log(`Inventory after adding two new movies: ${Watchlist}`);
console.log("**********************************");

// 3. Remove the last movie from the watchlist
let removedLastmovie = Watchlist.pop();
console.log("\n**********************************");
console.log(`Removed last movie: ${removedLastmovie}`);
console.log("***************************************");

// 6. Print the first movie on the watchlist.
console.log("\n**************************************");
console.log(`first movie on the Watchlist: ${Watchlist[0]}`);
console.log("****************************************");

// 6. Print the last movie on the watchlist.
console.log("\n*****************************************");
console.log(`Last movie on the Watchlist: ${Watchlist[Watchlist.length - 1]}`);
console.log("*******************************************");

// 7. Check if the watchlist has 4 or more movies:
if (Watchlisttchlist.length>=4) {
    console.log ("You have many movies to watch!"); // - If true, print `"You have many movies to watch!"`
} else {
console.log ("Your watchlist is small."); // - If false, print `"Your watchlist is small."`


// 8. Print all movies in the watchlist with their position number, starting from 1.
console.log ("\n******************************************");
console.log(`Movies on the watchlist: ${watchlist.length}`);


for (let i = 0; i < watchlist.length; i++) {
console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
console.log (`${i + 1} - ${watchlist[i]}`)};
}