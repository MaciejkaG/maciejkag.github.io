function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString() + "; path=/";
}
function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    alert("This website is not optimised for mobile devices. Browse on bigger screen for better experience.");
}
function wherebuttonalertbuttonokbutton() {
    document.getElementById("wherebuttonalertbox").style.visibility = "hidden";
}
function wherebutton() {
    document.getElementById("wherebuttonalertbox").style.visibility = "visible";
}
document.getElementById("switch").addEventListener("change", function() {
    if (document.getElementById("switch").checked == true) {
        setCookie("darkTheme", 1);
        document.getElementsByTagName("body")[0].setAttribute("style", "animation: darkTheme 0.5s 1; color: white; background-color: #42455a;");
    } else {
        setCookie("darkTheme", 0);
        document.getElementsByTagName("body")[0].setAttribute("style", "animation: lightTheme 0.5s 1; color: black;");
        let bgAnimation = setTimeout(() => {
            document.getElementsByTagName("body")[0].setAttribute("style", "animation: bg-animation 10s ease-in-out infinite;");
        }, 500);
    }
});
if (getCookie("darkTheme")==1)
{
    document.getElementById("switch").checked = true;
    document.getElementsByTagName("body")[0].setAttribute("style", "color: white; background-color: #42455a;");
    setCookie("darkTheme", 1);
}
else {
    document.getElementById("switch").checked = false;
    document.getElementsByTagName("body")[0].setAttribute("style", "animation: bg-animation 10s ease-in-out infinite; color: black;");
    setCookie("darkTheme", 0);
}
