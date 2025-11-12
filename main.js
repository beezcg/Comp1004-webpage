function HideImages(){
    var myElement = document.getElementById("picture");
    if (myElement.style.display === "none"){
        myElement.style.display = "center";
    } else {
        myElement.style.display = "none";
    }
}

function Theme_Changer(){
    var theme = document.getElementById("theme")
    if (theme.getAttribute("href") === "comp1004.css"){
        theme.setAttribute("href", "light_mode.css");
    } else if (theme.getAttribute("href") === "light_mode.css"){
        theme.setAttribute("href", "dark_mode.css");
    } else {
        theme.setAttribute("href", "comp1004.css");
    }
    
}