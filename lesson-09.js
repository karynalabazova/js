//задание 1
var picture = document.createElement ( 'img' )
document.body.appendChild ( picture )
fetch ( ' https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg' )
    .then ( response => {
        response.blob().then ( response => {
    	    urlObject = URL.createObjectURL( response)
    	    picture.src = urlObject
        })
    })
//задание 2
var titles = ["home","gallery","info"]
var pics = ["https://cdn4.iconfinder.com/data/icons/social-messaging-productivity-black-4/127000/24-512.png",
"https://cdn3.iconfinder.com/data/icons/objects/512/gallery_2-512.png",
"https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/info-circle-outline-512.png"]

var title = document.body.appendChild(document.createElement('h3'))
var pic = document.body.appendChild(document.createElement('img'))


window.onhashchange = function(event){
var hash = location.hash.slice (1, 2)
if (hash < 0 || hash > 2) {
  hash = 0
  console.error("page not found")
}
localStorage.setItem("pageId",location.hash)
localStorage.setItem("startTime",new Date().toLocaleString())
console.log(`pageId:${localStorage.getItem("pageId")},startTime:${localStorage.getItem("startTime")}`)
pic.src = pics[hash]
title.innerHTML = titles[hash]
}
