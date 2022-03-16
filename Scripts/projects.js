function websiteClick(){
    document.getElementById("WebsitesCounter").style.border = "1px solid blue"
    document.getElementById("EmailsCounter").style.border = "none"

    var toHide = document.getElementsByClassName("EmailProjectItem")
    for(var i = 0; i <toHide.length; i++){
        toHide[i].style.setProperty("display", "none", "important")
    }

    var toShow = document.getElementsByClassName("WebsiteProjectItem")
    for(var i = 0; i <toShow.length; i++){
        toShow[i].style.setProperty("display", "inline-block", "important")
    }
}

function emailsClick(){
    document.getElementById("EmailsCounter").style.border = "1px solid blue"
    document.getElementById("WebsitesCounter").style.border = "none"

    var toHide = document.getElementsByClassName("WebsiteProjectItem")
    for(var i = 0; i <toHide.length; i++){
        toHide[i].style.setProperty("display", "none", "important")
    }

    var toShow = document.getElementsByClassName("EmailProjectItem")
    for(var i = 0; i <toShow.length; i++){
        toShow[i].style.setProperty("display", "inline-block", "important")
    }
}