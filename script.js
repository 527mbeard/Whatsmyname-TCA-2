function generateName() {

    const movie = document.querySelector("input[name='movie']:checked");
    const letter = document.querySelector("input[name='letter']:checked");
    const color = document.getElementById("color").value.trim();
    const actor = document.getElementById("actor").value;
    const birth = document.getElementById("birth").value;

    if (!movie) { alert("Error. Please click an option."); return; }
    if (!letter) { alert("Error. Please enter the first letter."); return; }
    if (color === "") { alert("Error. Please enter a color."); return; }
    if (actor === "") { alert("Error. Please click an option."); return; }
    if (birth === "") { alert("Error. Please click an option."); return; }

    const newname = `${getPrefix(movie.value)} ${getFirstName(letter.value)} ${getMiddleName(color)} ${getLastName(actor)} ${getSuffix(birth)}`;
    document.getElementById("result").innerText = "Your spy name is: " + newname;

    let selected = document.querySelector(".single-check:checked");

    if ((movie.value === "fast" && letter.id === "one" && actor === "jason" )) {alert("You have chosen the JACKPOT choice!!! Yay ur special!");}

}

const checkboxes = document.querySelectorAll(".single-check");

checkboxes.forEach(box => {
    box.addEventListener("change", () => {
        checkboxes.forEach(other => {
            if (other !== box) {
                other.checked = false;
            }
        });
    });
});

function getPrefix(movie) {
    if (movie === "grey") return "Agent";
    else if (movie === "bee") return "Sergeant";
    else if (movie === "fast") return "Captain";
    else if (movie === "gorge") return "Officer";
    else if (movie === "run") return "General";
    else if (movie === "amateur") return "Private";
    else if (movie === "state") return "Commander";
    else if (movie === "ghost") return "Major";
}

function getFirstName() {
    if (document.getElementById('one').value === 'true') { return "Archer"; }
    else if (document.getElementById('two').value === 'true') { return "falcon"; }
    else if (document.getElementById('three').value === 'true') { return "jones"; }
    else if (document.getElementById('four').value === 'true') { return "orlando"; }
    else if (document.getElementById('five').value === 'true') { return "sky"; }
}

function getMiddleName(color) {
    color = color.toLowerCase().replace(/\s/g, "");
    switch (color) {
        case "red": return "Crazy";
        case "orange": return "Sneaky";
        case "yellow": return "Fast";
        case "green": return "Quiet";
        case "blue": return "Dark";
        case "purple": return "Mysterious";
        case "pink": return "Hidden";
        case "black": return "Secret";
        case "brown": return "Sinister";
        default: return "ErrorColor";
    }
}

function getLastName(actor) {
    if (actor === "glen") return "Phoenix";
    else if (actor === "miles") return "Shadow";
    else if (actor === "anya") return "Powers";
    else if (actor === "jason") return "Hunter";
    else if (actor === "john") return "Scorpion";
    else if (actor === "chris") return "Star";
    else if (actor === "ryan") return "Metal";
    else if (actor === "idris") return "Echo";
    else if (actor === "ana") return "Night";
}

function getSuffix(birth) {
    const month = new Date(birth).getMonth() + 1;

    if (month === 1) return "Jr.";
    if (month === 2) return "Sr.";
    if (month === 3) return "PhD";
    if (month === 4) return "MD";
    if (month === 5) return "Jr.";
    if (month === 6) return "Sr.";
    if (month === 7) return "PhD";
    if (month === 8) return "MD";
    if (month === 9) return "Jr.";
    if (month === 10) return "Sr.";
    if (month === 11) return "PhD";
    if (month === 12) return "MD";
}

