function isCellValid(x,y){
	if(x>17||x<0||y>9||y<0){
		return false;
	}
	if(board[x][y]==1){
		return false;
	}
	return true;
}
function checkLeftBorder(){
	for(var i=0;i<activeBlock.length;i++){
		if(activeBlock[i].y==0){
			return false;
		}
		if(!isCellValid(activeBlock[i].x,activeBlock[i].y-1)){
			return false;
		}
		
	}
	return true;
}

function moveLeft(){
	if(checkLeftBorder()){
		erase();
		for(var i=0;i<4;i++){
			activeBlock[i].y=activeBlock[i].y-1;
		}
		paint();
	}
}
	
function checkRightBorder(){
	for(var i=0;i<activeBlock.length;i++){
		if(activeBlock[i].y==0){
			return false;
		}
   if(!isCellValid(activeBlock[i].x,activeBlock[i].y+1)){
			return false;
		}
		
	}
	return true;
}

function moveRight(){
	if(checkRightBorder()){
		erase();
		for(var i=0;i<4;i++){
		activeBlock[i].y=activeBlock[i].y+1;
		}
		paint();
	}
}
	
function checkBottomBorder(){    
	for(var i=0; i<activeBlock.length; i++){ 
		//已经在底边界
		if(activeBlock[i].x==17){    
			return false;    
		}
		//尝试向下移动一格,判断是否合法
		if(!isCellValid(activeBlock[i].x+1, activeBlock[i].y)){    
			return false;    
		}    
	}    
	return true;    
} 

function moveDown(){
	if(checkBottomBorder()){
		erase();
		for(var i=0;i<4;i++){
			activeBlock[i].x=activeBlock[i].x+1;
		}
		paint();
	}
	else{
		clearInterval(timer);
		updateBoard();
		var lines=deleteLine();
		if(lines!=0){
			switch(lines){
				case 2:{lines=3;break;}
				case 3:{lines=6;break;}
				case 4:{lines=10;break;}
			}
			score+=lines;
			document.getElementById("score").innerText=" "+score;
			eraseBoard();
			paintBoard();
		}
		erasePreview();
		if(!validateBlock(nextBlock)){
			alert("Game over!");   
			status = 2;     //设置游戏状态
			document.getElementsByTagName("input")[0].disabled = false;
			return ;         //结束该函数
		}
		activeBlock = nextBlock;   //将下一个方块设置为当前活动方块
		nextBlock = generateBlock();  //新生成一个方块作为下一个方块
		previewBlock = copyBlock(nextBlock);  //复制下一个方块作为预览方块
		paint();             //在主面板中绘制当前活动方块形状	
		applyPreview();      //调整预览方块的坐标
		paintPreview();      //在预览面板中绘制预览方块
		timer = setInterval("moveDown()",1000);   //开启定时器, 每隔一秒执行一次moveDown 
	}
		
}
function moveDownn(){
	if(checkBottomBorder()){
		erase();
		for(var i=0;i<4;i++){
			activeBlock[i].x=activeBlock[i].x+1;
		}
		paint();
	}
	else{
		clearInterval(timer);
		updateBoard();
		var lines=deleteLine();
		if(lines!=0){
			switch(lines){
				case 2:{lines=3;break;}
				case 3:{lines=6;break;}
				case 4:{lines=10;break;}
			}
			score+=lines;
			document.getElementById("score").innerText=" "+score;
			eraseBoard();
			paintBoard();
		}
		erasePreview();
		if(!validateBlock(nextBlock)){
			alert("Game over!");   
			status = 2;     //设置游戏状态
			document.getElementsByTagName("input")[0].disabled = false;
			return;         //结束该函数
		}
		activeBlock = nextBlock;   //将下一个方块设置为当前活动方块
		nextBlock = generateBlock();  //新生成一个方块作为下一个方块
		previewBlock = copyBlock(nextBlock);  //复制下一个方块作为预览方块
		paint();             //在主面板中绘制当前活动方块形状	
		applyPreview();      //调整预览方块的坐标
		paintPreview();      //在预览面板中绘制预览方块
		timer = setInterval("moveDownn()",500);   //开启定时器, 每隔一秒执行一次moveDown 
	}
		
}
function moveDownj(){
	if(checkBottomBorder()){
		erase();
		for(var i=0;i<4;i++){
			activeBlock[i].x=activeBlock[i].x+1;
		}
		paint();
	}
	else{
		clearInterval(timer);
		updateBoard();
		var lines=deleteLine();
		if(lines!=0){
			switch(lines){
				case 2:{lines=3;break;}
				case 3:{lines=6;break;}
				case 4:{lines=10;break;}
			}
			score+=lines;
			document.getElementById("score").innerText=" "+score;
			eraseBoard();
			paintBoard();
		}
		erasePreview();
		if(!validateBlock(nextBlock)){
			alert("Game over!");   
			status = 2;     //设置游戏状态
			document.getElementsByTagName("input")[0].disabled = false;
			return;         //结束该函数
		}
		activeBlock = nextBlock;   //将下一个方块设置为当前活动方块
		nextBlock = generateBlock();  //新生成一个方块作为下一个方块
		previewBlock = copyBlock(nextBlock);  //复制下一个方块作为预览方块
		paint();             //在主面板中绘制当前活动方块形状	
		applyPreview();      //调整预览方块的坐标
		paintPreview();      //在预览面板中绘制预览方块
		timer = setInterval("moveDownj()",1500);   //开启定时器, 每隔一秒执行一次moveDown 
	}
		
}
function updateBoard(){
	for(var i=0;i<4;i++){
		board[activeBlock[i].x][activeBlock[i].y]=1;
	}
}
function validateBlock(block){
	if(!block){
		return false;
	}
	for(var i=0;i<4;i++){
		if(!isCellValid(block[i].x,block.y)){
			return false;
		}
	}
	return true;
}
function rotate(){
	//把当前活动方格拷贝给临时方格
	var tmpBlock = copyBlock(activeBlock);   
	//计算方格四个点的中心点，则这四个点围绕中心旋转90度
	//Math.round() 函数返回一个数字四舍五入后最接近的整数
	var cx = Math.round((tmpBlock[0].x + tmpBlock[1].x + tmpBlock[2].x + tmpBlock[3].x)/4);    
	var cy = Math.round((tmpBlock[0].y + tmpBlock[1].y + tmpBlock[2].y + tmpBlock[3].y)/4);    
	
	//旋转的主要算法. 可以这样分解来理解：先假设围绕原点旋转，然后再加上中心点的坐标。  
	for(var i=0; i<4; i++){    
		tmpBlock[i].x = cx+cy-activeBlock[i].y;   
		tmpBlock[i].y = cy-cx+activeBlock[i].x;   
	}
	
	//检查旋转后方格是否合法   
	for(var i=0; i<4; i++){    
		if(!isCellValid(tmpBlock[i].x,tmpBlock[i].y)){   
			return;   
		}   
	}   
	//如果合法, 擦除原方块   
	erase();    
	//将旋转后的临时方块赋值给activeBlock
	activeBlock = copyBlock(tmpBlock);
	//重画当前活动方块
	paint();    
}    
// JavaScript Document