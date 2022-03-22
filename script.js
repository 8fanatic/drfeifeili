var years = document.getElementById("years");
document.getElementById("googlebar").value = "";
function beginTour() {
    window.scroll({
        top: document.getElementById("1976").offsetTop,
        left: 0,
        behavior: 'smooth'
    });
}
function changeYear() {
    if(document.getElementById("intro").offsetTop < window.pageYOffset) {
        years.innerHTML = "<span>Start</span>";
    }
    if(document.getElementById("1976").offsetTop < window.pageYOffset) {
        years.innerHTML = "<span>1976</span>";
    }
    if(document.getElementById("1991").offsetTop < window.pageYOffset) {
        years.innerHTML = "<span>1991</span>";
    }
    if(document.getElementById("1992").offsetTop < window.pageYOffset) {
        years.innerHTML = "<span>1992-1999</span>";
    }
    if(document.getElementById("1999").offsetTop < window.pageYOffset) {
        years.innerHTML = "<span>1999</span>";
    }
    if(document.getElementById("2005").offsetTop < window.pageYOffset) {
        years.innerHTML = "<span>2005</span>";
    }
    if(document.getElementById("2006").offsetTop < window.pageYOffset) {
        years.innerHTML = "<span>2006</span>";
    }
    if(document.getElementById("2009").offsetTop < window.pageYOffset) {
        years.innerHTML = "<span>2009</span>";
    }
    if(document.getElementById("2015").offsetTop < window.pageYOffset) {
        years.innerHTML = "<span>2015</span>";
    }
    if(document.getElementById("2017").offsetTop < window.pageYOffset) {
        years.innerHTML = "<span>2017</span>";
    }
    if(document.getElementById("2019").offsetTop < window.pageYOffset) {
        years.innerHTML = "<span>2019</span>";
    }
    if(document.getElementById("2020").offsetTop < window.pageYOffset) {
        years.innerHTML = "<span>2020</span>";
    }
    if(document.getElementById("accomp").offsetTop < window.pageYOffset) {
        years.innerHTML = "<span>Accolades</span>";
    }
    if(document.getElementById("endShow").offsetTop < window.pageYOffset) {
        years.innerHTML = "<span>The End</span>";
    }
}
var i = 0;

function typeText() {
    document.getElementById("googlebar").value = "";
    var nIntervId = setInterval(typeText2, 100);
}
function typeText2() {
    var textToType = "Dr. Fei Fei Li";
    document.getElementById("googlebar").value += textToType.charAt(i);
    i++;
    if(i > 14) {
        clearInterval(nIntervId);
    }
}

document.getElementById("searchIcon").onclick = function(e) {
    var search = document.getElementById("googlebar").value.replace(" ", "+");
    location.href = "https://www.google.com/search?q="+search;
}
document.getElementById("googlebar").onkeypress = function(e) {
    if(e.key === 'Enter') {
        var search = document.getElementById("googlebar").value.replace(" ", "+");
        location.href = "https://www.google.com/search?q="+search;
    }    
}
