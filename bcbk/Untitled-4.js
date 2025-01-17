// JavaScript Document
var board=new Array()
var timerun=0.000;
var t1;
$(function(){
	init();
});
function init(){
	console.log(1)
	//完成十二个白块的布局
	for(var i=0;i<4;i++){
		board[i]=new Array();
		for(var j=0;j<3;j++){
			var grid=$("#grid-"+i+"-"+j);
			grid.css("top",getPosTop(i,j));
			grid.css("left",getPosLeft(i,j));
			//十二个黑块布局
			$("#box-container").append($("<div class='block' id='block-"+i+"-"+j+"'></div>"));
			var block=$("#block-"+i+"-"+j);
			block.css("top",getPosTop(i,j));
			block.css("left",getPosLeft(i,j));
			//12个黑块的值默认为0
			board[i][j]=0;
		}
	}
//每一行随机生成黑块
	for(var i=0;i<4;i++){
		//生成随机的列
		var randy = parseInt(Math.floor(Math.random()*3));
		//随机生成12个方块
		if(i>0&&board[i-1][randy]==1){
			randy=parseInt(Math.floor(Math.random()*3));
		}
		var block=$("#block-"+i+"-"+randy);
		block.css("background-color","#000000");
		board[i][randy]=1;
	}
$("#block-3-0").text("按J开始");
$("#block-3-1").text("按K开始");
$("#block-3-2").text("按L开始");
									   }	


function getPosTop(i,j){
	return i*100;
}

function getPosLeft(i,j){
	return j*100
}
 
	 
