var tbl;
var preTbl;
var status=0;
var kn=0;
var jd=0;
var zd=0;
var timer;
var score=0;
var board=new Array(18);
for(var i=0;i<=18;i++){
	board[i]=new Array(10);
}
var activeBlock;
var nextBlock;
var previewBlock;
function ben(obj){
	if(status==1) return ;
	obj.disabled=true;
	kn=1;
	status=1;
	tbl=document.getElementById("board");
	preTbl=document.getElementById("preBoard");
	eraseBoard();
	for(var i=0;i<18;i++){
		for(var j=0;j<10;j++){
			board[i][j]=0;
		}
	}
	activeBlock=generateBlock();
	nextBlock=generateBlock();
	previewBlock=copyBlock(nextBlock);
	paint();
	applyPreview();
	paintPreview();
timer=setInterval("moveDownn()",500);
}
function bez(obj){
    if(status==1) return ;
	obj.disabled=true;
	zd=1;
	status=1;
	tbl=document.getElementById("board");
	preTbl=document.getElementById("preBoard");
	eraseBoard();
	for(var i=0;i<18;i++){
		for(var j=0;j<10;j++){
			board[i][j]=0;
		}
	}
	activeBlock=generateBlock();
	nextBlock=generateBlock();
	previewBlock=copyBlock(nextBlock);
	paint();
	applyPreview();
	paintPreview();
timer=setInterval("moveDown()",1000);
}
function bej(obj){
	if(status==1) return ;
	obj.disabled=true;
	jd=1;
	status=1;
	tbl=document.getElementById("board");
	preTbl=document.getElementById("preBoard");
	eraseBoard();
	for(var i=0;i<18;i++){
		for(var j=0;j<10;j++){
			board[i][j]=0;
		}
	}
	activeBlock=generateBlock();
	nextBlock=generateBlock();
	previewBlock=copyBlock(nextBlock);
	paint();
	applyPreview();
	paintPreview();
timer=setInterval("moveDownj()",1500);
}
document.onkeydown=function(){
	if(status!=1){
		return;
	}
	var code=event.keyCode;
	switch(code){
		case 37:{
			moveLeft();
			break;
		}
		case 38:{
			rotate();
			break;
		}
		case 39:{
			moveRight();
			break;
		}
		case 40:{
			if(kn==1){
			moveDownn();}
			if(zd==1){
			moveDown();}
			if(jd==1){
			moveDownj();}
			break;
		}
			   }
}
// JavaScript Document