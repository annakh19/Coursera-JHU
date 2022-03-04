//DOM-Manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLElement);

document.addEventListener("DOMConentLoaded",
	function (event){

		function sayHello (event){
			//gibt value von ID 
			//console.log(this);
			this.textContent = "Sait it!";
			var name = document.getElementById("name").value;
			var message = "<h2>Hello " + name + "!</h2>";

			// document.getElementById("content").textContent = message;
			document.getElementById("content").innerHTML = message;


		if (name === "student"){
			// querySelector is choosing by Selectors not by IDs
			var title = document.querySelector("#title").textContent;
			title += " & We are Loving it!";
			//after setting, fix the title!
			document.querySelector("#title").textContent = title;

		};


		};

	document.querySelector("button").onclick = sayHello;

	}

);