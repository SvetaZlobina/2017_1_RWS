

var arr = {};

fire();

var shotPoint = game.newCircleObject({
	radius: 3
});




game.newLoop("l1", function()
{
    game.clear();
    oPos = obj.getPositionC();
	
	camera.moveTimeC(pjs.vector.getPointAngle(point(oPos.x + 150, oPos.y), oPos, shotPoint.getAngle()),20);
	
	shotPoint.setPositionC(obj.getPositionC());
	shotPoint.rotate(mouse.getPosition());
	
	/*OOP.forXY(100,100,function(x,y){
		brush.drawRect({
			x: x*50, y: y*50,
			w: 48, h: 48,
			fillColor: "gray"
		});		
	});*/
	
	OOP.drawArr(blocks);
	
	fire();
	
    drawEnemy();

	obj.do();
	
	//wall.draw();
    
    drawHP(obj);
    
    drawItems();
	
	
	
});

game.startLoop("l1");