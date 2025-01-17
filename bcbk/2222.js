function $(id) {
    return document.getElementById(id);
}
function creatediv(className) {
    var div = document.createElement('div');
    div.className = className;
    return div;
}
function creatcell() {
    var temp = ['cell', 'cell', 'cell', 'cell', ];
    var i = Math.floor(Math.random() * 4);
    temp[i] = 'cell black';
    return temp;
}
function createrow() {
    var con = $('con');
    var row = creatediv('row'); 
    var arr = creatcell(); 

    con.appendChild(row); 

    for (var i = 0; i < arr.length; i++) {
        row.appendChild(creatediv(arr[i])); 
    }
    if (con.firstChild == null) {
        con.appendChild(row);
    } else {
        con.insertBefore(row, con.firstChild);
    }
}
var score=0; 
var speed=4;  
var clock=null; 
var start_flag = true;

function move(e) {
    var con = $('con');
    var top = parseInt(window.getComputedStyle(con, null)['top']);
    if(speed + top > 0){
        top = 0; 
    }else{
        top += speed;
    }       
    con.style.top = top + 'px';
    
    if($('con').childNodes.length==6){
        $('con').removeChild($('con').lastChild);
    }    
    over();
    
    if(top == 0){
        createrow();
        con.style.top = '-100px';
    }else{
        top += speed;
    }
}
function over() {
    var rows = $('con').childNodes;
    if ((rows.length == 5) && (rows[rows.length - 1].pass !== 1)) {
        fail();
    }
    // for(let i = 0; i < rows.length; i++){
    //     if(rows[i].pass1 == 1) {
    //         fail();
    //     }
    // }
}
// 游戏结束
function fail() {
    clearInterval(clock); 
    alert('Game over!'+'\n'+'Final Score:'+score);
    $('score').innerHTML = 0; 
    $('con').innerHTML =  ""; 
    start_flag = true;
    $('start').innerHTML = "start";
}

function  juge(ev){    
    var e = ev ||window.event;
    if(e.target.className.indexOf('black')==-1){
        fail();
    }else{
        e.target.className='cell'  
        e.target.parentNode.pass=1;
        AddScore();
    }
}
function AddScore() {
    score+=1; 
    $('score').innerHTML = score;
    if (score % 10 == 0) {
        speed+=2;
    }
}
//开始游戏
$('start').onclick=function(ev){
    if(start_flag){
        score=0;
        speed=4;
        clock=setInterval('move()',50);
        $('con').onclick=function(ev){
            juge(ev);
        }
        $('start').innerHTML = "playing games";
        start_flag = false;
    }    
}