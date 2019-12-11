function spawnText(textContent) {
    let newText = document.createElement("div");
    let newTextContent = document.createTextNode(textContent);

    newText.classList.add("chatText");
    newText.appendChild(newTextContent);

    newText.style.left = getRandom(0, window.innerWidth) + 'px';

    document.body.appendChild(newText);

    newText.addEventListener("webkitAnimationEnd", () => {
        newText.remove();
    });
}

function spawnImage(url) {
    let newText = document.createElement("img");
    newText.setAttribute("src", url);
    newText.setAttribute("width", "128");
    newText.setAttribute("height", "128");

    newText.classList.add("chatImage");
    newText.style.left = getRandom(0, window.innerWidth) + 'px';

    document.body.appendChild(newText);

    newText.addEventListener("webkitAnimationEnd", () => {
        newText.remove();
    });
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
