//chpt 43-48 Events

//1. Show an alert box on click on a link.
document.write("<button onclick='alert(`You Clicked on a Link`)'>Alert Box</button>");

//2. Display some Mobile images in browser. On click on an image Show the message in alert to user.
var mobiles = [
    {
        'name': 'iPhone XS',
        'image': 'https://www.whatmobile.com.pk/admin/images/Apple/AppleiPhoneXS-b.jpg'
    },
    {
        'name': 'Nokia 9',
        'image': 'https://www.whatmobile.com.pk/admin/images/Nokia/Nokia9b.jpg'
    },
    {
        'name': 'Samsung S11',
        'image': 'https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyS20-b.jpg'
    },
    {
        'name': 'Infinix Hot 8',
        'image': 'https://www.whatmobile.com.pk/admin/images/Infinix/InfinixHot8-b.jpg'
    }
];
for (let i = 0; i < mobiles.length; i++) {
    document.write("<div style='width: 24%; float: left; text-align: center;'>");
    document.write(`<button style='border: none;' onclick='alert("Thanks for puchasing : ${mobiles[i].name}")'>`);
    document.write(`<img src='${mobiles[i].image}'>`);
    document.write(`<p style='text-align: center;'>${mobiles[i].name}</p>`);
    document.write("</button>");
    document.write("</div>");
}

//3. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted
function Delete1(){
    var del1 = document.getElementById("delete1");
    del1.remove();
}
function Delete2(){
    var del2 = document.getElementById("delete2");
    del2.remove();
}
function Delete3(){
    var del3 = document.getElementById("delete3");
    del3.remove();
}
function Delete4(){
    var del4 = document.getElementById("delete4");
    del4.remove();
}
function Delete5(){
    var del5 = document.getElementById("delete5");
    del5.remove();
}



//4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout. 
function after(){
    document.getElementById("flower").src = "images/b.jpg";
}
function before(){
    document.getElementById("flower").src = "images/a.jpg";
}

//5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser
var a = document.getElementById("input");
var counter = 1;
function increase(){
    a.innerHTML = counter.toString();
    counter++;
    return counter;
}
function decrease(){
    a.innerHTML = counter.toString();
    counter--;
    return counter;
}


