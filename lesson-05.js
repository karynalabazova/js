//задание 1
var text = document.createElement("p")
text.innerText = "Click me!"
text.setAttribute("id", "text")
document.body.appendChild(text)

function addImage (event){
	var img = document.createElement("img")
	document.body.appendChild (img)
	img.setAttribute("id", "myImg")
	img.src = "http://www.rosphoto.com/images/u/articles/1510/7_5.jpg"
	img.style.height = "100px"
	document.getElementById("myImg").addEventListener('mouseenter',zoomImage)
	document.getElementById("myImg").addEventListener('click',deleteImage)
}

function zoomImage (event){
	document.getElementById("myImg").style.transition = "all 3s"
	document.getElementById("myImg").style.height = "200px"
}

function deleteImage (event){
	var elem = document.querySelector("#myImg")
	elem.parentNode.removeChild(elem);
}
document.getElementById("text").addEventListener('click',addImage)

//задание 2
var tags = []
var tagNames = ["div","div","p","p"]
for (var x of tagNames){
	tags.push(
		document.body.appendChild(
			document.createElement(x)
		)
	)
}
var colors = ["#fde23e","#f16e23", "#57d9ff","#937e88"]
var i =0

for (var x of tags){
	x.style.backgroundColor = `${colors[i++]}`
	x.style.height = "100px"
}

function clickHandler ( event ) {
    this.innerText = "clicked"
}

for (var x of tags){
	x.addEventListener('click', clickHandler)
}


var funcs = []
funcs.push(
	function changeColor(event){
		this.style.backgroundColor = "pink"
	},
	function changeText(event){
		this.innerText = "text changed"
	},
    function changeBorder(event){
		this.style.border = "1px solid black"
	},
	function changeSize(event){
		this.style.height = "50px"
	}
)

var func = 0
for (var x of tags){
	x.addEventListener('click', funcs[func++])
}
