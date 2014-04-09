//<![CDATA[ 
window.onload=function(){
var trueCheckBox = document.querySelectorAll("[type=checkbox]"),
	i = 0,
	l = trueCheckBox.length;

function doCheck(e){
	var that = e.target || e.srcElement,
		targetFake = document.querySelector("[data-id="+ that.id + "]");
	
	targetFake.className = that.checked ? targetFake.className + " checked" : targetFake.className.replace(" checked", "");
}

for ( ; i<l; i++) trueCheckBox[i].addEventListener("change", doCheck, false);
}//]]>  
