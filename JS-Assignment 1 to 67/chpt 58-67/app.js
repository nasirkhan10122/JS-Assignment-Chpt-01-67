//Chpt 58-67 DOM


// (i)
var mainContent = document.getElementById("main-content");
console.log(mainContent);

// (ii)
var elements = document.getElementById("main-content").childNodes;
console.log(elements);

// (iii)
var ren = document.getElementsByClassName("render");
for(var i = 0;i< ren.length ;i++){
    document.write(ren[i].innerHTML + "<br>");
}

//(iv)
document.getElementById("first-name").value = "Nasir";
// (v)
document.getElementById("last-name").value = "Khan";
document.getElementById("email").value = "nasir.khan5869@gmail.com";
