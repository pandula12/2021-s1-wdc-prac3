function count() {
    document.getElementById("mcount").innerText = counter;
    counter++;
}

var counter = 0;
document.getElementById("mcount").onmouseenter = count;