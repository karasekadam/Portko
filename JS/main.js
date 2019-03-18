var nav = document.getElementById("navigation");
//prvky v navigaci
var items = document.getElementsByClassName("dropdown-item");
//projede tlačítka a zjistí, který je aktivní
for (var i; i < items.length; i++){
	items[i].addEventListener("click",function(){
		var current = documet.getElementsByClassName("active");
		//pokud není žádná aktivní class
		if (current.length>0){
			current[0].className = curren[0].className.replace("active", "");
		}
		this.className +="active";


	})

}function prepis(){
	var datum = new Date()

	var sekundy = datum.getSeconds()

	var d = datum.getHours() + ":" + datum.getMinutes() + ":" + ("0" +sekundy).substr(-2);
	document.getElementById("cas").innerText = d
}
prepis()
setInterval(prepis,1000)