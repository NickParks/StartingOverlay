function spawnText(textContent) {
    let newText = document.createElement("div");

    newText.classList.add("chatText");
    newText.style.left = getRandom(0, window.innerWidth) + 'px';

    newText.innerHTML = textContent;

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

//Credit: R4ver (https://mixer.com/R4ver)
const getMixerEmoteStyle = (emote, url) => {
    const newX = emote.x === 0 ? emote.x : `-${emote.x}`;
    const newY = emote.y === 0 ? emote.y : `-${emote.y}`;

    return {
        display: "inline-block",
        width: `${emote.width}px`,
        height: `${emote.height}px`,
        backgroundImage: `url(${url})`,
        backgroundPosition: `${newX}px ${newY}px`,
    };
};

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
