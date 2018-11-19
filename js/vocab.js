var categ, sound;

document.addEventListener('DOMContentLoaded', function() {
  //no se cuando se debe usar DOMContentLoaded o si es util para este programa
  createStructure();
  createMenu();
  addBehavior();
  backButton();
}, false);

function createStructure() {
  // crea los elementos html de la aplicacion, dos h1, tres div, un button y un img
  function createElem(type, id, text, child) {
    var el = document.createElement(type);
    if (id) el.setAttribute("id", id);
    if (child) el.append(child);
    if (text) el.textContent = text;
    return el;
  }
  
  var body = document.body;

  while (body.firstChild) body.removeChild(body.firstChild);

  var h1 = createElem("h1", false, "Vocabulario");
  var divMenu = createElem("div", "menu", false, h1);

  var button = createElem("button", false, "Menu");
  var divControls = createElem("div", "controls", false, button);

  var img = createElem("img");
  // podria no necesitar el divSlider y poner la imagen directamente en el body
  var divSlider = createElem("div", "slider", false, img);

  var h1Name = createElem("h1", "h1Name");
  
  body.append(divMenu);
  body.append(divControls);
  body.append(divSlider);
  body.append(h1Name);
}

function createMenu() {
  var menu = document.querySelector("#menu");

  for (var categ of db.categories) {
    // crea un elemento div
    var divCircle = document.createElement("div");

    var strStyle = "background-image: url(./vocab_img/" + imgName(categ) + ")";

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

function addBehavior() {
  var panels = document.querySelectorAll(".panel");
  for (var panel of panels) {
    panel.addEventListener('click', e => {
      showMenu(false);
      createSlider();
    });
    panel.addEventListener('mouseenter', e => {
      categ = e.currentTarget.getAttribute("id");
      speak(categ);
    })
  }
}

function speak(word) {
  var utt = new SpeechSynthesisUtterance(word);
  utt.voice = window.speechSynthesis.getVoices()[0];
  window.speechSynthesis.speak(utt);
}

function createSlider() {
  var w = document.documentElement;
  if (w.requestFullscreen)
    w.requestFullscreen();
  else if (w.webkitRequestFullscreen)
    w.webkitRequestFullscreen();
  else if (w.mozRequestFullscreen)
    w.mozRequestFullscreen();
  
  var slider = document.querySelector("#slider");
  var currData = db.categories.filter(inst => {
    return inst.name == categ;
  })[0].instances;

  var index = 0;
   
  slider.addEventListener('click', function nextImg() {
    if (sound) sound.pause();

    if (index == currData.length) index = 0;
    var array = currData[index].instances;
    var j = Math.floor(Math.random() * array.length);
    
    speak(array[j].desc);
    
    slider.querySelector("img").setAttribute("src", "./vocab_img/" + array[j].img);

    document.querySelector("#h1Name").textContent = currData[index].name;

    var delay = array[j].desc.length < 20 ? 1500: 3000;

    slider.removeEventListener('click', nextImg);

    setTimeout(function() {
      var sonidos = currData[index].sonidos;
      if (sonidos) {
        var rnd = Math.floor(Math.random() * sonidos.length);
        sound = new Audio('./vocab_img/' + sonidos[rnd]);
        sound.play();
      } 
      index++;
      slider.addEventListener('click', nextImg);
    }, delay);
  })
}

function backButton() {
  var button = document.querySelector("button");
  button.addEventListener("click",  () => {
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
