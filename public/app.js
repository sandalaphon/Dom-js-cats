var catArray = [
{name: "Name: cat1",food: "Favourite food: z", url: "http://www.lolcats.com/images/u/08/47/lolcatsdotcom4i1bx7w5csp6za6f.jpg"}, {name: "Name: cat2",food: "Favourite food: q", url: "http://www.lolcats.com/images/u/08/47/lolcatsdotcom4i1bx7w5csp6za6f.jpg"}, {name: "Name: PuddyCat",food: "Favourite food: milk", url: "http://www.lolcats.com/images/u/08/47/lolcatsdotcom4i1bx7w5csp6za6f.jpg"}
]
var app = function(){

  for(var i = 0;i < catArray.length; i++){
    addCat(catArray[i].name, catArray[i].food, catArray[i].url)
  }

  // addCat("name: PuddyCat", "food: milk", "http://www.lolcats.com/images/u/08/47/lolcatsdotcom4i1bx7w5csp6za6f.jpg")
  // var ul = document.createElement('ul')
  // ul.classList.add('cat')

  // var li1 = document.createElement("li")
  // var li2 = document.createElement("li")
  // var li3 = document.createElement("li")
  // li1.innerText = "Name: PuddyCat"
  // li2.innerText = "Favourite food: milk"
  
  // var image = document.createElement("img")
  // image.src = "http://www.lolcats.com/images/u/08/47/lolcatsdotcom4i1bx7w5csp6za6f.jpg" 
  // image.width = 500
  // li3.appendChild(image)

  // ul.appendChild(li1)
  // ul.appendChild(li2)
  // ul.appendChild(li3)

  // var cats  = document.querySelector("#cats")
  // cats.appendChild(ul)
  
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


