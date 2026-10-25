
const movies = [];

let movieCount;

while (true) {
    const input = prompt("How many movies do you want to rate?");

    if (input === null) {
        movieCount = 0;
        break;
    }

    const count = Number(input);

    if (
        input.trim() !== "" &&
        Number.isInteger(count) &&
        count >= 1 &&
        count <= 50
    ) {
        movieCount = count;
        break;
    }

    alert("Please enter a whole number between 1 and 50.");
}

for (let i = 0; i < movieCount; i++) {
    let title;

    while (true) {
        title = prompt(`Enter the title of movie ${i + 1}:`);

        if (title === null) {
            title = "";
            break;
        }

        title = title.trim();

        if (title !== "") {
            break;
        }

        alert("The movie title cannot be empty.");
    }

    if (title === "") {
        break;
    }

    let rating;

    while (true) {
        const input = prompt(`Enter a rating for "${title}" (1-5):`);

        if (input === null) {
            rating = null;
            break;
        }

        const value = Number(input);

        if (
            input.trim() !== "" &&
            Number.isInteger(value) &&
            value >= 1 &&
            value <= 5
        ) {
            rating = value;
            break;
        }

        alert("Please enter a whole-number rating from 1 to 5.");
    }

    if (rating === null) {
        break;
    }

    movies.push({
        title: title,
        rating: rating
    });
}

movies.sort((a, b) => b.rating - a.rating);

console.log("Movies sorted by rating:", movies);

const output = document.getElementById("output");

if (movies.length === 0) {
    output.textContent = "No movies were entered.";
} else {
    const highestRating = movies[0].rating;
    const highestRatedMovies = movies.filter(
        movie => movie.rating === highestRating
    );

    const heading = document.createElement("h3");
    heading.textContent = "Highest-rated movie(s):";
    output.appendChild(heading);

    const winners = document.createElement("p");
    winners.textContent = highestRatedMovies
        .map(movie => `${movie.title} (${movie.rating}/5)`)
        .join(", ");
    output.appendChild(winners);

    const table = document.createElement("table");
    table.border = "1";
    table.cellPadding = "8";

    const headerRow = document.createElement("tr");

    const titleHeader = document.createElement("th");
    titleHeader.textContent = "Movie Title";

    const ratingHeader = document.createElement("th");
    ratingHeader.textContent = "Rating";

    headerRow.appendChild(titleHeader);
    headerRow.appendChild(ratingHeader);
    table.appendChild(headerRow);

    for (const movie of movies) {
        const row = document.createElement("tr");

        const titleCell = document.createElement("td");
        titleCell.textContent = movie.title;

        const ratingCell = document.createElement("td");
        ratingCell.textContent = `${movie.rating}/5`;

        row.appendChild(titleCell);
        row.appendChild(ratingCell);
        table.appendChild(row);
    }

    output.appendChild(table);
}
