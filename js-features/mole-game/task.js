let allHoles = document.querySelectorAll('.hole');
let dead = +document.getElementById('dead').textContent;
let lost = +document.getElementById('lost').textContent;
const startGame = function () {
    alert('попади в 10 кротов и ты победишь!');
    alert('но 5 промахов это проигрыш');
    document.getElementById('dead').textContent = 0;
    document.getElementById('lost').textContent = 0;
    dead = 0;
    lost = 0;
}
startGame();
for (let i = 0; i < allHoles.length; i++) {
    let hole = allHoles[i];
    hole.onclick = function () {
        if (hole.className.includes('hole_has-mole')) {
            dead += 1;
            document.getElementById('dead').textContent = dead;
            if (dead == 10) {
                alert('ты победил');
                alert('начнём сначала');
                startGame();
            }
        } else {
            lost += 1;
            document.getElementById('lost').textContent = lost;;
            if (lost == 5) {
                alert('ты проиграл');
                alert('начнём сначала');
                startGame();
            }
        }
    }
}