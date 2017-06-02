"use strict";
import Manage from './manage';

let manage = window.manage;

export var Router = {
    routes: {
        "/": "indexPage",
        "/rating/": "ratingPage",
        "/about/": "aboutPage",
        "/login/": "loginPage",
        "/game/":"gamePage"
    },
    manage: new Manage,

    init: function (){
        this._routes = [];
        for( var route in this.routes ){
            var methodName = this.routes[route];
            this._routes.push({
                pattern: new RegExp('^'+route.replace(/:\w+/, '(\\w+)')+'$'),
                callback: this[methodName]
            });
        }
    },
    nav: function (path){
        var i = this._routes.length;
        while( i-- ){
            var args = path.match(this._routes[i].pattern);
            if( args ){
                this._routes[i].callback.apply(this, args.slice(1));
            }
        }
    },

    indexPage: function () {
        history.pushState(null, null, "/");
        var can = document.getElementById("PointJS-canvas_0");
        if (can) {
            can.parentNode.removeChild(can);
        }
        // startGame.game.clear();
        // startGame.game.stop();
        // document.getElementById("PointJS-canvas_0").classList.remove("game-canvas-active");
        // document.getElementById("PointJS-canvas_0").classList.add("game-canvas-not");
        //manage = window.manage;
        this.manage.showInd();
    },

    ratingPage: function () {
        history.pushState(null, null, "/rating");
        var can = document.getElementById("PointJS-canvas_0");
        if (can) {
            can.parentNode.removeChild(can);
        }
        //manage = window.manage;
        this.manage.showRating();
    },

    aboutPage: function () {
        history.pushState(null, null, "/about");
        var can = document.getElementById("PointJS-canvas_0");
        if (can) {
            can.parentNode.removeChild(can);
        }
        //manage = window.manage;
        this.manage.showAbout();
    },

    loginPage: function () {

        history.pushState(null, null, "/login");
        var can = document.getElementById("PointJS-canvas_0");
        if (can) {
            can.parentNode.removeChild(can);
        }
        //manage = window.manage;
        this.manage.showLogin();
        document.getElementById("username").addEventListener("onfocus", function () {
            console.log(1);
            this.autofocus = true;
        })
    },

    gamePage: function () {
        history.pushState(null, null, "/game");
        //manage = window.manage;
        this.manage.showGame();
    }
};

var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

window.onpopstate = function(e){
    e.preventDefault();
    var l = getLocation(document.location.href);
    Router.nav(l.pathname);
};

window.router = Router;

// Router.init();
// let str = getLocation(document.location.href).pathname;
//
//
// Router.init();
// //alert(str.substring(0, str.length - 1));
// Router.nav(str.substring(0, str.length - 1));

