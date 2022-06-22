let countH = 0
let countG = 0

let homeScr = document.getElementById("home-scr")
let guestScr = document.getElementById("guest-scr")
let newGame = document.getElementById("home-scr").getElementById("guest-scr") 



function add1point() {
    countH += 1
    homeScr.innerText = countH
}

function add2points() {
    countH += 2
    homeScr.innerText = countH
}

function add3points() {
    countH += 3
    homeScr.innerText = countH
}

function add1pointguest() {
    countG += 1
    guestScr.innerText = countG
}

function add2pointsguest() {
    countG += 2
    guestScr.innerText = countG
}

function add3pointsguest() {
    countG += 3
    guestScr.innerText = countG
}

function newgame() {
    countH = 0
    countG = 0
    homeScr.innerText = countH
    guestScr.innerText = countG
}