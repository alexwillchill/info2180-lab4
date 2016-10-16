


window.onload=function(){
	var barrier=document.querySelectorAll('.boundary');
	var touch= false;
	document.getElementById('start').onmouseover=start;
	document.getElementById('end').onmouseover=end;
		for(var i=0;i<barrier.length;i++){
			barrier[i].onmouseover=borders;
		}
	document.getElementById('start').click=startover;
	document.getElementById('start').mousemove=cheater;
}


function borders(){
	var barrier=document.querySelectorAll('.boundary');
	for(var x=0;x<barrier.length;x++);{
		barrier[x].className="boundary youlose";

	}
}


function start(){
	var barrier=document.querySelectorAll('.boundary')
	for(var y=0; y<barrier.length;y++){
		barrier.classList.remove="Loser you suck";
	}

}


function end(){
	//touch=true;
	if(touch){
		document.getElementById('status').innerHTML="You Win! good job";
	}
	else{
		document.getElementById('status').innerHTML="Loser you suck";
	}


}


function startover(){
	window.location.reload();

}


function cheater(){
	var x=event.clientX;
	var y=event.clientY;
	var begin=getElementById('start');
	document.begin.innerHTML=x.offsetLeft;
	document.begin.innerHTML=y.offsetTop;
}


