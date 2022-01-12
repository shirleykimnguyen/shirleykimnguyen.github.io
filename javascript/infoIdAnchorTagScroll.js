const possibleIds = ["about", "reels", "resume", "headshots", "contact"];

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        const URL = window.location.href;
        const splitURL = URL.split("#");

        // only refresh to go to element if there is a valid element to go to in the URL
        if (splitURL.length == 2 && possibleIds.includes(splitURL[1])) {
            window.location.href = URL;
        }
    }
};
