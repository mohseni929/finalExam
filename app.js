let hiddenElements = document.querySelectorAll('label, input, button')


for (elements of hiddenElements) {
    elements.classList.add("hidden");
}

function displayImages() {
    let displayEl = document.getElementById("images");
    displayEl.classList.add("display");
    document.getElementById("thumb-bar").appendChild(img);
}

document.getElementById("thumb-bar").addEventListener(),function(e){
    for (elements of hiddenElements) {
        elements.classList.remove("hidden");
    }

    currentElement = e.target
    imageDisplay = document.getElementsByClassName("displayImage")
    imageDisplay[0].src = (currentElement.src)
}
