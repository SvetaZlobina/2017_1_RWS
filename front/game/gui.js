import StartVars from './startVars'
//<script type="text/javascript" src="http://pointjs.ru/point.js"></script> <!--Game engine-->


export default class GUI {
    constructor() {
        //singleton
        if (GUI.__instance) {
            return GUI.__instance;
        }
        GUI.__instance = this;

        this.startVars = new StartVars();
        this.back = this.startVars.game.newRoundRectObject({
            x: 10,
            y: 10,
            w: 200,
            h: 40,
            radius: 5,
            fillColor: "gray",
            strokeColor: "darkred",
            strokeWidth: 3
        });

        this.hpBar = this.startVars.game.newRoundRectObject({
            x: 10,
            y: 10,
            w: this.startVars.players[0].health * 19.4,
            h: 35,
            radius: 5,
            fillColor: "red"
        });

        this.backS = this.startVars.game.newRoundRectObject({
            x: 10,
            y: 10,
            w: 200,
            h: 40,
            radius: 5,
            fillColor: "gray",
            strokeColor: "blue",
            strokeWidth: 3
        });

        this.sBar = this.startVars.game.newRoundRectObject({
            x: 10,
            y: 10,
            w: this.startVars.players[0].mana * 19.4,
            h: 35,
            radius: 5,
            fillColor: "#8ecdf6",
        });

        this.mark = this.startVars.game.newRectObject({
            x: 10 + this.startVars.specials.costs[this.startVars.players[0].sNum % this.startVars.specials.numOfSpecs],
            y: 10,
            w: 5,
            h: 35,
            radius: 5,
            fillColor: "blue",
        });
    }

    static drawHP(obj) {
        brush.drawRoundRect({ //TODO brush from point.js
            w: 62,
            h: 9,
            x: obj.obj.x + 5,
            y: obj.obj.y - 8,
            radius: 5,
            fillColor: "gray",
            strokeColor: "darkred",
            strokeWidth: 2
        });
        brush.drawRoundRect({
            w: obj.health * 6,
            h: 7,
            x: obj.obj.x + 7,
            y: obj.obj.y - 6,
            radius: 5,
            fillColor: "red"
        });
    }

    draw() {
        this.back.setPositionS(point(30, 30));
        this.back.draw();

        this.hpBar.w = this.startVars.players[0].health * 19.4;
        this.hpBar.setPositionS(point(34, 34));
        this.hpBar.draw();

        this.backS.setPositionS(point(30, 80));
        this.backS.draw();

        this.sBar.w = this.startVars.players[0].mana * 19.4;
        this.sBar.setPositionS(point(34, 84));
        this.sBar.draw();

        this.mark.setPositionS(point(30 + this.startVars.specials.costs[this.startVars.players[0].sNum %
            this.startVars.specials.numOfSpecs] * 19.4, 84));
        this.mark.draw();
    }
}


