var counter = 0;

function count() {
    counter++;
    document.getElementById('mcount').innerText = counter;
}

function new_post() {
    let post_number = document.querySelector('input[name="quantity"]').value;
    let date = new Date();
    let content = document.getElementById('message').value;
    let post = document.getElementById('posts');

    for (let i = 0; i < post_number; i++) {

        let postDate = document.createElement("p");
        let postContent = document.createElement("p");

        postDate.class = 'post-date';
        postContent.class = 'post-content';

        postDate.style.fontWeight = "bold";
        postDate.style.color = "grey";

        if (document.querySelector('input[name="color"]:checked')) {
            let post_color = document.querySelector('input[name="color"]:checked').value;
            postContent.style.color = post_color;
        }

        postDate.innerText = date;
        postContent.innerText = content;

        post.appendChild(postDate);
        post.appendChild(postContent);
    }
}

function menu() {
    let main = document.getElementById("main");
    main.style.display = 'none';
    let menu = document.getElementById("menu");
    menu.style.display = 'block';
}

function main() {
    let main = document.getElementById("main");
    main.style.display = 'block';
    let menu = document.getElementById("menu");
    menu.style.display = 'none';
}



