var app = function(){
  var ul = document.createElement('ul')
  ul.classList.add('cat')

  var li1 = document.createElement("li")
  var li2 = document.createElement("li")
  var li3 = document.createElement("li")
  li1.innerText = "Name: PuddyCat"
  li2.innerText = "Favourite food: milk"
  
  var image = document.createElement("img")
  image.src = "http://www.lolcats.com/images/u/08/47/lolcatsdotcom4i1bx7w5csp6za6f.jpg" 
  image.width = 500
  li3.appendChild(image)

  ul.appendChild(li1)
  ul.appendChild(li2)
  ul.appendChild(li3)

  var cats  = document.querySelector("#cats")
  cats.appendChild(ul)
}

window.onload = app





