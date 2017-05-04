
export default class StartVars {
    constructor() {
        //singleton
        if (StartVars.__instance) {
            return StartVars.__instance;
        }
        StartVars.__instance = this;

        this.pjs = new PointJS('2d', 600, 600, {backgroundColor: "#DDDDDD"});
        this.game = this.pjs.game;
        this.mouse = this.pjs.mouseControl;
        this.key = this.pjs.keyControl;
        this.point = this.pjs.vector.point;
        this.cam = this.pjs.camera;
        this.brush = this.pjs.brush;
        this.OOP = this.pjs.OOP;
        this.camera = this.pjs.camera;
        this.audio = this.pjs.audio;
        this.oPos = null;

        this.players = [];
        this.enemies = [];
        this.specials = null;
        this.items = null;

        this.pjs.system.initFullPage();
        this.key.initKeyControl();
        this.mouse.initMouseControl();
    }
}
