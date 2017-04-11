var catArray = [
{name: "Name: Boba",food: "Favourite food: Sock fluff", url: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"}, {name: "Name: Barnaby",food: "Favourite food: Tuna", url: "http://www.lolcats.com/images/u/11/45/lolcatsdotcom3gp6wm7dw3jihq9t.jpg"},  {name: "Name: Max",food: "Favourite food: Whiskas", url: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},{name: "Name: PuddyCat",food: "Favourite food: milk", url: "http://www.lolcats.com/images/u/08/47/lolcatsdotcom4i1bx7w5csp6za6f.jpg"}
]
var app = function(){

  for(var i = 0;i < catArray.length; i++){
    addCat(catArray[i].name, catArray[i].food, catArray[i].url)
  }

}

window.onload = app

var addCat = function(name, food, imageURL){
  var ul = createUl()
  var li1 = createLi1(name)
  var li2 = createLi2(food)
  var li3 = createLi3(imageURL)
  appendElements(ul, li1, li2, li3)
}

var createUl = function(){
  var unOrdered = document.createElement('ul')
  unOrdered.classList.add('cat')
  return unOrdered
}

var createLi1 = function(name){
  var listItem = document.createElement('li')
  listItem.innerText=name
  return listItem
}

var createLi2 = function(food){
  var listItem = document.createElement('li')
  listItem.innerText=food
  return listItem
}

var createLi3 = function(imageURL){
  var listItem = document.createElement('li')
  var image = document.createElement('img')
  image.src = imageURL
  image.width = 500
  listItem.appendChild(image)
  return listItem
}

var appendElements = function(ul, li1, li2, li3){
  ul.appendChild(li1)
  ul.appendChild(li2)
  ul.appendChild(li3)
  var cats  = document.querySelector("#cats")
  cats.appendChild(ul)
}


