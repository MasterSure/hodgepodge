let oUl=document.getElementsByTagName('ul')[0]
let oLi=document.getElementsByTagName('li')
let oleft=document.getElementById("left")
let oRight=document.getElementById("right")
let aBtn=document.getElementsByTagName('button')
let n=0

let timer=setInterval(rightPlay,2000)


oRight.onclick=function () {
	clearInterval(timer)
	rightPlay()
	timer=setInterval(rightPlay,2000)
}
function rightPlay() {
	n++
	if(n>oLi.length-1){
		n=0
	}
	oUl.style.left=-52*n+'vw'
}
oleft.onclick=function () {
	clearInterval(timer)
	leftplay()
	timer=setInterval(rightPlay,2000)
}
function leftplay() {
	n--
	if(n<0){
		n=oLi.length-1
	}
	oUl.style.left=-52*n+'vw'
}

for (let i = 0; i < aBtn.length; i++) {
	aBtn[i].onmouseover=function (){
		clearInterval(timer)
		oUl.style.left=-52*i+'vw'
		n=i
	}
	aBtn[i].onmouseout=function (){
		timer=setInterval(rightPlay,2000)
	}
}
