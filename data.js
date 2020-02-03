var id = 1;
const players = [
    {
        id: id++,
        name: "Robert Lewandowski",
        goals: 350,
        age: 32,
        clubs: ["Znicz Pruszkow", "Lech Poznan", "Borussia Dortmund", "Bayern Monachium"]
    },
    {
        id: id++,
        name: "Jakub Błaszyczkowski",
        goals: 61,
        age: 34,
        clubs: ["Wisła Krakow", "Borussia Dortmund", "AC Fiorentina", "VFL Wolfsburg"]
    },
    {
        id: id++,
        name: "Paweł Brożek",
        goals: 152,
        age: 37,
        clubs: ["Wisła Krakow", "Trabzonspor", "Recreativo Huelva"]
    }
];

function onPlayerSelection(id) {
    document.querySelector(".player").hidden = false;
    const player = players.find(item => item.id == id);
    document.querySelector(".player .age").innerText = player.age;
    document.querySelector(".player .name").innerText = player.name;
    document.querySelector(".player .goals").innerText = player.goals;
    document.querySelector(".player .clubs").innerText = player.clubs.join(", ");
}

const menu = document.querySelector(".list-group");

function buildMenu() {
    players.forEach((item) => {
        const menuItem = document.createElement("a");
        menuItem.setAttribute("class", "list-group-item list-group-item-action");
        menuItem.innerText = item.name;
        menuItem.addEventListener("click", () => {
            onPlayerSelection(item.id);
        });
        menu.appendChild(menuItem);
    });
}

function hidePlayer(){
    document.querySelector(".player").hidden = true;
}

function init(){
    hidePlayer();
    buildMenu();
}

init();
