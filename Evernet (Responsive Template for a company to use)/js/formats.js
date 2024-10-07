setInterval(function footer(){
	if(window.innerHeight>window.innerWidth)
	{
		document.getElementById("MainFooter1").style.display="none";
		document.getElementById("MainFooter2").style.display="block";
	}
	else if(window.innerHeight<window.innerWidth)
	{
		document.getElementById("MainFooter1").style.display="block";
		document.getElementById("MainFooter2").style.display="none";
	}
	else
	{
		document.getElementById("MainFooter1").style.display="block";
		document.getElementById("MainFooter2").style.display="none";
	}
},100);
setInterval(function products(){
	if(window.innerHeight>window.innerWidth)
	{
		document.getElementById("Products2").style.display="block";
		document.getElementById("Products1").style.display="none";
		document.getElementById("Products3").style.display="none";
	}
	else if(window.innerHeight<window.innerWidth && window.innerWidth<=1075 && window.innerWidth>850)
	{	
		document.getElementById("Products2").style.display="none";
		document.getElementById("Products1").style.display="none";
		document.getElementById("Products3").style.display="block";
		document.getElementById("Stxt1").style.lineHeight="1.5";
		document.getElementById("Stxt2").style.lineHeight="1.5";
		document.getElementById("Stxt3").style.lineHeight="1.5";
	}
	else if(window.innerHeight<window.innerWidth && window.innerWidth<=850)
	{
		document.getElementById("Products2").style.display="none";
		document.getElementById("Products1").style.display="none";
		document.getElementById("Products3").style.display="block";
		document.getElementById("Stxt1").style.lineHeight="1";
		document.getElementById("Stxt2").style.lineHeight="1";
		document.getElementById("Stxt3").style.lineHeight="1";
	}
	else if(window.innerHeight<window.innerWidth)
	{
		document.getElementById("Products2").style.display="none";
		document.getElementById("Products1").style.display="block";
		document.getElementById("Products3").style.display="none";
	}
	else
	{
		document.getElementById("Products2").style.display="none";
		document.getElementById("Products1").style.display="block";
		document.getElementById("Products3").style.display="none";
	}
},100);
function moveArrow(){
	document.getElementById("arrow").style.left="-0.5%";
}
function moveArrowBack(){
	document.getElementById("arrow").style.left="0%";
}
setInterval(function gallery(){
	if(window.innerHeight>window.innerWidth)
	{
		document.getElementById("imgSet1").style.display="none";
		document.getElementById("imgSet2").style.display="block";
	}
	else if(window.innerHeight<window.innerWidth)
	{
		document.getElementById("imgSet1").style.display="block";
		document.getElementById("imgSet2").style.display="none";
	}
	else
	{
		document.getElementById("imgSet1").style.display="block";
		document.getElementById("imgSet2").style.display="none";
	}
},100)