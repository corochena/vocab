let voice = new p5.Speech();
voice.setLang("es-ES");
//voice.setLang("es-" + (Math.random() < 0.1? "MX":"ES"));
voice.setRate(0.9);
// voice.setPitch(1);
//voice.speak('Vocabulario');

var perro = new Howl({
    src:['../vocab_img/dog4.mp3'],
    sprite: {
        main: [1600,2900]
    }
});
//perro.play('main');

var categ;

document.addEventListener('DOMContentLoaded', function() {
    createStructure();
    createMenu();
    addBehavior();
    backButton();
}, false);

function createStructure() {
    function createElem(type, id, text, child) {
        var el = document.createElement(type);
        if (id) el.setAttribute("id", id);
        if (child) el.append(child);
        if (text) el.textContent = text;
        return el;
    }
    
    while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
    
    var h1 = createElem("h1", false, "Vocabulario");
    var divMenu = createElem("div", "menu", false, h1);
    
    var button = createElem("button", false, "Menu");
    var divControls = createElem("div", "controls", false, button);
    
    var img = createElem("img");
    var divSlider = createElem("div", "slider", false, img);
    
    document.body.append(divMenu);
    document.body.append(divControls);
    document.body.append(divSlider);
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
    
    slider.addEventListener('click', function() {

        if (index == currData.instances.length) index = 0;
        var array = currData.instances[index].instances;
        var j = Math.floor(Math.random() * array.length);
        
        var imgName = array[j].img;
        voice.speak(array[j].desc)
        slider.querySelector("img").setAttribute("src", "../vocab_img/" + imgName);
        
        var delay = array[j].desc.length < 20 ? 1500: 3000;
        
        setTimeout(function() {
            var sonidos = currData.instances[index].sonidos;
            if (sonidos) {
                var rnd = Math.floor(Math.random() * sonidos.length);
                var sound = new Howl({
                    src: sonidos.map(function(file) {
                        return '../vocab_img/' + file;
                    }).slice(rnd)
                });
                sound.play();
                /*
                var rnd = Math.floor(Math.random() * sonidos.length);
                
                if (currData.instances[index].duraciones) {
                    if (currData.instances[index].duraciones[rnd]) {
                        sound._sprite = {
                            main: currData.instances[index].duraciones[rnd]
                        };
                        console.log(sound);
                        sound.play('main');    
                    }
                    else
                        sound.play();
                }
                else
                    sound.play();
                    */
            } 
            index++;
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
            categ = e.currentTarget.getAttribute("id")
            voice.speak(categ);
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