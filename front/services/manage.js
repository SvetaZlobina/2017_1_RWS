const ind = document.getElementById("ind");
const login = document.getElementById("log");
const rating = document.getElementById("rat");
const about = document.getElementById("about");
const game = document.getElementById("game");
const profile = document.getElementById("prof");

const SiteService = window.SiteService;
const siteService = new SiteService();

var playerNames = [];

var isAuthed = false;

Router.init();
Router.nav("/");


myAudio = new Audio("game/assets/main_theme.mp3"); 
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();


function showRating() {
    ind.hidden = true;
    rating.hidden = false;
    game.hidden = true;
    profile.hidden = true;
    login.hidden = true;
    about.hidden = true;
}

function showProfile() {
    ind.hidden = true;
    rating.hidden = true;
    game.hidden = true;
    profile.hidden = false;
    login.hidden = true;
    about.hidden = true;
}

function showLogin() {
    ind.hidden = true;
    login.hidden = false;
    game.hidden = true;
    rating.hidden = true;
    about.hidden = true;
    profile.hidden = true;
}

function showAbout() {
    ind.hidden = true;
    login.hidden = true;
    game.hidden = true;
    rating.hidden = true;
    about.hidden = false;
    profile.hidden = true;
}

function showInd() {
    if(!isAuthed){
        document.getElementById("Profile").hidden = true;
        document.getElementById("Logout").hidden = true;
    }
    else
    {
        document.getElementById("Profile").hidden = false;
        document.getElementById("Logout").hidden = false;
    }
    ind.hidden = false;
    rating.hidden = true;
    login.hidden = true;
    about.hidden = true;
    game.hidden = true;
    profile.hidden = true;
}

function startGame() {
    if(siteService.checkAuth()) location.href = "game/index.html";
    else showLogin();
}

function showGame() {
    game.hidden = false;
    ind.hidden = true;
    rating.hidden = true;
    login.hidden = true;
    about.hidden = true;
}

function auth() {
    "use strict";
    siteService.checkAuth();
}

function userLogout() {
    "use strict";
    siteService.logout();
}

function makeRating() {
    "use strict";
    siteService.makeRating();
}

makeRating();