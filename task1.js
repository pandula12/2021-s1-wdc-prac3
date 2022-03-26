function timeBox() {
    time = new Date();
    document.getElementById("current_time").innerText = time;
}
document.getElementById("time_button").onclick = timeBox;