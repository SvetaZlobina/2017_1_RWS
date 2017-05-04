import StartVars from './startVars'
import Person from './person'
import Specials from './specials'
import Items from './items'


(function () {

    let startVars = new StartVars();

    //initializing properties of singleton StartVars:

    startVars.players.push(new Person("assets/p2.png"));
    startVars.players[0].init();

    startVars.oPos = startVars.players[0].obj.getPositionC();
    startVars.specials = new Specials();

    startVars.items = new Items();
    startVars.items.generateWeapon();
    // items.generateBox();
    startVars.items.generateMedkit();
    startVars.items.generateRack();



    let img = startVars.pjs.tiles.newImage("assets/p2.png");

    let shotPoint = startVars.game.newCircleObject({
        radius: 3
    });

    let deathAnim = startVars.pjs.tiles.newImage("assets/death.png").getAnimation(0, 0, 177, 177, 18);

    startVars.game.newLoop("l1", function () {
        startVars.game.clear();
        startVars.oPos = player.obj.getPositionC();

        map.draw();

        enemy.draw();

        if (!pause.pause) {
            player.do();

            camera.moveTimeC(pjs.vector.getPointAngle(point(oPos.x + 150, oPos.y), oPos, shotPoint.getAngle()), 20);
            shotPoint.setPositionC(oPos);
            shotPoint.rotate(mouse.getPosition());

            weapon.fire();
        }

        if (key.isPress("C")) console.log(player.obj.x + " " + player.obj.y);

        weapon.moveWeapon();


        items.draw();

        timer.drawTimer();

        specials.checkSpec();

        gui.draw();

        pause.pauseWork();
    });


    game.newLoop("tutorial", function () {
        game.clear();
        oPos = player.obj.getPositionC();

        map.draw();

        for (let i = 0; i < 5; i++) {
            enemies[i].draw();
        }

        if (!pause.pause) {
            player.do();

            camera.moveTimeC(pjs.vector.getPointAngle(point(oPos.x + 150, oPos.y), oPos, shotPoint.getAngle()), 20);
            shotPoint.setPositionC(oPos);
            shotPoint.rotate(mouse.getPosition());

            weapon.fire();
        }

        if (key.isPress("C")) console.log(player.obj.x + " " + player.obj.y);

        weapon.moveWeapon();


        items.draw();

        timer.drawTimer();

        specials.checkSpec();

        gui.draw();

        if (!tutorialEnd) {
            drawTutorial();
        } else {
            pause.pauseWork();
        }
    });

    startVars.game.startLoop("tutorial");
})();