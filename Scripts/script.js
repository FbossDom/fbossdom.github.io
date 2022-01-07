var isOpen = false;

function NavSlideOut(){
    var navContainer = document.getElementById("NavContainer")

    if(isOpen){
        navContainer.style.display = "none";
        console.log("clicked close");
    
        var c = document.getElementById("Menu").children
        c[0].style.transform = "";
        c[1].style.display = "";
        c[2].style.transform = "";
        isOpen = false;
    }else{
        navContainer.style.display = "block";
        console.log("clicked open");
    
        var c = document.getElementById("Menu").children
        c[0].style.transform = "translate(0, 5px) rotate(45deg) ";
        c[1].style.display = "none";
        c[2].style.transform = "translate(0, -5px) rotate(-45deg) ";
        isOpen = true;
    }
}