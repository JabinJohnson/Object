const ol = document.querySelector("ol");
const movies = [
    {
        name:"Toy Story 3",
        released: 2010,
        director:"Lee Unkrich",
    },
    {
        name:"Penguins of Madagascar",
        released: 2014,
        director:"Eric Darnell and Simon J. Smith"
    },
    {
        name:"Robin Hood",
        released: 2018,
        director:"Otto Bathurst"
    }
];
const template = movies.map(movie => `
<li>
    <p>Movie: ${movie.name}</p>
    <p>Release Date: ${movie.released}</p>
    <p>Directed By: ${movie.director}</p>
</li>
`)
ol.innerHTML=template.join('');