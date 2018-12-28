var shapes
var request = new XMLHttpRequest ()
request.open (
    'GET',
    'https://karynalabazova.github.io/js/shapes.json'
)

request.onload = function(){
	shapes = JSON.parse(this.responseText)
	.forEach(
	function (item){
		var image = document.createElement('img')
		document.body.appendChild(image)
		image.src = item.ref
		image.style.width = '100px'
		var title = document.createElement('p')
		document.body.appendChild(title)
		title.innerHTML = item.title
	}
)
}
request.send()
