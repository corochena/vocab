var categ;

document.addEventListener('DOMContentLoaded', function() {
    createStructure();
    createMenu();
    addBehavior();
    backButton();
}, false);

function createStructure() {
  function createElem(type, attrs, text, child,svg) {
    if (svg)
      var el = document.createElementNS("http://www.w3.org/2000/svg",type);
    else
      var el = document.createElement(type);
    if (attrs) {
      for (attName in attrs)
        el.setAttribute(attName, attrs[attName]);
    }
    if (child) el.append(child);
    if (text) el.textContent = text;
    return el;
  }
  
  var body = document.body;

  while (body.firstChild) body.removeChild(body.firstChild);

  var h1 = createElem("h1", false, "Vocabulario");
  var divMenu = createElem("div", {id:"menu"}, false, h1);

  var button = createElem("button", false, "Menu");
  var divControls = createElem("div", {id:"controls"}, false, button);

  var img = createElem("img");
  var divSlider = createElem("div", {id:"slider"}, false, img);

  var txt = createElem("text", {x:0, y:90}, "", false, true);
  var svg = createElem("svg", {id:"canvas"}, null, txt, true);
  
  body.append(divMenu);
  body.append(divControls);
  body.append(divSlider);
  body.append(svg);
}

function createMenu() {
    var menu = document.querySelector("#menu");
    
    for (var categ of db.categories) {
        // crea un elemento div
        var divCircle = document.createElement("div");
        
        var strStyle = "background-image:";
        strStyle += "url(../vocab_img/" + imgName(categ) + ")";
        
        // le agrega una clase .panel, un fondo de imagen, un texto y un id
        divCircle.classList.add("panel");
        divCircle.style = strStyle;
        divCircle.innerHTML = "<h3>" + categ.name + "</h3>";
        divCircle.setAttribute("id", categ.name);
        
        // agrega el div al contenedor menu
        menu.append(divCircle);
    }
    
    function imgName(categ) {
        // x,y,i,j para dar aleatoriedad a las imagenes mostradas
        var x = categ.instances;
        var i = Math.floor(Math.random()*x.length);
        var y = x[i].instances;
        var j = Math.floor(Math.random()*y.length);
        
        return y[j].img;
    }
}

function createSlider() {
    var slider = document.querySelector("#slider");
    var currData = db.categories.filter(function(inst) {
        return inst.name == categ;
    })[0];
    
    var index = 0;
    
    slider.addEventListener('click', function nextImg() {

      if (index == currData.instances.length) index = 0;
      var array = currData.instances[index].instances;
      var j = Math.floor(Math.random() * array.length);

      var imgName = array[j].img;
      var utt = new SpeechSynthesisUtterance(array[j].desc);
      utt.voice = window.speechSynthesis.getVoices()[0];
      window.speechSynthesis.speak(utt);
      slider.querySelector("img").setAttribute("src", "../vocab_img/" + imgName);

      document.querySelector("text").textContent = currData.instances[index].name;
      
      var delay = array[j].desc.length < 20 ? 1500: 3000;

      slider.removeEventListener('click', nextImg);

      setTimeout(function() {
          var sonidos = currData.instances[index].sonidos;
          if (sonidos) {
              var rnd = Math.floor(Math.random() * sonidos.length);
              var sound = new Audio('../vocab_img/' + sonidos[rnd]);
              sound.play();
          } 
          index++;
          slider.addEventListener('click', nextImg);
      }, delay);
    })
}


function addBehavior() {
    var panels = document.querySelectorAll(".panel");
    for (var panel of panels) {
        panel.addEventListener('click', function(e) {
            showMenu(false);
            createSlider();
        });
        panel.addEventListener('mouseenter', function(e) {
            categ = e.currentTarget.getAttribute("id");
            var utt = new SpeechSynthesisUtterance(categ);
            utt.voice = window.speechSynthesis.getVoices()[0];
            window.speechSynthesis.speak(utt);
        })
    }
}

function backButton() {
    var button = document.querySelector("button");
    button.addEventListener("click",  function() {
        showMenu(true);
        createStructure();
        createMenu();
        addBehavior();
        backButton();
    })
}

function showMenu(cond) {
    function prop(id,cond) { 
        document.querySelector(id).style = "display:" + (cond ? "block":"none");
    }
    prop("#controls", !cond);
    prop("#slider", !cond);
    prop("#menu", cond);
}