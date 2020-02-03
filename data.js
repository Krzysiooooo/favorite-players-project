//ZADANIE
// 0.Zacommitowac i wypchnac na Git-huba
// 1.Dokonczyc funkcje onPlayersSelection
// 2.Zastosowac wlasciwe wyswietlanie dla klubow
// 3.Dodac wiecej atrybutow dla gracza
// 4.Po wejsciu na strone przed wybraniem gracza w prawej sekscji (zawodnika) nie powinno sie wyswietlac nic
var id = 1;
const players = [
    {
        id: id++,
        firstName: "Robert Lewandowski",
        goals: 350,
        age: 32,
        clubs: ["Znicz Pruszkow", "Lech Poznan", "Borussia Dortmund", "Bayern Monachium"]
    },
    {
        id: id++,
        firstName: "Jakub Błaszyczkowski",
        goals: 61,
        age: 34,
        clubs: ["Wisła Krakow", "Borussia Dortmund", "AC Fiorentina", "VFL Wolfsburg"]
    },
    {
        id: id++,
        firstName: "Paweł Brożek",
        goals: 152,
        age: 37,
        clubs: ["Wisła Krakow", "Trabzonspor", "Recreativo Huelva"]
    }
];
function onPlayerSelection(id) {
    const player = players.find(item => item.id == id);
    document.querySelector(".player .age").innerText = player.age;
}
const menu = document.querySelector(".list-group");
players.forEach((item) => {
    const menuItem = document.createElement("a");
    menuItem.setAttribute("class", "list-group-item list-group-item-action");
    menuItem.innerText = item.firstName;
    menuItem.addEventListener("click", () => {
        onPlayerSelection(item.id);
    });
    menu.appendChild(menuItem);
});