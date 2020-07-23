//Chpt 49-52 EVENTS

//1. Create a signup form and display form data in your web page on submission.
function submission(){
    var name = document.getElementById("name");
    document.write(name.value);
    var email = document.getElementById("e-mail");
    document.write(email.value);



function readMore(){
    var para = "This study was a preliminary study of high school student value changes because of the terrorist attack on the U.S. The major limitations of this study were that the student population was from California and might not truly represent all high school students in the U.S. Further, this study could not be considered a truly longitudinal study because of privacy issues that prevented the researchers from identifying all the students who returned surveys before the attack. In addition, the senior class had graduated the previous year, and a much larger freshman class entered the school. These issues not only made the samples similar, but also different in their composition. The researchers will conduct periodic studies to explore whether these value changes are permanent and continue into adulthood. We do not know what if any changes will take place in their values as they grow older, and we will continue to explore their values in our longitudinal studies of the impact of the 9/11 terrorist attacks.";
    document.getElementById("paragraph").innerHTML = para;
}