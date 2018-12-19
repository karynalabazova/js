//задание 1
var operations = [  'push',  'pop',  'shift',  'unshift'  ]
var currentOperation = null
var arr = []

var arrElem = document.createElement ( 'section' )
document.body.appendChild ( arrElem )
arrElem.innerHTML = arr

var elem = document.createElement ( 'input' )
elem.type = 'text'
document.body.appendChild ( elem )
elem.placeholder = 'новый элемент массива'
elem.style.visibility = 'hidden'

elem.onchange = function ( event ) {
    arr [ currentOperation ] ( this.value )
    arrElem.innerHTML = arr
    this.style.visibility = 'hidden'
}
var extracted = document.createElement ( 'p' )
document.body.appendChild ( extracted )

var btns = []

for ( var operation of operations ) {
    btns.push (
      document.body.appendChild (
        document.createElement ( 'button' )
      )
    )
    btns [ btns.length-1 ].innerHTML = operation
    btns [ btns.length-1 ].onclick = exploreArray.bind ( elem )
}
function exploreArray ( event ) {
    currentOperation = event.target.innerHTML
    if ( currentOperation === 'push' || currentOperation === 'unshift' ) {
        this.style.visibility = 'visible'
    } else {
        if ( arr.length === 0 ) {
            this.placeholder = 'Массив пуст, невозможно выполнить операцию'
        } else {
            extracted.innerHTML = arr [ currentOperation ] ()
            arrElem.innerHTML = arr
        }
    }
}

var indexArea = document.createElement ( 'input' )
indexArea.type = 'number'
document.body.appendChild ( indexArea )
indexArea.placeholder = 'input index'

var valueArea = document.createElement ( 'input' )
valueArea.type = 'number'
document.body.appendChild ( valueArea )
valueArea.placeholder = 'input value'

var insertButton = document.createElement('button')
document.body.appendChild(insertButton)
insertButton.innerHTML = 'add to index'

insertButton.onclick = function(){
	if (indexArea.value >= 0 && indexArea.value < arr.length){
    	arr.splice( indexArea.value, 0, valueArea.value )
        arrElem.innerHTML = arr
    }else {
		console.error('index does not exist')
    }
}
//задание 2
var tagNames = [ "div", "div", "div", "div", "button" ]
var divStyle = `
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: solid 1px green;
    font-size: 25px;
`
elements = tagNames.map ( function ( x ) {
    return document.body.appendChild (
        document.createElement ( x )
    )
})

elements.filter ( function ( element ) {
    return element.tagName === "DIV"
})
.forEach ( function ( element, num ) {
            element.style = divStyle
            element.innerText = num
})

elements.filter ( function ( element ) {
    return element.tagName === "BUTTON"
})
.forEach ( function ( element ) {
    element.innerHTML = "remove DIVs"
    element.onclick = function ( event ) {
            recursRemove ()
    }
})

function recursRemove(){
 document.querySelector("div").remove()
 while (document.querySelector("div")) recursRemove()
}
