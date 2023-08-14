// JavaScript Document
var mnt = document.getElementById("Mnt");
var evt = document.getElementById("Evt");
var ats = document.getElementById("Ats");
var res = document.getElementById("bx");
function Generate(){
	if(mnt.value==""){
		alert("错误#0001：未输入主体");
		return 1;
	}else if(evt.value==""){
		alert("错误#0002：未输入事件");
		return 1;
	}else if(ats.value==""){
		alert("错误#0003：未输入另一种说法");
		return 1;
	}
	res.innerHTML="　　"+mnt.value+evt.value+"是怎么回事呢？"+mnt.value+"相信大家都很熟悉，但是"+mnt.value+evt.value+"是怎么回事呢，下面就让小编带大家一起了解吧。"+"\n	"+mnt.value+evt.value+"，其实就是"+ats.value+"，大家可能会很惊讶"+mnt.value+"怎么会"+evt.value+"呢？但事实就是这样，小编也感到非常惊讶。"+"\n	"+"这就是关于"+mnt.value+evt.value+"的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！";
	return 0;
}