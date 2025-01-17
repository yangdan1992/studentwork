// JavaScript Document
$(document).keydown(function(event){
	
	switch(event.keyCode){
		case 74://J
			if(board[3][0]==1){
			   //说明敲击是正确的
				//初始化计时器
				timeRun();
				//黑块整体向下移动
				clearText();
				//将游戏开始去掉
			   moveDown();
			   }else{
			   //说明敲击是错误的
			   isgameover();
			   }
			break;
		case 75://K
			if(board[3][1]==1){
			  //说明敲击是正确的
				//初始化计时器
				timeRun();
				//黑块整体向下移动
				clearText();
				//将游戏开始去掉
			   moveDown();
			   }else{
			   //说明敲击是错误的
			   isgameover();
			   }
			break;
		case 76://L
			if(board[3][2]==1){
				//说明敲击是正确的
				//初始化计时器
				timeRun();
				//黑块整体向下移动
				clearText();
				//将游戏开始去掉
			   moveDown();
			   }else{
			   //说明敲击是错误的
			   isgameover()
			   }
			break;
	}
});
	function timeRun(){
		timerun+=0.001;
		$("span").text(timerun.toString().substr(0,5));
		//setTimeout（指定函数
		t1=setTimeout("timerun()",1)
	}
			
	function clearText(){
$("#block-3-0").text("");
$("#block-3-1").text("");
$("#block-3-2").text("");
		
	}
//用于游戏结束
function isgameover(){
	//停止计时
	clearTimeout(t1);
	
	//游戏结束
   $("#box-container").append("<div id='gameover' class='gameover'><p>本次用时</p><span>"+timerun.toString().substr(0,5)+"秒</span><a href='javascript:restartgame();' id='restartgamebutton'>Restart</a></div>");
	var gameover=$("#gameover")
	gameover.css("width","300px");
	gameover.css("height","400px");
	gameover.css("background-color","rgba(0,0,0,0.5)");
	
	
}
function restartgame(){
	$("#gameover").remove();
	$("#time-box"),html("<span>0.000</span>"+"秒");
	$(".block").remove();
	init();
}
function moveDown(){
	for(var i=3;i>=0;i--){
		for(var j=2;j>=0;j--){
			if(board[i][j]==1){
				if(i==3){
				//将当前的黑快样式改变
					$("#block-"+i+"-"+j).css("background-color","#ffffff");
					board[i][j]=0;
				}else{
					$("#block-"+i+"-"+j).css("background-color","#ffffff");
					board[i][j]=0;
					$("#block-"+(i+1)+"-"+j).css("background-color","#000000");
					board[i+1][j]=1;

				}
			}
		}

	}
	var randy=parseInt(Math.floor(Math.random()*3));
			var block=$("#block-0-"+randy);
		block.css("background-color","#000000");
	board[0][randy]=1;
		}
		
